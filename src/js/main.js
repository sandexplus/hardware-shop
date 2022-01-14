import './slider';
import { modal } from './modules/modal';
import { tab } from './modules/tab';
import { form } from './modules/form';
import { changeModalState } from './modules/changeModalState';
import { timer } from './modules/timer';
import { image } from './modules/image';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {
        'form': 0,
        'view type': 'tree'
    };

    changeModalState(modalState);
    modal();
    tab('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
    tab('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
    tab('.balcon_icons_img', '.balcon_icons', '.big_img > img', 'do_image_more');
    form(modalState);
    timer('#days', '#hours', '#minutes', '#seconds', '18 Dec 2022');
    image();
});