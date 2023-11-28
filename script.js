// Математические операции
let btn = document.querySelector('.values')
let num1 = document.querySelector('#first-num')
let num2 = document.querySelector('#second-num')
let resultFont = document.querySelector('.result')
let equality = document.querySelector('#equality')
let erase = document.querySelector('#delete')
let firstNum = ''
let secondNum = ''
let operation = ''
let result = ''



btn.addEventListener('click', firstNumberValue)
function firstNumberValue(event) {
    if ((Number(event.target.textContent) || event.target.textContent == 0) && num2.classList.contains('hidden')) {
        num1.textContent += Number(event.target.textContent)
        return firstNum = num1.textContent
    }
}

btn.addEventListener('click', operations)
function operations(event) {
    if (event.target.textContent == '/' || event.target.textContent == 'x' || event.target.textContent == '-' || event.target.textContent == '+') {
        num2.textContent = ''
        num2.classList.remove('hidden')
        num1.classList.add('hidden')
        return operation = event.target.textContent
    } else if (result != '') {
        return firstNum = result
    }
}

btn.addEventListener('click', secondNumberValue)
function secondNumberValue(event) {
    if ((Number(event.target.textContent) || event.target.textContent == 0) && num1.classList.contains('hidden')) {
        num2.textContent += Number(event.target.textContent)
        return secondNum = num2.textContent
    }
}

btn.addEventListener('click', equal)
function equal(event) {
    if (event.target.textContent == '=') {
        switch (operation) {
            case '+':
                result = Number(firstNum) + Number(secondNum)
                break
            case '-':
                result = Number(firstNum) - Number(secondNum)
                break
            case 'x':
                result = Number(firstNum) * Number(secondNum)
                break
            case '/':
                result = ((Number(firstNum) / Number(secondNum)).toFixed(2)) * 1
                break
            default:
              result = "Это не выполнится"
        }

        num2.classList.add('hidden')
        num1.classList.remove('hidden')
        num1.textContent = result 
    }
}

btn.addEventListener('click', clear)
function clear(event) {
    if (event.target.textContent == 'C') {
        num1.textContent = ''
        num2.textContent = ''
        firstNum = ''
        secondNum = ''
        operation = ''
        result = ''
        num2.classList.add('hidden')
        num1.classList.remove('hidden')
    }
}
// //////////////////////////////////////////////////////////////////
// 
// 
// Смена темы
let theme = document.querySelector('.style-btn')
let image = document.querySelector('.style-img')
let container = document.querySelector('.container')
let longBtns = document.querySelectorAll('.long-btn')
let operationBtns = document.querySelectorAll('.operation')
let numberBtns = document.querySelectorAll('.number')

theme.addEventListener('click', lightMode)
function lightMode() {
    let longBtnsArr = Array.from(longBtns)
    let operationBtnsArr = Array.from(operationBtns)
    let numberBtnsArr = Array.from(numberBtns)
    if (!theme.classList.contains('light-style-btn')) {
        theme.classList.add('light-style-btn')
        container.classList.add('light-container')
        longBtnsArr = longBtnsArr.forEach(item => item.classList.add('light-long-btn'))
        operationBtnsArr = operationBtnsArr.map(item => item.classList.add('light-operation'))
        numberBtnsArr = numberBtnsArr.map(item => item.classList.add('light-number'))
        image.src = './img/moon.svg'
        image.setAttribute('alt', 'Light')
    } else {
        theme.classList.remove('light-style-btn')
        container.classList.remove('light-container')
        longBtnsArr = longBtnsArr.map(item => item.classList.remove('light-long-btn'))
        operationBtnsArr = operationBtnsArr.map(item => item.classList.remove('light-operation'))
        numberBtnsArr = numberBtnsArr.map(item => item.classList.remove('light-number'))
        image.src = './img/sun.svg'
        image.setAttribute('alt', 'Dark')
    }
}