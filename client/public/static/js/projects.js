// Projects Section Slider
function initProjectsSlider() {
    const projectCards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (!projectCards.length) {
        return;
    }

    let currentIndex = 0;
    let isAnimating = false;

    function showProject(index) {
        projectCards.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    }

    function nextProject() {
        if (isAnimating) return;
        isAnimating = true;

        const oldIndex = currentIndex;
        currentIndex = (currentIndex + 1) % projectCards.length;
        
        projectCards[oldIndex].classList.remove('active');
        projectCards[oldIndex].classList.add('slide-out-left');
        
        projectCards[currentIndex].classList.add('active', 'slide-in-right');
        
        setTimeout(() => {
            projectCards[oldIndex].classList.remove('slide-out-left');
            projectCards[currentIndex].classList.remove('slide-in-right');
            isAnimating = false;
        }, 600);
    }

    function prevProject() {
        if (isAnimating) return;
        isAnimating = true;

        const oldIndex = currentIndex;
        currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
        
        projectCards[oldIndex].classList.remove('active');
        projectCards[oldIndex].classList.add('slide-out-right');
        
        projectCards[currentIndex].classList.add('active', 'slide-in-left');
        
        setTimeout(() => {
            projectCards[oldIndex].classList.remove('slide-out-right');
            projectCards[currentIndex].classList.remove('slide-in-left');
            isAnimating = false;
        }, 600);
    }

    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', nextProject);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevProject);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const target = e.target;
        const isTyping = target && (
            target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.tagName === 'SELECT' ||
            target.isContentEditable
        );

        const isModalOpen = Boolean(document.querySelector('.modal-overlay.modal-visible'));
        if (isTyping || isModalOpen) {
            return;
        }

        if (e.key === 'ArrowLeft') {
            prevProject();
        } else if (e.key === 'ArrowRight') {
            nextProject();
        }
    });

    // Initialize first project
    showProject(0);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectsSlider, { once: true });
} else {
    initProjectsSlider();
}
