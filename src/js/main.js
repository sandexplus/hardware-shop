'use strict';

import './slider';
import { modal, showModalByTime } from './modules/modal';
import { tab } from './modules/tab';

document.addEventListener('DOMContentLoaded', () => {
    /* showModalByTime('.popup', 60000); */
    modal('.popup_engineer_btn', '.popup_engineer', '.popup_close strong');
    modal('.phone_link', '.popup', '.popup_close strong');
    tab('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
    tab('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click')
});