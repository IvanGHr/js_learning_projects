const forms = () => {
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          phoneNumber = document.querySelectorAll('input[name="user_phone"]');

    phoneNumber.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/, '');
        });
    });

    const mess = {
        loading: "Loading...",
        done: "Thanks. We will be contact to you soon.",
        fail: "Sorry, something wrong..."
    };

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = mess.loading;
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
    };

    form.forEach(elem => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();

            let messStatus = document.createElement('div');
            messStatus.classList.add('status');
            elem.appendChild(messStatus);

            const formData = new FormData(elem);

            postData('assets/server.php', formData)
                .then(result => {
                    messStatus.textContent = mess.done;
                })
                .catch(() => {
                    messStatus.textContent = mess.fail;
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        messStatus.remove();
                    }, 3000);
                });
        });
    });
};

export default forms;