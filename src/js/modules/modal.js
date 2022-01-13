function modal(btnSelector, activeClass, closeClass) {
    const btn = document.querySelectorAll(btnSelector);
    const popup = document.querySelector(activeClass);
    const close = document.querySelector(closeClass);

    popup.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains(activeClass.slice(1)) && e.target.classList.contains('show')) {
            popup.classList.remove('show');
        }
        if (e.target.tagName === close.tagName) {
            popup.classList.remove('show');
        }
    });

    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target);
            popup.classList.add('show');
        });
    });

}

export { modal };