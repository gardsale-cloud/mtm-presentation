registerSlide(6, `




<div class="slide-main slide-7-layout">
    <!-- Headline & Inline Explanation -->
    <section class="title-section">
        <h1 class="slide-title">
            Проблема №3.<br>
            <span class="accent-green">Сайт ведет не к тому сценарию покупки</span>
        </h1>
        <p class="explanation-inline">
            Покупатель строительных материалов редко готов сразу оформить заказ на сайте. Ему часто нужно:
            узнать стоимость доставки <span class="bullet-dot">•</span>
            уточнить наличие <span class="bullet-dot">•</span>
            получить расчет количества <span class="bullet-dot">•</span>
            задать вопрос специалисту.
        </p>
    </section>

    <!-- Comparison Grid (Currently vs Better Scenario) -->
    <div class="scenario-comparison-grid">
        
        <!-- Left: Current checkout scenario -->
        <div class="scenario-col col-current">
            <div class="scenario-title-row">
                <span class="scenario-tag-label">Сейчас работает так</span>
            </div>
            
            <!-- Flow steps -->
            <div class="scenario-flow">
                <span class="flow-step-pill">Посетитель</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill">Просмотр каталога</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill">



<p class="p1">Требуется оформить заказ</p></span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill" style="color: rgb(217, 119, 6); background: rgba(217, 119, 6, 0.05); border-color: rgba(217, 119, 6, 0.15);">



<p class="p1">Не готов оформить заказ</p></span>
            </div>

            <!-- Screenshot placeholder 1 (Current Cart) -->
            <div class="scenario-screenshot-box">
                <div class="scenario-img-preview" style="height: 16cqh; display: flex; flex-direction: column; background: #f8fafc; border-radius: 8px; padding: 0.5cqh; border: 1px solid var(--color-line); cursor: pointer; transition: all 0.2s;" onclick="openLightbox(this.querySelector('img'))" onmouseover="this.style.borderColor='var(--color-primary-navy)'" onmouseout="this.style.borderColor='var(--color-line)'">
                    <div style="font-size: 0.75cqw; font-weight: 600; text-align: center; margin-bottom: 0.3cqh; color: var(--color-primary-navy);">Текущее оформление заказа</div>
                    <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                        <img src="Issues/Screenshot%202026-07-29%20at%2013.21.24.png" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;">
                    </div>
                </div>
                <div class="scenario-caption-text">
                    «Сценарий похож на интернет-магазин, хотя покупателю часто нужен расчет»
                </div>
            </div>
        </div>

        <!-- Right: Improved lead scenario -->
        <div class="scenario-col col-improved">
            <div class="scenario-title-row">
                <span class="scenario-tag-label">Можно сделать удобнее</span>
            </div>

            <!-- Flow steps -->
            <div class="scenario-flow">
                <span class="flow-step-pill">Посетитель</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill">Просмотр каталога</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill">Заявка на расчет (консультацию)</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill" style="color: var(--color-accent-green-dark); background: var(--color-accent-green-light); border-color: rgba(16, 185, 129, 0.2);">Менеджер / Продажа</span>
            </div>

            <!-- Screenshot placeholder 2 (Simple form) -->
            <div class="scenario-screenshot-box">
                <div style="display: flex; gap: 1cqw; height: 16cqh; align-items: stretch;">
                    <div class="scenario-img-preview" style="flex: 1; display: flex; flex-direction: column; background: #f8fafc; border-radius: 8px; padding: 0.5cqh; border: 1px solid var(--color-line); cursor: pointer; transition: all 0.2s;" onclick="openLightbox(this.querySelector('img'))" onmouseover="this.style.borderColor='var(--color-accent-green)'" onmouseout="this.style.borderColor='var(--color-line)'">
                        <div style="font-size: 0.75cqw; font-weight: 600; text-align: center; margin-bottom: 0.3cqh; color: var(--color-primary-navy);">Корзина в боковой панели</div>
                        <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                            <img src="Issues/Screenshot%202026-07-28%20at%2020.53.52.png" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;">
                        </div>
                    </div>
                    <div class="scenario-img-preview" style="flex: 1; display: flex; flex-direction: column; background: #f8fafc; border-radius: 8px; padding: 0.5cqh; border: 1px solid var(--color-line); cursor: pointer; transition: all 0.2s;" onclick="openLightbox(this.querySelector('img'))" onmouseover="this.style.borderColor='var(--color-accent-green)'" onmouseout="this.style.borderColor='var(--color-line)'">
                        <div style="font-size: 0.75cqw; font-weight: 600; text-align: center; margin-bottom: 0.3cqh; color: var(--color-primary-navy);">Быстрая консультация</div>
                        <div style="flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                            <img src="Issues/Screenshot%202026-07-28%20at%2020.54.35.png" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px;">
                        </div>
                    </div>
                </div>
                <div class="scenario-caption-text">
                    «Более подходящий сценарий для строительных материалов»
                </div>
            </div>
        </div>

    </div>

    <!-- Bottom Highlighted Card -->
    <section class="highlight-conclusion-card">
        <p>Сайт должен помогать начать диалог с менеджером, оставить заявку на расчет (или консультацию),&nbsp; а не заставлять покупателя самостоятельно принимать решение на неполных данных.</p>
    </section>
</div>




`);
