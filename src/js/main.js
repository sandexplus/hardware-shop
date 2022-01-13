'use strict';

import './slider';
import { modal } from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    modal('.popup_engineer_btn', '.popup_engineer', '.popup_close strong');
    modal('.phone_link', '.popup_engineer', '.popup_close strong');
});