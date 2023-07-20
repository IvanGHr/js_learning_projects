const accordeon = (selector) => {
    const btns = document.querySelectorAll(selector);
    
    //if you need to let active-class for everyone blocks
/*     btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }

            if (this.classList.contains('active-style') && this.nextElementSibling.classList.contains('active-content')) {
                
            }
        });
    }); */

    //this script is removing active class when you click on the next block
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('active-style')) {
                this.classList.remove('active-style');
                this.nextElementSibling.classList.remove('active-content');
                this.nextElementSibling.style.maxHeight = '0px';
            } else {
                btns.forEach(otherBtn => {
                    if (otherBtn !== this) {
                        otherBtn.classList.remove('active-style');
                        otherBtn.nextElementSibling.classList.remove('active-content');
                        otherBtn.nextElementSibling.style.maxHeight = '0px';
                    }
                });
    
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }
        });
    });
};

export default accordeon;