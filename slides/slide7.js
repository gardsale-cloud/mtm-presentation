registerSlide(7, `

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
                <span class="flow-step-pill">Корзина</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill">



<p class="p1">Требуется оформить заказ</p></span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill" style="color: rgb(217, 119, 6); background: rgba(217, 119, 6, 0.05); border-color: rgba(217, 119, 6, 0.15);">



<p class="p1">Не готов оформить заказ</p></span>
            </div>

            <!-- Screenshot placeholder 1 (Current Cart) -->
            <div class="scenario-screenshot-box">
                <div class="scenario-mockup-frame">
                    <div class="mock-cart-layout">
                        <!-- Mock Header -->
                        <div style="font-size: 6px; font-weight: 700; color: var(--color-primary-navy); border-bottom: 1px solid var(--color-line); padding-bottom: 2px;">Оформление заказа</div>
                        <!-- Mock cart row 1 -->
                        <div class="mock-cart-row">
                            <span style="font-size: 5px; color: var(--color-text-main);">Минвата Роквул 50мм (3 уп.)</span>
                            <span style="font-size: 5.5px; font-weight: 700; color: var(--color-primary-navy);">4 150 ₽</span>
                        </div>
                        <!-- Mock cart row 2 -->
                        <div class="mock-cart-row">
                            <span style="font-size: 5px; color: var(--color-text-main);">Пеноплэкс Комфорт (10 уп.)</span>
                            <span style="font-size: 5.5px; font-weight: 700; color: var(--color-primary-navy);">4 500 ₽</span>
                        </div>
                        <!-- Form inputs sketch -->
                        <div style="display: flex; gap: 4px; margin-top: 2px;">
                            <div style="flex: 1; height: 10px; border: 1px solid var(--color-line); border-radius: 1px; background: #FFF;"></div>
                            <div style="flex: 1; height: 10px; border: 1px solid var(--color-line); border-radius: 1px; background: #FFF;"></div>
                        </div>
                        <div style="height: 10px; border: 1px solid var(--color-line); border-radius: 1px; background: #FFF; width: 100%; margin-top: 2px;"></div>
                        
                        <!-- Block with questions marks representing buyer doubts -->
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2px; padding: 2px; background: rgba(217,119,6,0.04); border: 1px dashed rgba(217,119,6,0.2); border-radius: 2px;">
                            <span style="font-size: 5px; color: rgb(217, 119, 6); font-weight: 700;">Вопросы по доставке и оплате?</span>
                            <span style="font-size: 6px; font-weight: 800; color: rgb(217, 119, 6);">?</span>
                        </div>
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
                <span class="flow-step-pill">Выбор материалов</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill">Заявка на расчет</span>
                <span class="flow-step-arrow">→</span>
                <span class="flow-step-pill" style="color: var(--color-accent-green-dark); background: var(--color-accent-green-light); border-color: rgba(16, 185, 129, 0.2);">Менеджер / Продажа</span>
            </div>

            <!-- Screenshot placeholder 2 (Simple form) -->
            <div class="scenario-screenshot-box">
                <div class="scenario-mockup-frame">
                    <div class="mock-form-layout">
                        <div class="mock-form-title">Заявка на расчет материалов</div>
                        <div style="font-size: 5.5px; color: var(--color-text-muted); text-align: center; margin-bottom: 2px; line-height: 1.2;">Укажите, что нужно утеплить, и менеджер подготовит точный расчет стоимости</div>
                        <div class="mock-form-input" style="display: flex; align-items: center; padding-left: 4px; font-size: 5.5px; color: var(--color-line);">Ваше имя</div>
                        <div class="mock-form-input" style="display: flex; align-items: center; padding-left: 4px; font-size: 5.5px; color: var(--color-line);">Телефон *</div>
                        <div class="mock-form-input" style="height: 20px; display: flex; align-items: flex-start; padding: 2px 4px; font-size: 5.5px; color: var(--color-line);">Какую задачу нужно решить? (например: утеплить пол на даче)</div>
                        <button class="mock-form-btn">Получить расчет и консультацию</button>
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
        <p>Сайт должен помогать начать диалог с менеджером, а не заставлять покупателя самостоятельно принимать решение о заказе</p>
    </section>
</div>

`);
