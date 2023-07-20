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
            if (!this.classList.contains('active-style')) {
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }

            btns.forEach(btn => {
                btn.classList.remove('active-style');
                btn.nextElementSibling.classList.remove('active-content');
                btn.nextElementSibling.style.maxHeight = '0px';
            });
        });
    });
};

export default accordeon;