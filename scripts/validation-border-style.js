function validateForm() {
    var x = document.forms["form"]["cardNumber"].value;
    if (x == "" || x == null) {
        const inputCardNumber = document.querySelector('#cardNumber')
        inputCardNumber.dataset.state = 'invalid'
        return false;
    }

    var x = document.forms["form"]["owner"].value;
    if (x == "" || x == null) {
        const inputOwner= document.querySelector('#owner')
        inputOwner.dataset.state = 'invalid'
        return false;
    }

    var x = document.forms["form"]["expiration-date"].value;
    if (x == "" || x == null) {
        const inputDate= document.querySelector('#expiration-date')
        inputDate.dataset.state = 'invalid'
        return false;
    }

    var x = document.forms["form"]["cvv"].value;
    if (x == "" || x == null) {
        const inputCVV= document.querySelector('#cvv')
        inputCVV.dataset.state = 'invalid'
        return false;
    }
}