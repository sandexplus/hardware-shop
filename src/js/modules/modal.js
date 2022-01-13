function modal(btnSelector, activeClass, closeClass) {
    const btn = document.querySelectorAll(btnSelector);
    const popup = document.querySelector(activeClass);
    const close = document.querySelector(closeClass);



    popup.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains(activeClass.slice(1))) {
            popup.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
        if (e.target.tagName === close.tagName) {
            popup.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });

    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            popup.classList.add('show');
            document.body.classList.add('modal-open');
        });
    });

}

function showModalByTime(selector, timer) {
    setTimeout(() => {
        const popup = document.querySelector(selector);
        popup.classList.add('show');
        document.body.classList.add('modal-open');
    }, timer);
}

export { modal, showModalByTime };