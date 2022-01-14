function timer(daysSelector, hoursSelector, minutesSelector, secondsSelector, dateEnd) {
    const days = document.querySelector(daysSelector),
        hours = document.querySelector(hoursSelector),
        minutes = document.querySelector(minutesSelector),
        seconds = document.querySelector(secondsSelector);
    dateEnd = Date.parse(dateEnd);
    let timerId = setTimeout(function time() {
        let dateNow = new Date();
        dateNow = Date.parse(dateNow);

        let dateRemain = +dateEnd - +dateNow,
            tempDate = dateRemain;

        days.innerText = checkZero(Math.floor(tempDate / (1000 * 60 * 60 * 24)));

        tempDate -= days.innerText * 1000 * 60 * 60 * 24;
        hours.innerText = checkZero(Math.floor(tempDate / (1000 * 60 * 60)));

        tempDate -= hours.innerText * 1000 * 60 * 60;
        minutes.innerText = checkZero(Math.floor(tempDate / (1000 * 60)));

        tempDate -= minutes.innerText * 1000 * 60;
        seconds.innerText = checkZero(Math.floor(tempDate / (1000)));

        if (dateRemain > 0) {
            timerId = setTimeout(time, 1000);
        }
    }, 0);

    function checkZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    days.innerText = '00';
    hours.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
}

export { timer };