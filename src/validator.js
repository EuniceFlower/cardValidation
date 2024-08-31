const validator = {
  isValid:(nIngresado)=>{

    return validacion(nIngresado);
  },
  maskify:(nIngresado)=>{

    return mostrarNumero(nIngresado);
    
  }
};
function mostrarNumero(n){
  let cadena="",char='#';
  if(n.length>4){
    let cuatro=n.slice(n.length-4);

    cadena=char.repeat(n.length-4)+cuatro;
  }else{
    cadena=n;
  }
  return cadena;
}

function validacion(num){
  let respuesta=false;
  let residuo=0;
  let sumPares=0,sumaTotal=0;
  let sumImpares=0;
  if(num.length>=11){
    for(let i=num.length-2;i>=0;i=i-2){
      let unidades=num[i]*2;
      residuo=0;
      while(unidades>0){
        residuo+=unidades%10;
        unidades=Math.floor(unidades/10);
      }
      sumPares+=residuo;
    }
    for(let j=num.length-1;j>=0;j=j-2){
      sumImpares+=parseInt(num[j]);
    }
    sumaTotal=parseInt(sumPares)+parseInt(sumImpares);
      if((sumaTotal%10)==0){
       respuesta=true;
     }
  }
  return respuesta;
}
export default validator;
