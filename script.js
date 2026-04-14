document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq__question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const toggle = question.querySelector('.faq__toggle');
            
            // Toggle active class
            item.classList.toggle('active');
            
            // Update toggle icon
            if (item.classList.contains('active')) {
                toggle.textContent = '-';
            } else {
                toggle.textContent = '+';
            }
            
            // Close other items (optional, based on design preference)
            /*
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    otherItem.classList.remove('active');
                    otherQuestion.querySelector('.faq__toggle').textContent = '+';
                }
            });
            */
        });
    });

    // Multi-step Form Logic (Simplified)
    const formOptions = document.querySelectorAll('.form-card__option');
    const nextBtn = document.querySelector('.btn--pink.btn--full');
    const stepLabel = document.querySelector('.form-card__step');
    
    let currentStep = 1;
    let selectedOption = null;

    formOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Clear previous selection
            formOptions.forEach(opt => opt.style.borderColor = '#e0e0e0');
            formOptions.forEach(opt => opt.style.backgroundColor = '#ffffff');
            
            // Highlight current selection
            option.style.borderColor = '#012682';
            option.style.backgroundColor = '#f5f8ff';
            selectedOption = option.textContent;
        });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentStep === 1) {
                if (!selectedOption) {
                    alert('職種を選択してください');
                    return;
                }
                
                // Transition to Step 2 (Simplified for prototype)
                currentStep = 2;
                stepLabel.textContent = 'STEP2 お住まいの地域を選択';
                
                // Replace options with region options
                const optionsContainer = document.querySelector('.form-card__options');
                optionsContainer.innerHTML = `
                    <button class="form-card__option">大阪府</button>
                    <button class="form-card__option">京都府</button>
                    <button class="form-card__option">兵庫県</button>
                    <button class="form-card__option">奈良県</button>
                    <button class="form-card__option">滋賀県</button>
                    <button class="form-card__option">和歌山県</button>
                `;
                
                // Re-attach listeners to new options
                const newOptions = optionsContainer.querySelectorAll('.form-card__option');
                newOptions.forEach(option => {
                    option.addEventListener('click', () => {
                        newOptions.forEach(opt => opt.style.borderColor = '#e0e0e0');
                        newOptions.forEach(opt => opt.style.backgroundColor = '#ffffff');
                        option.style.borderColor = '#012682';
                        option.style.backgroundColor = '#f5f8ff';
                    });
                });
            } else if (currentStep === 2) {
                // Final Step placeholder
                alert('ありがとうございます。詳細はお問い合わせ後にご案内いたします。');
            }
        });
    }

    // Floating CTA visibility logic
    const floatingCta = document.getElementById('floating-cta');
    const fvSection = document.getElementById('fv');
    
    window.addEventListener('scroll', () => {
        const fvBottom = fvSection.offsetTop + fvSection.offsetHeight;
        if (window.scrollY > fvBottom) {
            floatingCta.style.opacity = '1';
            floatingCta.style.pointerEvents = 'auto';
        } else {
            floatingCta.style.opacity = '0';
            floatingCta.style.pointerEvents = 'none';
        }
    });
});
