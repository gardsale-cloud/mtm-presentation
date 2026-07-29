registerSlide(4, `









<div class="slide-main slide-5-layout">
    <!-- Headline -->
    <section class="title-section">
        <h1 class="slide-title">
            Проблема №1.<br>
            <span class="accent-green">Сайт вызывает мало доверия</span>
        </h1>
        <p class="slide-subtitle"><font color="#475569"><span style="font-size: 13.1117px;">Даже небольшие ошибки снижают доверие к компании. Особенно это заметно новым посетителям, которые впервые попали на сайт из рекламы</span></font></p>
    </section>

    <!-- Interactive Grid (Screenshot viewer on left, problem rows on right) -->
    <div class="interactive-trust-grid">
        
        <!-- Left: Screenshot Viewer (Master) -->
        <div class="screenshot-viewer-container">
            <div class="screenshot-display-frame">
                <!-- Target 1: Mobile Catalog -->
                <div class="preview-target" data-preview="1">
                    <div style="display: flex; gap: 10px; height: 100%; width: 100%; justify-content: center; align-items: center;">
                        <img src="Issues/Screenshot%202026-07-28%20at%2020.25.28.png" style="max-width: 48%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                        <img src="Issues/Screenshot%202026-07-28%20at%2020.27.03.png" style="max-width: 48%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                    </div>
                </div>

                <!-- Target 2: Empty Sections -->
                <div class="preview-target active" data-preview="2">
                    <img src="Issues/Screenshot%202026-07-28%20at%2020.38.10.png" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                </div>

                <!-- Target 3: Price Formatting -->
                <div class="preview-target" data-preview="3">
                    <div style="display: flex; gap: 10px; height: 100%; width: 100%; justify-content: center; align-items: center;">
                        <img src="Issues/Screenshot%202026-07-28%20at%2020.40.42.png" style="max-width: 48%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                        <img src="Issues/Screenshot%202026-07-28%20at%2020.43.43.png" style="max-width: 48%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                    </div>
                </div>

                <!-- Target 4: Cart Popup -->
                <div class="preview-target" data-preview="4">
                    <div style="display: flex; gap: 10px; height: 100%; width: 100%; justify-content: center; align-items: center;">
                        <img src="Issues/Screenshot%202026-07-28%20at%2020.41.37.png" style="max-width: 48%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                        <img src="Issues/Screenshot%202026-07-28%20at%2020.46.42.png" style="max-width: 48%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                    </div>
                </div>

                <!-- Target 5: Product Cards -->
                <div class="preview-target" data-preview="5">
                    <img src="Issues/Screenshot%202026-07-28%20at%2020.49.21.png" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer;" onclick="openLightbox(this)">
                </div>
            </div>
            
            <!-- Screenshot Caption under display frame -->
            <div class="viewer-caption" style="cursor: pointer;" onclick="openLightbox()">
                Скриншот: <span id="activeScreenshotCaption">Пустые разделы каталога</span> (Кликните для увеличения)
            </div>
        </div>

        <!-- Right: Detailed Problem list (Detail) -->
        <div class="problems-list">
            <!-- Row 1 -->
            <div class="problem-row-item active" data-problem-index="1" onmouseenter="activateProblem(1)">
                <div class="item-number">1</div>
                <div class="item-content">
                    <h3 class="item-title">Элементы сайта отображаются с ошибками</h3>
                    <p class="item-desc">Карточки товаров отображаются некорректно. Часть элементов выходит за границы экрана.</p>
                </div>
            </div>

            <!-- Row 2 -->
            <div class="problem-row-item" data-problem-index="2" onmouseenter="activateProblem(2)">
                <div class="item-number">2</div>
                <div class="item-content">
                    <h3 class="item-title">Пустые разделы каталога</h3>
                    <p class="item-desc">Некоторые разделы каталога пустые</p>
                </div>
            </div>

            <!-- Row 3 -->
            <div class="problem-row-item" data-problem-index="3" onmouseenter="activateProblem(3)">
                <div class="item-number">3</div>
                <div class="item-content">
                    <h3 class="item-title">Разное отображение цен</h3>
                    <p class="item-desc">Цены оформлены по-разному. Где-то используется знак ₽, где-то «руб.», разное количество знаков после запятой.</p>
                </div>
            </div>

            <!-- Row 4 -->
            <div class="problem-row-item" data-problem-index="4" onmouseenter="activateProblem(4)">
                <div class="item-number">4</div>
                <div class="item-content">
                    <h3 class="item-title">Сбои во всплывающих окнах</h3>
                    <p class="item-desc">Всплывающее окно «Товар добавлен в корзину» выглядит устаревшим. После возврата кнопкой «Назад» иногда отображается с ошибкой.</p>
                </div>
            </div>

            <!-- Row 5 -->
            <div class="problem-row-item" data-problem-index="5" onmouseenter="activateProblem(5)">
                <div class="item-number">5</div>
                <div class="item-content">
                    <h3 class="item-title">



<p class="p1"><b>Не во всех карточках заполнены характеристики</b></p></h3>
                    <p class="item-desc">На части товаров заполнены характеристики, на части — нет. Каталог выглядит неоднородным.</p>
                </div>
            </div>
        </div>

    </div>

    <!-- Bottom Highlighted Card -->
    <section class="highlight-conclusion-card">
        <p>Каждая из этих проблем сама по себе не критична. но именно из таких деталей складывается общее впечатление о сайте, снижается доверие покупателей и создаются лишние препятствия на пути к заявке и покупке.</p>
    </section>
</div>









`);
