/* import checkNumInputs from './checkNumInputs'; */

const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');

    /* checkNumInputs('input[name="user_phone"]'); */

    const mess = {
        loading: "Loading...",
        done: "Thanks. We will be contact to you soon.",
        fail: "Sorry, something wrong...",
        loadingImg: 'assets/img/spinner.gif',
        doneImg: 'assets/img/ok.png',
        failImg: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url, data) => {
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    const clearInput = () => {
        input.forEach(elem => {
            elem.value = '';
        });
        upload.forEach(elem => {
            elem.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    upload.forEach(elem => {
        elem.addEventListener('input', () => {
            let dots;
            const arr = elem.files[0].name.split('.');
            arr[0].length > 8 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 8) + dots + arr[1];
            elem.previousElementSibling.textContent = name;
        });
    });

    form.forEach(elem => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();

            let messStatus = document.createElement('div');
            messStatus.classList.add('status');
            elem.parentNode.appendChild(messStatus);

            elem.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                elem.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', mess.loadingImg);
            statusImg.classList.add('animated', 'fadeInUp');
            messStatus.appendChild(statusImg);

            let textMess = document.createElement('div');
            textMess.textContent = mess.loading;
            messStatus.appendChild(textMess);

            const formData = new FormData(elem);
            let api;

            //Если форма содержит картинку, которую мы пытаемся отправить, то отправляется на сервер designer
            elem.closest('.popup-design') || elem.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(result => {
                    console.log(result);
                    statusImg.setAttribute('src', mess.doneImg);
                    textMess.textContent = mess.done;
                })
                .catch(() => {
                    statusImg.setAttribute('src', mess.failImg);
                    textMess.textContent = mess.fail;
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        messStatus.remove();
                        elem.style.display = 'block';
                        elem.classList.remove('fadeOutUp');
                        elem.classList.add('fadeInUp');
                    }, 3000);
                });
        });
    });
};

export default forms;