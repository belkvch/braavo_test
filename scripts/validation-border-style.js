function validateForm() {
    var x = document.forms["form"]["cardNumber"].value;
    if (x == "" || x == null) {
        const inputCardNumber = document.querySelector('#cardNumber')
        inputCardNumber.dataset.state = 'invalid'
        document.getElementById("alertNumber").style.opacity = "1";
        return false;
    } else {
        document.getElementById("alertNumber").style.opacity = "0";
    }

    var x = document.forms["form"]["owner"].value;
    if (x == "" || x == null) {
        const inputOwner= document.querySelector('#owner')
        inputOwner.dataset.state = 'invalid'
        document.getElementById("alertOwner").style.opacity = "1";
        return false;
    } else {
        document.getElementById("alertOwner").style.opacity = "0";
    }

    var x = document.forms["form"]["expiration-date"].value;
    if (x == "" || x == null) {
        const inputDate= document.querySelector('#expiration-date')
        inputDate.dataset.state = 'invalid'
        document.getElementById("alertDate").style.opacity = "1";
        return false;
    } else {
        document.getElementById("alertDate").style.opacity = "0";
    }

    var x = document.forms["form"]["cvv"].value;
    if (x == "" || x == null) {
        const inputCVV= document.querySelector('#cvv')
        inputCVV.dataset.state = 'invalid'
        document.getElementById("alertCVV").style.opacity = "1";
        return false;
    } else {
        document.getElementById("alertCVV").style.opacity = "0";
    }
}