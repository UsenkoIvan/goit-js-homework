import refs from './refs.js'

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const handleStartChangeBG = (e) => {
    if (refs.isActive) {
        return
    };
    refs.start = setInterval(() => {
        refs.isActive = true;
        const randomColor = randomIntegerFromInterval(0, colors.length);
        refs.body.style.background = colors[randomColor];
    }, 1000);
};


const handleStopChangeBG = () => {
    clearInterval(refs.start);
    refs.isActive = false;
};


refs.start.addEventListener('click', handleStartChangeBG);
refs.stop.addEventListener('click', handleStopChangeBG);