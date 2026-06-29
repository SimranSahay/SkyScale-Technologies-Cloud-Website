// ============================================
// SkyScale Technologies - Contact Page JavaScript
// ============================================

// ============================================
// DOM Elements
// ============================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoading = submitBtn.querySelector('.btn-loading');
const formMessage = document.getElementById('formMessage');

// ============================================
// FAQ Accordion
// ============================================
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// Initialize FAQ accordion
initFAQAccordion();

// ============================================
// Form Validation
// ============================================
function validateForm(formData) {
    const errors = [];
    
    // Name validation
    if (!formData.name.trim()) {
        errors.push('Name is required');
    } else if (formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.push('Email is required');
    } else if (!emailRegex.test(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Subject validation
    if (!formData.subject) {
        errors.push('Please select a subject');
    }
    
    // Message validation
    if (!formData.message.trim()) {
        errors.push('Message is required');
    } else if (formData.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters');
    }
    
    return errors;
}

// ============================================
// Form Submission Handler
// ============================================
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Reset previous messages
    formMessage.style.display = 'none';
    formMessage.className = 'form-message';
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        showFormMessage('error', errors.join('<br>'));
        return;
    }
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;
    
    // Simulate API call (Replace with actual AWS Lambda + API Gateway integration)
    try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // For future AWS Lambda integration:
        // const response = await fetch('YOUR_API_GATEWAY_ENDPOINT', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // });
        
        // const data = await response.json();
        
        // if (response.ok) {
        //     showFormMessage('success', 'Thank you for your message! We will get back to you within 24 hours.');
        //     contactForm.reset();
        // } else {
        //     showFormMessage('error', 'An error occurred. Please try again later.');
        // }
        
        // Success message for demo
        showFormMessage('success', 'Thank you for your message! We will get back to you within 24 hours.');
        contactForm.reset();
        
    } catch (error) {
        showFormMessage('error', 'An error occurred. Please try again later.');
        console.error('Form submission error:', error);
    } finally {
        // Reset button state
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }
});

// ============================================
// Show Form Message
// ============================================
function showFormMessage(type, message) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// Real-time Form Validation Feedback
// ============================================
const formInputs = contactForm.querySelectorAll('input, select, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#FEE2E2';
        } else {
            this.style.borderColor = '#E2E8F0';
        }
    });
    
    input.addEventListener('input', function() {
        this.style.borderColor = '#E2E8F0';
    });
});

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // FAQ accordion is already initialized above
    console.log('Contact page loaded successfully');
});
