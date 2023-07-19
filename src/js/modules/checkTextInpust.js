const checkTextInpust = (selector) => {
    const textInpust = document.querySelectorAll(selector);

    textInpust.forEach(elem => {
        elem.addEventListener('keypress', function(event) {
            if (event.key.match(/[^а-яё 0-9]/ig)) {
                event.preventDefault();
            }
        });
        
        elem.addEventListener('input', function() {
            if (!this.value.match(/^[а-яё 0-9]/ig)) {
                this.value = '';
            }
        });
    });
};

export default checkTextInpust;