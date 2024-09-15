document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');

        // Toggle the 'active' class to show/hide the answer
        faqItem.classList.toggle('active');

        // Change the toggle icon based on the state
        const icon = question.querySelector('.toggle-icon');
        icon.textContent = faqItem.classList.contains('active') ? '-' : '+';

        // Close other open FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.toggle-icon').textContent = '+';
            }
        });
    });
});
