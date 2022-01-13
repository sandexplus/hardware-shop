import './slider';
import { modal } from './modules/modal';
import { tab } from './modules/tab';
import { form } from './modules/form';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modal();
    tab('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
    tab('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
    tab('.balcon_icons_img', '.balcon_icons', '.big_img > img', 'do_image_more');
    form();
});