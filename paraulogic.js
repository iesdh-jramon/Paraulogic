const secreta = 'PLATAS'

function valorsInicials(){
    document.getElementById('pista').value=""+ "valor"
    document.getElementById('pista').disabled=true
}
/*
Inicialitzam valors
 */
//document.getElementById('pista').value='La paraula d\'avui és de :'+secreta.length + ' lletres.'
function analitzarParaula (){
    let paraula = document.getElementById('resposta').value.toUpperCase();
    console.log(paraula);
    if (paraula===secreta){
        window.alert('Has guanyat!');
        document.getElementById('resposta').hidden=true;


    }else{
        if (paraula.length===secreta.length){
            pintarResposta(paraula);
        }else{
            window.alert('La paraula ha de tenir '+secreta.length + ' lletres')
        }
    }

}
let novaEntrada =''
function pintarResposta(paraula){
    novaEntrada='';
    novaEntrada='<div class="resposta">'
    for (let i=0; i<paraula.length; i++) {
        if (paraula.charAt(i)===secreta.charAt(i)){
            novaEntrada+='<div class="slot green">';
        } else if (secreta.includes(paraula.charAt(i))) {
            //Si inclou i ja està de verda
            novaEntrada+='<div class="slot yellow">';
        }else {
            novaEntrada+='<div class="slot">';
        }
        novaEntrada+=paraula.charAt(i);
        novaEntrada+='</div>';
    }
    novaEntrada+='</div>'
    document.getElementById('respostes').innerHTML+=novaEntrada
}

addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('pista').innerText='La paraula té '+ secreta.length + ' lletres'
    setTimeout(alert('Prova2'),10000);
});


// input.addEventListener("keypress", function(event) {
//     // If the user presses the "Enter" key on the keyboard
//     if (event.key === "Enter") {
//         window.alert('Hola')
//         analitzarParaula();
//     }
// });


/*
    <div class="resposta">
        <div class="slot green">P</div>
        <div class="slot">A</div>
        <div class="slot yellow">R</div>
        <div class="slot">A</div>
        <div class="slot">U</div>
        <div class="slot">L</div>
        <div class="slot">A</div>
    </div>
 */
/*
            if (!secreta.indexOf(paraula.charAt(i))==i){
                secreta.
                novaEntrada+='<div class="slot yellow">';
            }else {
                novaEntrada+='<div class="slot">';
 */