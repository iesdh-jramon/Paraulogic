Fes un joc de paraules tipus paraulogic que mostri les lletres que va encertants
Tens un codi html i css d'exemple que te pot ajudar a començar.

Exemple de codi de cada línia:
```html
<div class="resposta">
    <div class="slot green">S</div>
    <div class="slot">E</div>
    <div class="slot yellow">G</div>
    <div class="slot">O</div>
    <div class="slot">N</div>
</div>
```
```js
respostaHTML=''
respostaHTML += '<div class="resposta">';
for (let i = 0; i < 5; i++) {
respostaHTML += '<div class="slot green">S</div>'
}
respostaHTML += '</div>';
document.getElementById('respostes').innerHTML += respostaHTML;
```