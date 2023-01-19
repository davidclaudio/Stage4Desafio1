let numbers = []

for(let i=0; i<=1; i++){
    numbers[i] = Number(prompt(`Digite o ${i+1}º número`))
}

alert(`A soma dos dois números é: ${numbers[0]+numbers[1]}`)
alert(`A subtração dos dois números é: ${numbers[0]-numbers[1]}`)
alert(`A multiplicação dos dois números é: ${numbers[0]*numbers[1]}`)
alert(`A divisão dos dois números é: ${numbers[0]/numbers[1]}`)
alert(`A resto da divisão dos dois números é: ${numbers[0]%numbers[1]}`)

let sumNumbers = numbers[0]+numbers[1]
let rest = sumNumbers%2

if( rest == 0){
    alert(`A soma dos números é par: ${sumNumbers}`)
}
else{
    alert(`A soma dos números é ímpar: ${sumNumbers}`)
}

if(numbers[0] == numbers[1]){
    alert(`Os números digitados são iguais!`)
}
else{
    alert(`Os números digitados são diferentes!`)
}