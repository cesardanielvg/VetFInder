function evalEmail() {
    let input = document.form.emailInput;
    let elements = [];

    if (input.value.includes("@")) {
        input.classList.toggle("is-success");

        elements = document.getElementsByClassName("valid");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("is-hidden");
        }
    } else {
        input.classList.toggle("is-danger");

        elements = document.getElementsByClassName("invalid");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("is-hidden");
        }
    }
    setTimeout(function () {
        turnOffAlerts(elements);
    }, 3000);
}

function turnOffAlerts(elements) {
    document.form.emailInput.classList.remove("is-success");
    document.form.emailInput.classList.remove("is-danger");

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("is-hidden");
    }
}

function notify() {
    let notification = document.getElementsByClassName("notification");
    let btn = document.getElementById("submit");

    btn.classList.toggle("is-loading");
    setTimeout(function () {
        btn.classList.toggle("is-loading");
        notification[0].classList.toggle("is-hidden");
        setTimeout(function(){
            notification[0].classList.toggle("is-hidden");
            document.form.reset()
        }, 6000)
    }, 2000);
    

}
