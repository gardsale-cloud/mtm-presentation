// Redirect from file:// to the local server to bypass cache and security limitations
if (window.location.protocol === 'file:') {
    fetch('http://localhost:3099/')
        .then(() => window.location.replace('http://localhost:3099/'))
        .catch(() => console.log('Server not running.'));
}

let currentSlide = 1;
let totalSlides = 0;

// Initialize presentation assembly on load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slides-container');
    const footerDots = document.querySelector('.footer-dots');
    
    if (!container || !footerDots) return;

    // Get registered slide numbers sorted numerically
    const slideNumbers = Object.keys(window.presentationSlides)
        .map(Number)
        .sort((a, b) => a - b);
    
    totalSlides = slideNumbers.length;
    
    // Clear static placeholders
    container.innerHTML = '';
    footerDots.innerHTML = '';

    // Dynamically render slides and dots
    slideNumbers.forEach((num, index) => {
        const isActive = index === 0;
        
        // Render slide structure
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide ${isActive ? 'active' : ''}`;
        slideDiv.setAttribute('data-slide', num);
        slideDiv.innerHTML = window.presentationSlides[num];
        container.appendChild(slideDiv);
        
        // Render navigation dot
        const dotSpan = document.createElement('span');
        dotSpan.className = `dot ${isActive ? 'active' : ''}`;
        dotSpan.setAttribute('data-slide-target', num);
        dotSpan.onclick = () => goToSlide(num);
        footerDots.appendChild(dotSpan);
    });

    // Update total slide count text in footer
    const totalSlidesText = document.getElementById('totalSlidesNum');
    if (totalSlidesText) {
        totalSlidesText.textContent = String(totalSlides).padStart(2, '0');
    }
    

    // Enable editing only if we are not on the production GitHub Pages URL
    const isProduction = window.location.hostname.includes('github.io');
    if (!isProduction) {
        // Make text editable (avoiding nested editable elements)
        const editables = [];
        const selectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
            'p', 'li', 'td', 'th',
            '.funnel-val', '.funnel-unit', '.funnel-title', '.funnel-desc',
            '.flow-title', '.flow-desc',
            '.pain-point-title', '.pain-point-desc',
            '.problem-card-title', '.problem-card-desc',
            '.analysis-title', '.analysis-desc',
            '.scenario-tag-label',
            '.screenshot-card-title',
            '.col-card-title',
            '.right-card-title',
            '.right-card-text',
            '.timeline-text', '.timeline-label', '.test-details-title'
        ];

        document.querySelectorAll('.slide *').forEach(el => {
            if (el.closest('.footer-navigation, .technical-drawing')) return;
            if (['SCRIPT', 'STYLE', 'SVG', 'PATH', 'IMG', 'BR', 'HR', 'INPUT', 'TEXTAREA', 'BUTTON'].includes(el.tagName)) return;

            // Check if it matches our list of target selectors OR is a leaf element containing text
            const matchesSelector = selectors.some(sel => el.matches(sel));
            const isLeafText = el.children.length === 0 && el.textContent.trim().length > 0;

            if (matchesSelector || isLeafText) {
                editables.push(el);
            }
        });

        // Mark as editable but prevent nesting editables
        editables.forEach(el => {
            let ancestor = el.parentElement;
            let hasEditableAncestor = false;
            while (ancestor && !ancestor.classList.contains('slide')) {
                if (editables.includes(ancestor)) {
                    hasEditableAncestor = true;
                    break;
                }
                ancestor = ancestor.parentElement;
            }

            if (!hasEditableAncestor) {
                el.setAttribute('contenteditable', 'true');
                el.setAttribute('title', ''); // Prevent parent title tooltips from showing on hover
                el.style.outline = 'none';

                // Prevent event propagation
                el.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
                el.addEventListener('keydown', (e) => {
                    e.stopPropagation();
                });
                el.addEventListener('blur', () => {
                    saveCurrentSlide();
                });
            }
        });
    }

    const savedSlide = parseInt(localStorage.getItem('lastViewedSlide'));
    const startSlide = (!isNaN(savedSlide) && savedSlide >= 1 && savedSlide <= totalSlides) ? savedSlide : 1;
    showSlide(startSlide);
});

function saveCurrentSlide() {
    const activeSlide = document.querySelector('.slide.active');
    if (!activeSlide) return;
    
    const slideNum = activeSlide.getAttribute('data-slide');
    
    // Clean up injected attributes before saving
    const slideClone = activeSlide.cloneNode(true);
    


    const editableEls = slideClone.querySelectorAll('[contenteditable="true"]');
    editableEls.forEach(el => {
        el.removeAttribute('contenteditable');
        el.removeAttribute('title'); // Clean up the empty title attribute we injected
        el.style.outline = '';
        if (el.getAttribute('style') === '') el.removeAttribute('style');
    });

    const slideHTML = slideClone.innerHTML;
    
    fetch('http://localhost:3099/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            slide: slideNum,
            content: slideHTML
        }),
        keepalive: true
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 'success') {
            console.log('Saved slide ' + slideNum);
            showSaveToast();
        }
    })
    .catch(err => console.error('Save failed:', err));
}

function showSaveToast() {
    let toast = document.getElementById('saveToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'saveToast';
        toast.style.cssText = 'position:fixed; bottom:20px; left:20px; background:#10b981; color:white; padding:10px 20px; border-radius:8px; font-family:sans-serif; font-weight:600; z-index:10000; transition:opacity 0.3s; pointer-events:none; box-shadow:0 4px 12px rgba(0,0,0,0.15);';
        toast.textContent = 'Авто-сохранено в файл!';
        document.body.appendChild(toast);
    }
    toast.style.opacity = '1';
    clearTimeout(window.saveToastTimeout);
    window.saveToastTimeout = setTimeout(() => toast.style.opacity = '0', 2000);
}

// Force saving the active text element if the user refreshes or closes the tab while editing
window.addEventListener('beforeunload', () => {
    if (document.activeElement && document.activeElement.isContentEditable) {
        // Blurring triggers the 'blur' event which calls saveCurrentSlide()
        document.activeElement.blur();
    }
});

function showSlide(n) {
    if (n < 1) n = 1;
    if (n > totalSlides) n = totalSlides;

    currentSlide = n;
    localStorage.setItem('lastViewedSlide', n);

    // Toggle active slide
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === n - 1);
    });

    // Update footer navigation dots
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === n - 1);
    });

    // Update footer page number indicator
    const currentSlideText = document.getElementById('currentSlideNum');
    if (currentSlideText) {
        currentSlideText.textContent = String(n).padStart(2, '0');
    }
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
}

function goToSlide(n) {
    showSlide(n);
}

// Keyboard Navigation (Space & Arrows)
document.addEventListener('keydown', (e) => {
    if (e.target.isContentEditable) return;
    
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    }
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    }
});


// Slide 5 Interaction: Hover on list items to change active screenshot mockup
window.activateProblem = function(num) {
    // 1. Highlight the active row item
    const rows = document.querySelectorAll('.problem-row-item');
    rows.forEach(item => {
        item.classList.toggle('active', Number(item.getAttribute('data-problem-index')) === num);
    });

    // 2. Highlight the corresponding preview element in the frame
    const targets = document.querySelectorAll('.preview-target');
    targets.forEach(target => {
        target.classList.toggle('active', Number(target.getAttribute('data-preview')) === num);
    });

    // 3. Update the caption text below the screenshot frame
    const captionEl = document.getElementById('activeScreenshotCaption');
    const activeItem = document.querySelector(`.problem-row-item[data-problem-index="${num}"]`);
    if (captionEl && activeItem) {
        const title = activeItem.querySelector('.item-title').textContent;
        // Strip the digit and dot (e.g. "1. ") from caption
        captionEl.textContent = title.replace(/^\d+\.\s*/, '');
    }
};

window.openLightbox = function(el) {
    let imgElement = null;
    let captionText = "";
    
    if (el) {
        // If el is an IMG tag, use it
        if (el.tagName === 'IMG') {
            imgElement = el;
        } else {
            // Check if el has an img inside
            imgElement = el.querySelector('img');
        }
        
        // Find caption text
        const parentCard = el.closest('.screenshot-card-2x2, .screenshot-col-card, .scenario-col, .preview-target, .scenario-screenshot-box, .scenario-img-preview');
        if (parentCard) {
            // Try to find the heading text in scenario-img-preview first
            const previewBox = el.closest('.scenario-img-preview');
            const headerDiv = previewBox ? previewBox.querySelector('div') : null;
            if (headerDiv) {
                captionText = headerDiv.textContent;
            } else {
                const titleEl = parentCard.querySelector('.screenshot-card-title, .col-card-title, .scenario-tag-label, .item-title');
                if (titleEl) {
                    captionText = titleEl.textContent;
                }
            }
        }
    } else {
        // Fallback for Slide 4 active target
        const activeTarget = document.querySelector('.preview-target.active');
        if (activeTarget) {
            imgElement = activeTarget.querySelector('img');
            const captionElement = document.getElementById('activeScreenshotCaption');
            if (captionElement) {
                captionText = captionElement.textContent;
            }
        }
    }
    
    const modal = document.getElementById('lightboxModal');
    const placeholder = document.getElementById('lightboxPlaceholder');
    const modalCaption = document.getElementById('lightboxCaption');
    
    if (!imgElement || !modal || !placeholder) return;
    
    // Set the HTML with only the image
    placeholder.innerHTML = `<img src="${imgElement.src}" style="max-width: 90vw; max-height: 75vh; object-fit: contain; border-radius: 4px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">`;
    
    if (modalCaption) {
        modalCaption.textContent = captionText ? captionText.replace(/^\d+\.\s*/, '').trim() : "Скриншот";
    }
    
    modal.classList.add('active');
};

window.closeLightbox = function() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
    }
};

