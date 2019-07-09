
let form = document.getElementById("contactForm");
let formInfo = {
    firstName: null,
    lastName: null,
    email: null,
    birthDate: null,
    phone: null,
    sexRadioBt: null,
    countryDop: null,
}

let getFormInfo = () => {
    objKey = Object.keys(formInfo);
    for (objKey in formInfo) {
        formInfo[objKey] = form.elements[objKey].value;
    }
};

let progressBar = () => {
    let filledIn = Object.values(formInfo).filter(Boolean).length;
    let whole = Object.values(formInfo).length;
    let progressComplete = (filledIn / whole) * 100;
    let percent = Math.trunc(progressComplete);
    document.getElementById("progressBar").value = percent;
}

form.addEventListener("change", () => {
    getFormInfo();
    progressBar();
});

