registerSlide(9, `
<div class="slide-main slide-9-layout">
    <!-- Headline & Subtitle -->
    <section class="title-section">
        <h1 class="slide-title">
            Сайт — это не разовая работа.<br>
            <span class="accent-green">Его нужно постоянно улучшать</span>
        </h1>
        <p class="slide-subtitle">
            Рынок, реклама и поведение покупателей меняются. Поэтому сайт должен регулярно развиваться.
        </p>
    </section>

    <!-- Cycle diagram and monthly improvements grid -->
    <div class="cycle-and-improvements-grid">
        
        <!-- Left: 2x2 Cyclical process loop -->
        <div class="process-cycle-container">
            <div class="cycle-grid">
                <!-- Step 1 -->
                <div class="cycle-step-box" style="grid-column: 1; grid-row: 1;">1. Посмотреть данные</div>
                
                <!-- Arrow 1 -> 2 -->
                <div class="cycle-arrow-horizontal" style="grid-column: 2; grid-row: 1;">→</div>
                
                <!-- Step 2 -->
                <div class="cycle-step-box" style="grid-column: 3; grid-row: 1;">2. Понять проблемы</div>
                
                <!-- Arrow 2 -> 3 -->
                <div class="cycle-arrow-vertical" style="grid-column: 3; grid-row: 2;">→</div>
                
                <!-- Step 3 -->
                <div class="cycle-step-box" style="grid-column: 3; grid-row: 3;">3. Внести улучшения</div>
                
                <!-- Arrow 3 -> 4 -->
                <div class="cycle-arrow-horizontal" style="grid-column: 2; grid-row: 3;">←</div>
                
                <!-- Step 4 -->
                <div class="cycle-step-box" style="grid-column: 1; grid-row: 3;">4. Проверить результат</div>
                
                <!-- Arrow 4 -> 1 -->
                <div class="cycle-arrow-vertical" style="grid-column: 1; grid-row: 2;">←</div>
                
                <!-- Loop badge in center -->
                <div class="repeat-center-badge">Повторять регулярно</div>
            </div>
        </div>

        <!-- Right: Improvements list card -->
        <div class="improvements-list-card">
            <h2 class="improvements-list-title">Каждый месяц можно улучшать:</h2>
            <ul class="improvements-bullet-grid">
                <li>страницы товаров;</li>
                <li>категории каталога;</li>
                <li>удобство фильтров;</li>
                <li>поиск на сайте;</li>
                <li>формы заявки;</li>
                <li>страницы под рекламу.</li>
            </ul>
        </div>

    </div>

    <!-- Bottom Highlighted Card -->
    <section class="highlight-conclusion-card">
        <p>Главная задача — не просто сделать новый сайт, а создать возможность быстро его улучшать.</p>
    </section>
</div>
`);
