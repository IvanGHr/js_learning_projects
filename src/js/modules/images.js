const images = () => {
    const popupImg = document.createElement('div'),
          isSelector = document.querySelector('.works'),
          isImg = document.createElement('img');
    
    popupImg.classList.add('popup');
    isSelector.appendChild(popupImg);

    popupImg.style.justifyContent = 'center';
    popupImg.style.alignItems = 'center';
    popupImg.style.display = 'none';

    popupImg.appendChild(isImg);

    isSelector.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (target && target.classList.contains('preview')) {
            popupImg.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            isImg.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            popupImg.style.display = 'none';
        }
    });
};

export default images;