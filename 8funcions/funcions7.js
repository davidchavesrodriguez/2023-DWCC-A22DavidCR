// 7. Crea unha función á que se lle pase un DNI (ex: 12345678w ou 87654321T) e
// devolva se é correcto ou non.
letrasDni="TRWAGMYFPDXBNJZSQVHLCKE";
let valor=0; 
const dniCheck=(dni)=>{
    letraDni= dni.charAt(8);
    numerosDni= dni.substring(0,8);
    moduloNumeros= numerosDni % 23;
    letraCorrecta= letrasDni.charAt(moduloNumeros);
    if (letraCorrecta===letraDni) {
        return "O teu DNI é correcto"
    } else {
        return "Ta mal"
    }
};
console.log(dniCheck("12345678Z"));
