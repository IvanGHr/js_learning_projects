const sliders = (selector, direction, prev, next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(selector);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(elem => {
            elem.classList.add('animated');
            elem.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function chengeSlide(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            chengeSlide(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
        
        nextBtn.addEventListener('click', () => {
            chengeSlide(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e) {}

    function onAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(function() {
                chengeSlide(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 10000);
        } else {
            paused = setInterval(function() {
                chengeSlide(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    };

    onAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        onAnimation();
    });
};

export default sliders;