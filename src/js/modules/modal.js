const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                windows.forEach(item => {
                    item.classList.remove('show');
                    document.body.classList.remove('modal-open');
                });

                modal.classList.add('show');
                document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {

            windows.forEach(item => {
                item.classList.remove('show');
                document.body.classList.remove('modal-open');
            });

            modal.classList.remove('show');
            document.body.classList.remove('modal-open');

        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.classList.remove('show');
                    document.body.classList.remove('modal-open');
                });
                modal.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).classList.add('show');
            document.body.classList.remove('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export { modal };