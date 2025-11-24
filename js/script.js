const form = document.querySelector('form');
const modal = document.getElementById('modal');

function validateName(section){
    let isValide = true;
    const inputs = section.querySelectorAll('input');
    const ps = section.querySelectorAll('p');
    inputs.forEach((input, key) => {
        if(!input.value || input.value == ""){
            ps[key].classList.remove('hidden');
            isValide = false
        }else{
            ps[key].classList.add('hidden');
        }
    });
    return isValide;
    
}

function validateEmail(section){

    const input = section.querySelector('input');
    const ps = section.querySelectorAll('p');
    if(!input.value || input.value == ""){
        ps[0].classList.remove('hidden');
        return false;
    }else{
        ps[0].classList.add('hidden');
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!regex.test(input.value)){
            ps[1].classList.remove('hidden');
            return false;
        }else{
            ps[1].classList.add('hidden');
        }
        return true;
    }
}

function validateQuery(section){
    const inputs = section.querySelectorAll('input');
    const p = section.querySelector('p');
    if(!inputs[0].checked && !inputs[1].checked){
        p.classList.remove('hidden');
        return false;
    }else{
        p.classList.add('hidden');
        return true;
    }
}

function validateMessage(section){
    const textarea = section.querySelector('textarea');
    const p = section.querySelector('p');
    if(!textarea.value || textarea.value == ""){
        p.classList.remove('hidden');
        return false;
    }else{
        p.classList.add('hidden');
        return true;
    }
}

function validateConsent(section){
    const input = section.querySelector('input');
    const p = section.querySelector('p');
    if(!input.checked){
        p.classList.remove('hidden');
        return false;
    }else{
        p.classList.add('hidden');
        return true;
    }
}

function validateForm(sections){
    const nameValid = validateName(sections[0]);
    const emailValid = validateEmail(sections[1]);
    const queryValid = validateQuery(sections[2]);
    const messageValid = validateMessage(sections[3]);
    const consentValid = validateConsent(sections[4]);

    if(!nameValid || !emailValid || !queryValid || !messageValid || !consentValid) return false;
    return true;
}

function displayModal(){
    modal.classList.remove('hidden');
    const main = document.querySelector('main');
    main.classList.toggle('disabled');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sections = form.querySelectorAll('section');
    let isValide = validateForm(sections);
    console.log(isValide);
    if(isValide) displayModal();
});