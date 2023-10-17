// 8. Crea unha función JavaScript que comprobe se é poxible axendar unha reunión
// dentro do horario laboral.
// A estrutura da función e do programa indícanse a continuación. O código seguinte
// inclúe comprobacións con assert, que mostrarán por pantalla unha mensaxe en caso
// de fallo. É dicir, se a comprobación é correcta, o programa non mostrará ningunha
// mensaxe:
const inicioXornada = "07:30";
const finalXornada = "17:45";
const [horaInicioTraballo, minutoInicioTraballo]= inicioXornada.split(":");
const [horaFinalTraballo, minutoFinalTraballo]= finalXornada.split(":");
let duracionEnHoras;
let duracionEnMinutosRestantes;

function axendarReunion(horaInicioReunion, duracionEnMinutos) {
    const [horaReunion, minutoReunion]= horaInicioReunion.split(":");
    if (duracionEnMinutos >= 60){
        duracionEnHoras= Math.floor(duracionEnMinutos / 60);
        duracionEnMinutosRestantes= duracionEnMinutos % 60;
    } else {
        duracionEnHoras = 0;
        duracionEnMinutosRestantes = duracionEnMinutos;
    }

    let horaFinalizacion= parseInt(horaReunion)+ duracionEnHoras;
    let minutoFinalizacion= parseInt(minutoReunion)+ duracionEnMinutosRestantes;

    if (minutoFinalizacion >= 60){
        minutoFinalizacion-=60;
        horaFinalizacion++;
    }

    const inicioTraballo = parseInt(horaInicioTraballo) * 60 + parseInt(minutoInicioTraballo);
    const finalTraballo = parseInt(horaFinalTraballo) * 60 + parseInt(minutoFinalTraballo);
    const inicioReunion = parseInt(horaReunion) * 60 + parseInt(minutoReunion);
    const finalReunion = horaFinalizacion * 60 + minutoFinalizacion;

    if (inicioReunion >= inicioTraballo && finalReunion <= finalTraballo) {
        return true;
    } else {
        return false;
    }
}

// // Comprobacións
console.assert(axendarReunion("7:00", 15) == false,
'Fallo comprobando axendarReunión("7:00", 15) == false');
console.assert(axendarReunion("7:15", 30) == false,
'Fallo comprobando axendarReunión("7:15", 30) == false');
console.assert(axendarReunion("7:30", 30) == true,
'Fallo comprobando axendarReunión("7:30", 30) == true');
console.assert(axendarReunion("11:30", 60) == true,
'Fallo comprobando axendarReunión("11:30", 60) == true');
console.assert(axendarReunion("17:00", 45) == true,
'Fallo comprobando axendarReunión("17:00", 45) == true');
console.assert(axendarReunion("17:30", 30) == false,
'Fallo comprobando axendarReunión("17:30", 30) == false');

