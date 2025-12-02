const secreta = 'RADIO'

function valorsInicials(){
    document.getElementById('pista').value=""+ "valor"
    document.getElementById('pista').disabled=true
}
/*
Inicialitzam valors
 */
//document.getElementById('pista').value='La paraula d\'avui és de :'+secreta.length + ' lletres.'
function analitzarParaula (){


}
function pintarResposta(paraula){

}

addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('pista').innerText='La paraula té '+ secreta.length + ' lletres'
    setTimeout(alert('La paraula té '+ secreta.length + ' lletres'),10000);
});
