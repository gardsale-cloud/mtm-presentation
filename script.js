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
    
    // Completely disable and remove all Lightbox/modal click zoom overlays and tooltips
    document.querySelectorAll('[onclick*="openLightbox"], [title*="увеличить"], [title*="увеличения"], [title*="Увеличить"]').forEach(el => {
        el.removeAttribute('onclick');
        el.removeAttribute('title');
        el.style.cursor = 'default';
    });

    // Make text editable (avoiding nested editable elements)
    const allElements = document.querySelectorAll('.slide *');
    const editables = [];

    // Helper to determine if an element is a text container (leaf container of text)
    const isTextContainer = function(el) {
        const excludedTags = ['SCRIPT', 'STYLE', 'SVG', 'PATH', 'IMG', 'BR', 'HR', 'INPUT', 'TEXTAREA'];
        if (excludedTags.includes(el.tagName)) return false;

        // If a DIV contains child elements, treat it as a layout container, not a text block
        if (el.tagName === 'DIV' && el.children.length > 0) return false;

        // Exclude footer navigation and technical drawing areas
        if (el.closest('.footer-navigation, .technical-drawing')) return false;

        // Check if it actually contains text
        const text = el.textContent.trim();
        if (text.length === 0) return false;

        // Block level/container tags that represent wrappers rather than single text blocks
        const blockTags = ['DIV', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER', 'NAV', 'UL', 'OL', 'TABLE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P'];
        
        for (let child of el.children) {
            if (blockTags.includes(child.tagName)) {
                return false; // If it contains block level layout structures, it's a wrapper, not the text block itself
            }
        }
        return true;
    };

    allElements.forEach(el => {
        if (isTextContainer(el) && el.tagName !== 'BUTTON') {
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

    showSlide(1);
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

// Click on screen to advance (excluding cards and interactive buttons)
document.addEventListener('click', (e) => {
    // If we clicked on or inside a contenteditable element, don't advance the slide
    if (e.target.isContentEditable || e.target.closest('[contenteditable="true"]')) {
        return;
    }
    
    const slidesContainer = document.querySelector('.slides-container');
    if (slidesContainer && slidesContainer.contains(e.target)) {
        if (!e.target.closest('a, button, .flow-box, .pain-point-item, .funnel-step, .problem-card, .agenda-box, .analysis-box, .explanation-right-card, .highlight-conclusion-card, .problem-row-item, .screenshot-display-frame, .screenshot-placeholder-box, .screenshot-box-large, .scenario-mockup-frame')) {
            nextSlide();
        }
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

// Generic Zoom Lightbox
window.openLightbox = function(el) {
    let sourceEl = null;
    let captionText = "";
    
    // If called with a specific element (e.g. onclick="openLightbox(this)")
    if (el) {
        sourceEl = el;
        
        // Find a suitable caption from parent card title
        const parentCard = el.closest('.screenshot-card-2x2, .screenshot-col-card, .scenario-col');
        if (parentCard) {
            const titleEl = parentCard.querySelector('.screenshot-card-title, .col-card-title, .scenario-tag-label');
            if (titleEl) {
                captionText = titleEl.textContent;
            }
        }
    } else {
        // Fallback for Slide 5 active target
        sourceEl = document.querySelector('.preview-target.active');
        const captionElement = document.getElementById('activeScreenshotCaption');
        if (captionElement) {
            captionText = captionElement.textContent;
        }
    }
    
    const modal = document.getElementById('lightboxModal');
    const placeholder = document.getElementById('lightboxPlaceholder');
    const modalCaption = document.getElementById('lightboxCaption');
    
    if (!sourceEl || !modal || !placeholder) return;
    
    // Clone and display the content
    placeholder.innerHTML = sourceEl.innerHTML;
    
    // If there is an image, make sure it responds nicely to resizing
    const img = placeholder.querySelector('img');
    if (img) {
        img.style.maxWidth = '90vw';
        img.style.maxHeight = '75vh';
        img.style.objectFit = 'contain';
    }
    
    if (modalCaption) {
        modalCaption.textContent = captionText;
    }
    
    modal.classList.add('active');
};

window.closeLightbox = function() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
    }
};

