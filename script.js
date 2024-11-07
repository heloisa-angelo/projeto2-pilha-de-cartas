let deck = []
let option = ''

do{
    option = prompt(`
        Cartas no baralho; ${deck.length}
        1. Adiconar uma carta.
        2. Puxar um carta. 
        3. Sair.
        `)

        switch(option){
            case '1' :
                let newCard = prompt('Qual é a carta?')
                deck.push(newCard)
                break

            case '2' :
                let drawCard = deck.pop()  
                if(!drawCard){
                    alert('Não há nenhuma carta.')
                }else{
                    alert(`Você puxou um(a) ${drawCard}`)
                }
                break
            case '3' :
                alert('Saindo...')
                break
            default:
                alert('Opção inválida.')
        }
}while(option !== '3')
