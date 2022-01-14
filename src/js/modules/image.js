function image() {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');


    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            imgPopup.classList.add('popup');
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = e.target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (e.target && e.target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            imgPopup.classList.remove('popup');
        }
    });
}

export { image };