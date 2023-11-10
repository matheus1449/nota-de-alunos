var media = 7

var nome = prompt ("Digite o nome do aluno:")
var matematica = prompt ("Digite a nota do aluno na diciplina de matematica:")
var portugues = prompt ("Digite a nota do aluno na diciplina de portugues:")
var historia = prompt ("Digite a nota do aluno na diciplina de historia:")
var soma = matematica + portugues + historia /2

console.log('Nome do aluno:', nome)


if ( matematica >= media) {
    document.write('Aprovado na diciplina de matematica') 
        
    }

else { 
   document.write('Reprovado na diciplina de matematica')

 }

 document.write('<hr>')

 if ( portugues >= media) {
    document.write('Aprovado na diciplina de portugues') 
        
    }

else { 
   document.write('Reprovado na diciplina de portugues')

 }

 document.write('<hr>')

 if (historia >= media) {
    document.write('Aprovado na diciplina de historia') 
        
    }

else { 
   document.write('Reprovado na diciplina de historia')

 }
 document.write('<hr>')

 if (soma >= 7) {
    document.write('<h2>O ' + nome + ' esta aprovado</h2>')
 } else {
    document.write('<h2>O ' + nome + ' esta reprovado</h2>')
 }