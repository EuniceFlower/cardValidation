import validator from './validator.js';

const inputs=document.querySelectorAll(".inputs");
const label=document.querySelectorAll(".label");
const validar=document.getElementById('validar');
const name=document.getElementById('name');
const numero=document.getElementById('numero');
const mensaje=document.getElementById('mensaje');
const spanDate = document.getElementById('date');
const nowYear = new Date().getUTCFullYear();

eventoLabels();
eventosInput();

function eventoLabels(){
    for(let i=0;i<inputs.length;i++){

        inputs[i].addEventListener('focus',function(){
            mensaje.textContent='Validar número';
            label[i].classList.add('focus');
            label[i].classList.remove('invalida');
            label[i].classList.remove('valida');
            mensaje.classList.remove('valida');
            mensaje.classList.remove('invalida');
        });
            inputs[i].addEventListener('blur',function(){
                if(inputs[i].value==""){
                    mensaje.textContent='Validar número';
                    label[i].classList.remove('focus');
                    label[i].classList.remove('invalida');

                }
            });
    }
    spanDate.textContent = nowYear;
}

function eventosInput(){
    inputs[0].addEventListener('keyup',(e)=>{
        let numero=e.target.value;

        let esto=numero.replace(/\s/g,'')
        .replace(/\D/g,'').replace(/([0-9]{4})/g,'$1 ').trim();
        inputs[0].value=esto;
    });

    inputs[1].addEventListener('keyup',(e)=>{
        let nombre=e.target.value;
        name.textContent=nombre;
    });
}

validar.addEventListener('click',()=>{
        let num=inputs[0].value;
        if(num!=''){
            let mostrarNum=num.replace(/\s/g,'');
            let bandera=validator.isValid(mostrarNum);
            let michi=validator.maskify(mostrarNum);

            resultados(bandera,michi);

        }else{
            alert('Ingrese Número de tarjeta');
        }
});

function resultados(bandera,michi){
    let cadena=[];
    let cadenaR="",cadenaSalida="";
    for(let i=0;i<michi.length;i++){
        cadena[i]=michi[i];
    }
    let numReverse=cadena.reverse();
    for(let j=0;j<numReverse.length;j++){
        cadenaR+=numReverse[j];
    }
    let numSeparado=cadenaR.replace(/([0-9]{4})/g,'$1 ').trim();
    for(let i=numSeparado.length-1;i>=0;i--){
        cadenaSalida+=numSeparado[i];
    }

    numero.textContent=cadenaSalida;

    if(bandera==true){
        let cad=`Número de tarjeta válida  <span class="material-icons">verified</span>`;
        mensaje.innerHTML=cad;
        mensaje.classList.remove('invalida');
        label[0].classList.remove('invalida');
        label[1].classList.remove('invalida');
        mensaje.classList.remove('noCheck');

        mensaje.classList.add('valida');
        mensaje.classList.add('check');
        label[0].classList.add('valida');
        label[1].classList.add('valida');

    }else{
        let cad=`Número de tarjeta inválida <span class="material-icons">error</span>`
        mensaje.innerHTML=cad;

        mensaje.classList.remove('valida');
        label[0].classList.remove('valida');
        label[1].classList.remove('valida');
        mensaje.classList.remove('check');

        mensaje.classList.add('invalida');
        mensaje.classList.add('noCheck');
        label[0].classList.add('invalida');
        label[1].classList.add('invalida');
    }
}

