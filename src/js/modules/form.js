function form() {
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

    console.log(form);
    const message = {
        loading: "Загрузка...",
        success: "Спасибо! Мы скоро с Вами свяжемся",
        failed: "Что-то пошло не так"
    };

    const postData = async(url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    const cleanInput = (inputsSelector) => {
        inputsSelector.forEach(item => {
            item.value = "";
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failed)
                .finally(() => {
                    cleanInput(input);
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
}

export { form };