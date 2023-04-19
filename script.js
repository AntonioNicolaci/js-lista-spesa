const listaSpesa = ["Latte", "Caffe'", "Cereali", "Pane", "Pasta", "Insalata mista", "Filetto di carne", "Patate fresche", "Vino"];
const div_Spesa = document.getElementById("div_Spesa");
let listaSpesaWaiter = "";
let i = 0;

do {
    iDue = i + 1;
    listaSpesaWaiter += `<span>${iDue}) ${listaSpesa[i++]}.</span>`;
} while (listaSpesa.length > i);

div_Spesa.style = "display: flex; flex-direction: column;";
div_Spesa.innerHTML = listaSpesaWaiter;