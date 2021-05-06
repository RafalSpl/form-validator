const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');
const [...allInputs] = document.querySelectorAll('input');


const showError = (input, msg) => {
    
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkform = input => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}

const checkLength = (input, min) => {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0,-1)} składa się z min ${min}`);
    }
}

const checkError = () => {

    const allInputBox = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputBox.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++;
            console.log(errorCount)
        }
    })

    if (!errorCount) {
        popup.classList.add('show-popup');
    }
}

const checkMail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(email.value)) {
            clearError(email)
        } 
}

const checkPassword = (pass1, pass2) => {
    if(pass1.value !== pass2.value) {
        showError(pass2, 'hasła muszą być takie same')
    } 
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkform(allInputs);
    checkLength(username, 3);
    checkLength(pass, 4);
    checkPassword(pass, pass2);
    checkMail(email);
    checkError();
})


clearBtn.addEventListener('click', e => {
    e.preventDefault();
    allInputs.forEach(el => {
        el.value = '';
        clearError(el);
    })
})