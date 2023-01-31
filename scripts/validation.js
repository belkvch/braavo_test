let input = document.querySelector("#cardNumber"),
    numbers = /[0-9]/,
    regExp = /[0-9]{4}/
// добавляем слушатель события на инпут
input.addEventListener("input", (ev) => {
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 19-ю символами
    if (ev.inputType === "insertText" && !numbers.test(ev.data) || input.value.length > 19) {
        input.value = input.value.slice(0, input.value.length - 1)
        return
    }
    //работа клавиш "backspace","delete"
    let value = input.value
    if (ev.inputType === "deleteContentBackward" && regExp.test(value.slice(-4))) {
        input.value = input.value.slice(0, input.value.length - 1)
        return
    }
    //пробел после 4 цифр подряд
    if (regExp.test(value.slice(-4)) && value.length < 19) {
        input.value += " "
    }
})

let inputCVV = document.querySelector("#cvv"),
    numbersCVV = /[0-9]/
// добавляем слушатель события на инпут
inputCVV.addEventListener("input", (ev) => {
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 3-мя символами
    if (ev.inputType === "insertText" && !numbersCVV.test(ev.data) || inputCVV.value.length > 3) {
        inputCVV.value = inputCVV.value.slice(0, inputCVV.value.length - 1)
        return
    }
})

let inputDate = document.querySelector("#expiration-date"),
    numbersDate = /[0-9]/,
    regExpDate = /[0-9]{2}/
// добавляем слушатель события на инпут
inputDate.addEventListener("input", (ev) => {
    // не позволяем ввести ничего, кроме цифр 0-9, ограничиваем размер поля 5-ю символами
    if (ev.inputType === "insertText" && !numbersDate.test(ev.data) || inputDate.value.length > 5) {
        inputDate.value = inputDate.value.slice(0, inputDate.value.length - 1)
        return
    }
    //работа клавиш "backspace","delete"
    let value = inputDate.value
    if (ev.inputType === "deleteContentBackward" && regExpDate.test(value.slice(-2))) {
        inputDate.value = inputDate.value.slice(0, inputDate.value.length - 1)
        return
    }
    //слэш после 2 цифр подряд
    if (regExpDate.test(value.slice(-2)) && value.length < 5) {
        inputDate.value += "/"
    }
})

let inputOwner = document.querySelector("#owner"),
ownerName =/^[a-zA-Za ]+$/
inputOwner.addEventListener("input", (ev) => {
    // не позволяем ввести ничего, кроме букв, ограничиваем размер поля 50-ю символами
    if (ev.inputType === "insertText" && !ownerName.test(ev.data) || inputOwner.value.length > 50) {
        inputOwner.value = inputOwner.value.slice(0, inputOwner.value.length - 1)
        return
    }
})