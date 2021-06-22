setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hrrot = 30*h + m/2;
    minrot = 6*m;
    secrot = 6*s;

    hr.style.transform = `rotate(${hrrot}deg)`;
    min.style.transform = `rotate(${minrot}deg)`;
    sec.style.transform = `rotate(${secrot}deg)`;
}, 1000);