registerSlide(5, `


<div class="slide-main slide-5-layout">
    <!-- Headline -->
    <section class="title-section">
        <h1 class="slide-title">
            Проблема №1.<br>
            <span class="accent-green">Сайт вызывает меньше доверия</span>
        </h1>
        <p class="slide-subtitle">
            Даже небольшие ошибки постепенно снижают доверие к компании. Особенно это заметно новым посетителям, которые впервые попали на сайт из рекламы.
        </p>
    </section>

    <!-- Interactive Grid (Screenshot viewer on left, problem rows on right) -->
    <div class="interactive-trust-grid">
        
        <!-- Left: Screenshot Viewer (Master) -->
        <div class="screenshot-viewer-container">
            <div class="screenshot-display-frame">
                <!-- Target 1: Mobile Catalog -->
                <div class="preview-target active" data-preview="1">
                    <div class="smartphone-frame">
                        <div class="phone-screen">
                            <div class="phone-header">MTM Insulation</div>
                            <div class="phone-catalog">
                                <div class="catalog-grid-broken">
                                    <div class="mock-card">Утеплитель</div>
                                    <div class="mock-card overflow-card">Пеноплэкс Комфорт 450 руб.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Target 2: Empty Sections -->
                <div class="preview-target" data-preview="2">
                    <div class="browser-frame">
                        <div class="browser-header">
                            <div class="browser-dots"><span class="b-dot"></span><span class="b-dot"></span><span class="b-dot"></span></div>
                            <div class="browser-address">mtmtorg.ru/category/xps/</div>
                        </div>
                        <div class="browser-body">
                            <div class="mock-sidebar">
                                <div class="side-item">Пенопласт</div>
                                <div class="side-item active">Пеноплэкс (XPS)</div>
                                <div class="side-item">Минвата</div>
                            </div>
                            <div class="mock-content-empty">
                                <div class="empty-warning-sketch">В этой категории нет товаров</div>
                                <div class="empty-question-mark">?</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Target 3: Price Formatting -->
                <div class="preview-target" data-preview="3">
                    <div class="browser-frame">
                        <div class="browser-header">
                            <div class="browser-dots"><span class="b-dot"></span><span class="b-dot"></span><span class="b-dot"></span></div>
                            <div class="browser-address">mtmtorg.ru/search/</div>
                        </div>
                        <div class="browser-body price-comparison-body">
                            <div class="price-test-item">
                                <span class="item-name">Пеноплэкс Стена</span>
                                <span class="price-val-skewed red-accent">Цена: 450 руб.</span>
                            </div>
                            <div class="price-test-item">
                                <span class="item-name">Пенопласт ПСБ</span>
                                <span class="price-val-skewed blue-accent">310 ₽/уп.</span>
                            </div>
                            <div class="price-test-item">
                                <span class="item-name">Минвата Технониколь</span>
                                <span class="price-val-skewed border-accent">1 240,00 р.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Target 4: Cart Popup -->
                <div class="preview-target" data-preview="4">
                    <div class="browser-frame">
                        <div class="browser-header">
                            <div class="browser-dots"><span class="b-dot"></span><span class="b-dot"></span><span class="b-dot"></span></div>
                            <div class="browser-address">mtmtorg.ru/product/</div>
                        </div>
                        <div class="browser-body cart-bug-body">
                            <div class="mock-product-page">
                                <div class="mock-gallery"></div>
                                <div class="mock-details"></div>
                            </div>
                            <div class="retro-modal-dialog">
                                <div class="dialog-header">Товар добавлен</div>
                                <div class="dialog-content">
                                    <div class="dialog-bug-text">[ошибка при возврате назад]</div>
                                    <button class="dialog-btn">Продолжить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Target 5: Product Cards -->
                <div class="preview-target" data-preview="5">
                    <div class="browser-frame">
                        <div class="browser-header">
                            <div class="browser-dots"><span class="b-dot"></span><span class="b-dot"></span><span class="b-dot"></span></div>
                            <div class="browser-address">mtmtorg.ru/catalog/</div>
                        </div>
                        <div class="browser-body catalog-asymmetry-body">
                            <div class="comparison-cards">
                                <div class="asym-card">
                                    <div class="asym-img"></div>
                                    <div class="asym-title">Минвата Роквул</div>
                                    <div class="asym-specs">
                                        <span>Плотность: 35 кг/м³</span>
                                        <span>Толщина: 50 мм</span>
                                    </div>
                                </div>
                                <div class="asym-card">
                                    <div class="asym-img"></div>
                                    <div class="asym-title">Минвата Техноблок</div>
                                    <div class="asym-specs empty-specs">
                                        <span class="no-data-line"></span>
                                        <span class="no-data-line"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Screenshot Caption under display frame -->
            <div class="viewer-caption">
                Скриншот: <span id="activeScreenshotCaption">Мобильная версия каталога</span> (Кликните для увеличения)
            </div>
        </div>

        <!-- Right: Detailed Problem list (Detail) -->
        <div class="problems-list">
            <!-- Row 1 -->
            <div class="problem-row-item active" data-problem-index="1" onmouseenter="activateProblem(1)">
                <div class="item-number">1</div>
                <div class="item-content">
                    <h3 class="item-title">Мобильная версия каталога</h3>
                    <p class="item-desc">Карточки товаров отображаются некорректно. Часть элементов выходит за границы экрана.</p>
                </div>
            </div>

            <!-- Row 2 -->
            <div class="problem-row-item" data-problem-index="2" onmouseenter="activateProblem(2)">
                <div class="item-number">2</div>
                <div class="item-content">
                    <h3 class="item-title">Пустые разделы каталога</h3>
                    <p class="item-desc">Некоторые разделы каталога пустые. У посетителя возникает вопрос: <span class="quote">«Компания действительно продает эти материалы?»</span></p>
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
                    <h3 class="item-title">Неоднородные карточки товаров</h3>
                    <p class="item-desc">На части товаров заполнены характеристики, на части — нет. Каталог выглядит неоднородным.</p>
                </div>
            </div>
        </div>

    </div>

    <!-- Bottom Highlighted Card -->
    <section class="highlight-conclusion-card">
        <p>По отдельности эти проблемы кажутся небольшими. Но вместе они создают ощущение, что сайт развивается медленно и ему не уделяется достаточно внимания.</p>
    </section>
</div>


`);
