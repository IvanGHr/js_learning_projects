const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(i => {
            i.style.display = 'none';
        });

        tab.forEach(i => {
            i.classList.remove(activeClass);
        });
    };

    function showTabContent(elem = 0) {
        content[elem].style.display = display;
        tab[elem].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
        (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((elem, numberElem) => {
                if (target == elem || target.parentNode == elem) {
                    hideTabContent();
                    showTabContent(numberElem);
                }
            });
        }
    });
};

export default tabs;