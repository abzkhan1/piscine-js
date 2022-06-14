function isFriday(date) {
    let d = new Date(date)
    if (d.getDay() === 5) {
        return true
    } else {
        return false
    }
}

function isWeekend(date) {
    let d = new Date(date)
    if (d.getDay() === 6 || 0) {
        return true
    } else {
        return false
    }
}

function isLeapYear(date) {
    let d = new Date(date)
    if (d.getFullYear() % 4 === 0) {
        return true;
    } else {
        return false
    }
}

function isLastDayOfMonth(date) {
    let d = new Date(date)
    if (isLeapYear(date)) {
        return (d.getMonth() === 1 && d.getDate() === 29)
    }
    var lastDay = (d.getFullYear(), d.getMonth() + 1, 0);
    return (lastDay.getTime() == date.getTime())
}