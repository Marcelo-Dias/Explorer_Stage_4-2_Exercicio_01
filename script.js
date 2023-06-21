let primeiroNumero = prompt("Digite o primeiro número:")
let segundoNumero = prompt("Digite o segundo número:")

let checkIgual = primeiroNumero === segundoNumero ? 'são iguais' : 'são diferentes'

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

const sum = (primeiroNumero + segundoNumero)
let parOuImpar = sum % 2 == 0 ? 'par' : 'ímpar'
const sub = (primeiroNumero - segundoNumero)
const mult = (primeiroNumero * segundoNumero)
const div = (primeiroNumero / segundoNumero)
const restoDiv = (primeiroNumero % segundoNumero)

alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${restoDiv}`)
alert(`A soma dos dois números é ${parOuImpar}`)
alert(`Os dois números inseridos ${checkIgual}`)