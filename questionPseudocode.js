// User Questions
const userAge = '';
const userYearsExperience = ["< 6 months", "6 months – 1 year", "1-3 years", "3-5 years", "5-8 years", "8+ years"];
const userCodingAbilities = ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Materialize", "APIs", "JSON", "AJAX", "React.js", "Angular.js", "MySQL", "MongoDB", "Node.js", "Express.js", "MVC", "Sequelize/ORM"];
const userStack = ["Front End", "Back End", "Full Stack"];
const userSpokenLang = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Bengali", "Portuguese", "Russian", "Japanese", "Turkish", "Korean", "French", "German", "Vietnamese", "Italian", "Polish", "Arabic", "Croatian", "Ukranian", "Dutch", "Greek"];
const userRemotePref = ["In Person", "Remote", "Either"];
const userDistancePref = ["<15 miles", "15-25 miles", "25-40 miles", "40-60 miles", "60-100 miles", "100+ (doesn’t matter)"];

// User Preferences
const otherAge = ["put a slider here"];
const otherYearsExperience = ["< 6 months", "6 months – 1 year", "1-3 years", "3-5 years", "5-8 years", "8+ years"];
const otherCodingAbilities = ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Materialize", "APIs", "JSON", "AJAX", "React.js", "Angular.js", "MySQL", "MongoDB", "Node.js", "Express.js", "MVC", "Sequelize/ORM"];
const otherStack = ["Front End", "Back End", "Full Stack"];
const otherSpokenLang = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Bengali", "Portuguese", "Russian", "Japanese", "Turkish", "Korean", "French", "German", "Vietnamese", "Italian", "Polish", "Arabic", "Croatian", "Ukranian", "Dutch", "Greek"];
const otherRemotePref = ["In Person", "Remote", "Either"];
const otherDistancePref = ["<15 miles", "15-25 miles", "25-40 miles", "40-60 miles", "60-100 miles", "100+ (doesn’t matter)"];

// Append User Years
function showUserYearsExp() {
    $("#userYearsExperienceQuestion").empty();

    userYearsExperience.forEach(answer => {
        const html = `<p>
            <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>${answer}</span>
            </label>
        </p>`;

        $("#userYearsExperienceQuestion").append(html)
    })
};

// Append User Coding Ability
function showUserCodingAbility() {
    $("#userCodingAbilitiesQuestion").empty();

    userCodingAbilities.forEach(answer => {
        const html = `<p>
        <label>
            <input type="checkbox" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#userCodingAbilitiesQuestion").append(html)
    })
};

// Append User Stack
function showUserStack() {
    $("#userStackQuestion").empty();

    userStack.forEach(answer => {
        const html = `<p>
        <label>
            <input class="with-gap" name="group1" type="radio"  />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#userStackQuestion").append(html)
    })
};

// Append User Spoken Language
function showUserSpokenLang() {
    $("#userSpokenLangQuestion").empty();

    userSpokenLang.forEach(answer => {
        const html = ` <p>
        <label>
            <input type="checkbox" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#userSpokenLangQuestion").append(html)
    })
};

// Append User Remote Preference
function showUserRemotePref() {
    $("#userRemotePrefQuestion").empty();

    userRemotePref.forEach(answer => {
        const html = `<p>
        <label>
            <input class="with-gap" name="group1" type="radio" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#userRemotePrefQuestion").append(html)
    })
};

// Append User Distance Preference
function showUserDistancePref() {
    $("#userDistancePrefQuestion").empty();

    userDistancePref.forEach(answer => {
        const html = `<p>
        <label>
            <input class="with-gap" name="group1" type="radio" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#userDistancePrefQuestion").append(html)
    })
};

// Append Other Years
function showOtherYearsExp() {
    $("#otherYearsExperienceQuestion").empty();

    otherYearsExperience.forEach(answer => {
        const html = `<p>
            <label>
                <input class="with-gap" name="group1" type="radio"  />
                <span>${answer}</span>
            </label>
        </p>`;

        $("#otherYearsExperienceQuestion").append(html)
    })
};

// Append Other Coding Ability
function showOtherCodingAbility() {
    $("#OtherCodingAbilitiesQuestion").empty();

    otherCodingAbilities.forEach(answer => {
        const html = `<p>
        <label>
            <input type="checkbox" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#otherCodingAbilitiesQuestion").append(html)
    })
};

// Append Other Stack
function showOtherStack() {
    $("#otherStackQuestion").empty();

    otherStack.forEach(answer => {
        const html = `<p>
        <label>
            <input class="with-gap" name="group1" type="radio"  />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#otherStackQuestion").append(html)
    })
};

// Append Other Spoken Language
function showOtherSpokenLang() {
    $("#otherSpokenLangQuestion").empty();

    otherSpokenLang.forEach(answer => {
        const html = ` <p>
        <label>
            <input type="checkbox" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#otherSpokenLangQuestion").append(html)
    })
};

// Append Other Remote Preference
function showOtherRemotePref() {
    $("#otherRemotePrefQuestion").empty();

    otherRemotePref.forEach(answer => {
        const html = `<p>
        <label>
            <input class="with-gap" name="group1" type="radio" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#otherRemotePrefQuestion").append(html)
    })
};

// Append Other Distance Preference
function showOtherDistancePref() {
    $("#otherDistancePrefQuestion").empty();

    otherDistancePref.forEach(answer => {
        const html = `<p>
        <label>
            <input class="with-gap" name="group1" type="radio" />
            <span>${answer}</span>
        </label>
    </p>`;

        $("#otherDistancePrefQuestion").append(html)
    })
};

// Show User Years
showUserYearsExp();

//  Show User Coding Ability
showUserCodingAbility();

// Show User Stack
showUserStack();

// Show User Spoken Language
showUserSpokenLang();

// Show User Remote Preference
showUserRemotePref();

// Show User Distance Preference
showUserDistancePref();

// Show Other Years
showOtherYearsExp();

//  Show Other Coding Ability
showOtherCodingAbility();

// Show Other Stack
showOtherStack();

// Show Other Spoken Language
showOtherSpokenLang();

// Show Other Remote Preference
showOtherRemotePref();

// Show Other Distance Preference
showOtherDistancePref();