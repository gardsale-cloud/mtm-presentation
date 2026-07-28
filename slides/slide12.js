registerSlide(12, `
<div class="slide-main slide-12-layout">
    <!-- Headline & Subtitle -->
    <section class="title-section">
        <h1 class="slide-title">
            Что изменится в новой версии сайта?
        </h1>
        <p class="slide-subtitle">
            Основная задача — сделать покупателю проще путь от поиска материала до заявки.
        </p>
    </section>

    <!-- 4 Cards Grid with Illustrations -->
    <div class="improvements-grid-4">
        <!-- Card 1 -->
        <div class="improvement-card">
            <div class="card-illustration">
                <!-- Catalog illustration -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="9"/>
                    <rect x="14" y="3" width="7" height="5"/>
                    <rect x="14" y="12" width="7" height="9"/>
                    <rect x="3" y="16" width="7" height="5"/>
                </svg>
            </div>
            <h2 class="improvement-card-title">Понятный каталог</h2>
            <ul class="improvement-card-list">
                <li>категории по назначению (для стен, пола, кровли);</li>
                <li>удобные и понятные фильтры;</li>
                <li>понятные технические характеристики;</li>
                <li>легче сравнивать аналогичные товары.</li>
            </ul>
        </div>

        <!-- Card 2 -->
        <div class="improvement-card">
            <div class="card-illustration">
                <!-- Help / Calculation illustration -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                    <line x1="8" y1="6" x2="16" y2="6"/>
                    <line x1="16" y1="14" x2="16" y2="18"/>
                    <line x1="16" y1="10" x2="16" y2="10"/>
                    <line x1="12" y1="10" x2="12" y2="18"/>
                    <line x1="8" y1="10" x2="8" y2="18"/>
                </svg>
            </div>
            <h2 class="improvement-card-title">Помощь в выборе</h2>
            <ul class="improvement-card-list">
                <li>интерактивный калькулятор количества;</li>
                <li>автоматический расчет м² и м³;</li>
                <li>подбор аналогов и похожих товаров;</li>
                <li>список недавно просмотренных материалов.</li>
            </ul>
        </div>

        <!-- Card 3 -->
        <div class="improvement-card accent-card">
            <div class="card-illustration" style="color: var(--color-accent-green-dark);">
                <!-- Request / Checkout illustration -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
            </div>
            <h2 class="improvement-card-title" style="color: var(--color-accent-green-dark);">Удобная заявка</h2>
            <ul class="improvement-card-list">
                <li>фокус на запросе расчета, а не на "заказе";</li>
                <li>быстрая консультация технического специалиста;</li>
                <li>возможность легкой отправки спецификации;</li>
                <li>всегда доступный быстрый контакт.</li>
            </ul>
        </div>

        <!-- Card 4 -->
        <div class="improvement-card">
            <div class="card-illustration">
                <!-- Analytics / Development illustration -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
            </div>
            <h2 class="improvement-card-title">Развитие и аналитика</h2>
            <ul class="improvement-card-list">
                <li>отслеживание реального поведения посетителей;</li>
                <li>понимание, какие товары ищут чаще всего;</li>
                <li>регулярное улучшение рекламных страниц;</li>
                <li>постоянное развитие без остановок.</li>
            </ul>
        </div>
    </div>

    <!-- Bottom Highlighted Card -->
    <section class="highlight-conclusion-card">
        <p>Новый сайт должен стать не просто каталогом, а инструментом продаж, который помогает покупателю выбрать материал и обратиться в компанию.</p>
    </section>
</div>
`);
