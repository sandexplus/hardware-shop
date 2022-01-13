function tab(tabSelector, parentSelector, contentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabSelector),
        parent = document.querySelector(parentSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].classList.add('show');
        content[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    parent.addEventListener('click', (e) => {
        if (e.target.classList.contains(tabSelector.slice(1)) ||
            e.target.parentNode.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (e.target === item || e.target.parentNode === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export { tab };