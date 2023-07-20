const burger = (contentSelector, triggerSelector) => {
    const content = document.querySelector(contentSelector),
          btn = document.querySelector(triggerSelector);

    content.style.display = 'none';

    btn.addEventListener('click', () => {
        if (content.style.display == 'none' && window.screen.availWidth < 992 ) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 991) {
            content.style.display = 'none';
        }
    });
};

export default burger;