import CriaCPF from './modules/criaCPF';
import VerificaCPF from './modules/verificaCPF'

import './assets/css/style.css';

document.querySelector('#gera').addEventListener('click',()=>{
    const areaCPF = document.querySelector('.cpf-gerado');
    areaCPF.innerHTML = new CriaCPF().geraCPF();
});

document.querySelector('#verifica').addEventListener('click', ()=>{
    const areaCPF = document.querySelector('#cpf');
    const area = document.querySelector('#areaVerifica');

    for(let verif of document.querySelectorAll('.verification')){
        verif.remove();
    }

    if(new VerificaCPF(areaCPF.value).valida()){
        const div = document.createElement('div');
        div.classList.add('valido', 'verification');
        div.innerHTML = 'Este CPF é válido';
        area.insertAdjacentElement('afterend', div);
        return;
    }

    const div = document.createElement('div');
    div.classList.add('invalido', 'verification');
    div.innerHTML = 'Este CPF não é válido';
    area.insertAdjacentElement('afterend', div);
    return;
    
})