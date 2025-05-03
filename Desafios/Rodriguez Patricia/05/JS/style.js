
const minGastos = 100000
const maxGastos = 300000


let nombre= window.prompt("Por favor ingresa tu nombre");
let tipoDeViaje= window.prompt("Qué tipo de viaje realizaste? (Opciones: laboral / placer / familia)");

switch (tipoDeViaje){
    case "laboral":
         alert("¡Esperamos que tu viaje laboral haya sido productivo!");
    break;
    case "placer":
        alert("¡Nos alegra que hayas disfrutado tu viaje de placer!");
    break;
    case "familiar":
        alert("¡Qué bueno que hayas compartido tiempo con tu familia!");
        break;
        }

 let gastosCombustible= Number.parseInt(window.prompt("¿Cuánto gastaste en combustible?"));
 let gastosAlimentacion= Number.parseInt(window.prompt("¿Cuánto gastaste en alimentación?"));
 let gastosHospedaje= Number.parseInt(window.prompt("¿Cuánto gastaste en hospedaje?"));

 let subtotalGastos= gastosCombustible+gastosAlimentacion+gastosHospedaje;

 let gastosAdicionales= window.confirm("¿Realizaste otros gastos durante el viaje?");
 let impAdicional=0;
 if(gastosAdicionales== true){
   let cantAdicionales= Number.parseInt(window.prompt("¿Cuántos gastos adicionales realizaste?"));
   
   let sumAdicionales= 0;
   for(let i= 1; i<= cantAdicionales; i++){
      sumAdicionales= Number.parseInt(window.prompt("Ingresa el monto del gasto adicional #" + i));
      impAdicional+= sumAdicionales
     }
    }   
    let totalGastos= impAdicional + subtotalGastos;
    
 window.alert(nombre + ", el total de gastos durante tu viaje " + tipoDeViaje + " fue de $"+ totalGastos);

 if(totalGastos <= minGastos){
    window.alert("¡Excelente! Mantuviste tus gastos al mínimo");
     }
 if(totalGastos > minGastos && totalGastos< maxGastos){
        window.alert("Moderado, ¡Podrías ahorrar un poco más!");
      }
 else{totalGastos > maxGastos,
    window.alert("¡Atención! Tus gastos fueron muy elevados");
 }
 do{      
  let masGastos= window.confirm("¿Quieres calcular los gastos de otro viaje? (Aceptar= Sí / Cancelar= No");
  if(masGastos== false){
    window.alert("¡Gracias por usar el sistema de control de gastos!");
    break;
   }
   else{
    let tipoDeViaje= window.prompt("Qué tipo de viaje realizaste? (Opciones: laboral / placer / familia)");

   switch (tipoDeViaje){
     case "laboral":
         alert("¡Esperamos que tu viaje laboral haya sido productivo!");
     break;
     case "placer":
        alert("¡Nos alegra que hayas disfrutado tu viaje de placer!");
     break;
     case "familiar":
        alert("¡Qué bueno que hayas compartido tiempo con tu familia!");
        break;
        }
     
        let gastosCombustible= Number.parseInt(window.prompt("¿Cuánto gastaste en combustible?"));
        let gastosAlimentacion= Number.parseInt(window.prompt("¿Cuánto gastaste en alimentación?"));
        let gastosHospedaje= Number.parseInt(window.prompt("¿Cuánto gastaste en hospedaje?"));
       
        let subtotalGastos= gastosCombustible+gastosAlimentacion+gastosHospedaje;
       
        let gastosAdicionales= window.confirm("¿Realizaste otros gastos durante el viaje?");
        let impAdicional=0;
        if(gastosAdicionales== true){
          let cantAdicionales= Number.parseInt(window.prompt("¿Cuántos gastos adicionales realizaste?"));
          
          let sumAdicionales= 0;
          for(let i= 1; i<= cantAdicionales; i++){
             sumAdicionales= Number.parseInt(window.prompt("Ingresa el monto del gaso adicional #" + i));
             impAdicional+= sumAdicionales
            }
           } 
           else{
            window.alert(nombre + ", el total de gastos durante tu viaje" + tipoDeViaje + " fue de $"+ subtotalGastos);
           }  
           let totalGastos= impAdicional + subtotalGastos;
           
       window.alert(nombre + ", el total de gastos durante tu viaje" + tipoDeViaje + " fue de $"+ totalGastos);
           }
     }
   while(masGastos= true);
  
  
   

  


  






