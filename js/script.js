

let btnCalcular = document.getElementById("btn-calcular");

let modalResultHTML = document.getElementById("modal-result-body");


function calcularUFC(){
    let totalEntradas = (entradaSimple.value*3) + (entradaMedia.value*4) + (entradaCompleja.value*6);
    let totalSalidas = (salidaSimple.value*4) + (salidaPromedio.value*5) + (salidaComplejo.value*7);
    let totalAlmacenamiento = (almacenamientoSimple.value*7) + (almacenamientoMedio.value*10) + (almacenamientoComplejo.value*15);
    let totalInterfaces = (interfaceSimple.value*5) + (interfaceMedio.value*7) + (interfaceComplejo.value*10);
    let totalConsulas = (consultaSimple.value*3) + (consultaMedio.value*4) + (consultaComplejo.value*6);

    return totalEntradas + totalSalidas + totalAlmacenamiento + totalInterfaces + totalConsulas;
}

function calcularFAV(){
    let totalFav = (inputFactor1.value*1) + (inputFactor2.value*1) + (inputFactor3.value*1) + (inputFactor4.value*1)
                    + inputFactor5.value*1 + inputFactor6.value*1 + inputFactor7.value*1 + inputFactor8.value*1
                    + inputFactor9.value*1 + inputFactor10.value*1 + inputFactor11.value*1 + inputFactor12.value*1
                    +inputFactor13.value*1 + inputFactor14.value*1;

    return totalFav;
}



btnCalcular.addEventListener('click', () =>{

    let UFC = calcularUFC();
    let FAV = calcularFAV();
    let FPA = UFC * (0.65 + (0.01*FAV));
    let horasPersona = (FPA/(1/inputHoras.value));
    let horasMiembro = horasPersona/inputPersonas.value;
    let duracionMeses = horasMiembro / (100/20);

    let resultadoTotal = `<h6>Puntos de funcion ajustados (PFA) </h6>
    <h2 class="text-primary">${FPA.toFixed(2)}</h2>
    <hr>
    <h5>Cálculo del esfuerzo</h5><br>
    <h6>Duración del proyecto en horas con una jornada de ${inputHoras.value} horas</h6>
    <h2 class="text-primary">${horasMiembro.toFixed(2)} horas/persona</h2><br>
    <h6>Duración en meses</h6>
    <h2 class="text-primary">${(duracionMeses/20).toFixed(2)} meses </h2>
    <p style="font-family: Arial, Helvetica, sans-serif; font-size: 18px;">
        con un equipo de desarrollo de <Strong>${inputPersonas.value} personas</Strong>.</p> `

    let text = `<h1> UFC: ${UFC}</h1>
                <h1> FAV: ${FAV}</h1>
                <h1> FAV: ${FPA}</h1>
                <h1> Horas por persona: ${horasMiembro.toFixed(2)}</h1>
                <h1> Duracion en Meses: ${(duracionMeses/20).toFixed(2)} </h1>`;


    modalResultHTML.innerHTML = resultadoTotal;
});