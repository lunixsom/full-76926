const Expense_limit_low =100000;
const Expense_limit_medium =300000;

let username =window.prompt("Por  favor ingresa  tu  nombre");
let repeatCalculation=false;
do{
let TripType= window.prompt("Que tipo  de viaje realizaste (opciones: laboral/ placer /familiar)");
let commentary= "" ;

switch(TripType){
    case"laboral":
        commentary =" ¡Esperamos que tu viaje laboral  haya sido  productivo!";
        break;
    case "placer":
            commentary = " ¡Nos alegra que hayas disfrutado de tu viaje!";
            break;
    case"familiar":
            commentary = " !Que bueno que hayas compartido tiempo con tu familia¡";
            break;
        }

let expenseFuel=parseInt(window.prompt(commentary + " cuanto gastaste en combustible "));
let expenseFood=parseInt(window.prompt(commentary + " cuanto gastaste en alimentos "));
let expenseHotel=parseInt(window.prompt(commentary + " cuanto gastaste en hotel "));

let  TotalExpenses= expenseFood+expenseFuel+expenseHotel;

const HasOtherExpenses =window.confirm("¿Realizaste Otros Gastos  durante el viaje");

if (HasOtherExpenses){
    const  numberofOtherExpenses = parseInt(window.prompt("cuantos  gastos adicionales realizaste"));

    for(let i = 1;i<=numberofOtherExpenses;i++ ){
        const OtherExpenses = parseInt(window.prompt("Ingresa el monto del gastop adicional #"+i))
    TotalExpenses += OtherExpenses;
    }
}

finalMessage = username + ", el total de gastos durante el viaje " +  TripType +"fue de $ "+ TotalExpenses;


if (TotalExpenses<Expense_limit_low){
window.alert( finalMessage + "¡Excelente! mantuviste tus gastos al minimo");
} else if (TotalExpenses>= Expense_limit_low && TotalExpenses<= Expense_limit_medium ){
    window.alert(finalMessage + ".Moderado. ¡Podrias ahorras un poco mas!");
} else{window.alert(finalMessage + "¡Atenciopn! Tus gastos  fueron muy elevado");

}
repeatCalculation=window.confirm("¿Quieres calcular los gastos  de otro viaje?(Aceptar =si / Cancelar = No)");
}while (repeatCalculation);

window.alert("gracias por usar el sistema de control de gastos!");