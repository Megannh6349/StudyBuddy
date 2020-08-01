// User Questions
const userAge = '';
const userYearsExperience = ["< 6 months", "6 months – 1 year", "1-3 years", "3-5 years", "5-8 years", "8+ years"];
const userCodingAbilities = ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Materialize", "APIs", "JSON", "AJAX", "React.js", "Angular.js", "MySQL", "MongoDB", "Node.js", "Express.js", "MVC", "Sequelize/ORM"];
const userStack = ["Front End", "Back End", "Full Stack"];
const userSpokenLang = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Bengali", "Portuguese", "Russian", "Japanese", "Turkish", "Korean", "French", "German", "Vietnamese", "Italian", "Polish", "Arabic", "Croatian", "Ukranian", "Dutch", "Greek"];
const userRemotePref = ["In Person", "Remote", "Either"];
const userDistancePref = ["<15 miles", "15-25 miles", "25-40 miles", "40-60 miles", "60-100 miles", "100+ (doesn’t matter)"];

// User Preferences
const preferredAge = ["put a slider here"];
const preferredYearsExperience = ["< 6 months", "6 months – 1 year", "1-3 years", "3-5 years", "5-8 years", "8+ years"];
const preferredCodingAbilities = ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Materialize", "APIs", "JSON", "AJAX", "React.js", "Angular.js", "MySQL", "MongoDB", "Node.js", "Express.js", "MVC", "Sequelize/ORM"];
const preferredStack = ["Front End", "Back End", "Full Stack"];
const preferredSpokenLang = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Bengali", "Portuguese", "Russian", "Japanese", "Turkish", "Korean", "French", "German", "Vietnamese", "Italian", "Polish", "Arabic", "Croatian", "Ukranian", "Dutch", "Greek"];
const preferredRemotePref = ["In Person", "Remote", "Either"];
const preferredDistancePref = ["<15 miles", "15-25 miles", "25-40 miles", "40-60 miles", "60-100 miles", "100+ (doesn’t matter)"];

// Preferred Age Slider logic
var slider = document.getElementById('test-slider');
noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    step: 1,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
        'min': 0,
        'max': 100
    },
    format: wNumb({
        decimals: 0
    })
});