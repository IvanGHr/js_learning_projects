const modals = () => {
    let isPressBtn = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = sizeScroll();
        
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                
                isPressBtn = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach(elem => {
                    elem.style.display = 'none';
                    elem.classList.add('animated', 'fadeIn');
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(elem => {
                elem.style.display = 'none';
            });
            
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(elem => {
                    elem.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll("[data-modal]").forEach(elem => {
                if (getComputedStyle(elem).display !== "none") {
                    display = "block";
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = "block";
                document.body.style.overflow = "hidden";
                let scroll = sizeScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function sizeScroll() {
        let div = document.createElement('div');

        div.style.width = '20px';
        div.style.height = '20px';
        div.style.overflowY = 'scroll';
        div.style.visability = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openAfterScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!isPressBtn && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                    document.querySelector(selector).click();
            }
        });
    }
    
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showModalByTime('.popup-consultation', 60000);
    openAfterScroll('.fixed-gift');

};

export default modals;