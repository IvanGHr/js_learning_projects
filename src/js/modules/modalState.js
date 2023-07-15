import checkNumInputs from './checkNumInputs';

const modalState = (state) => {
    const formWindow = document.querySelectorAll('.balcon_icons_img'),
          widthWindow = document.querySelectorAll('#width'),
          heightWindow = document.querySelectorAll('#height'),
          typeWindow = document.querySelectorAll('#view_type'),
          profileWindow = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindAction (event, element, property) {
        element.forEach((elem, number) => {
            elem.addEventListener(event, () => {
                switch(elem.nodeName) {
                    case 'SPAN':
                        state[property] = number;
                        break;
                    case 'INPUT':
                        if (elem.getAttribute('type') === 'checkbox') {
                            number === 0 ? state[property] = "Cold" : state[property] = "Warm";
                            element.forEach((box, i) => {
                                box.checked = false;
                                if (number == i) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[property] = elem.value;
                        }
                        break;
                    case 'SELECT':
                        state[property] = elem.value;
                        break;
                }

                console.log(state);
            });
        });
    };

    bindAction('click', formWindow, 'form');
    bindAction('input', heightWindow, 'height');
    bindAction('input', widthWindow, 'width');
    bindAction('change', typeWindow, 'type');
    bindAction('change', profileWindow, 'profile');
};

export default modalState;