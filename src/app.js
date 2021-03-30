const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Mnday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}


try {
    document.getElementById('day').innerText = dayOfTheWeek();
} catch(err) {}


exports.dayOfTheWeek = dayOfTheWeek;