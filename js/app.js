
document.getElementById('messi').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('messi-text');
    disable('messi');
    
    

})

document.getElementById('ronaldo').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('ronaldo-text');
    disable('ronaldo');
    // console.log(player);
    


})

document.getElementById('neymar').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('neymar-text');
    disable('neymar');
    // console.log(player);

})

document.getElementById('kdb').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('kdb-text');
    disable('kdb');
    // console.log(player);

})

document.getElementById('benzema').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('benzema-text');
    disable('benzema');
    // console.log(player);

})

document.getElementById('pedri').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('pedri-text');
    disable('pedri');
    // console.log(player);
})

document.getElementById('lewa').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('lewa-text');
    disable('lewa');
    // console.log(player);

})

document.getElementById('courtois').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('courtois-text');
    disable('courtois');
    // console.log(player);

})

document.getElementById('romero').addEventListener('click', function(){
    
    const player = getTextFromSelectButton('romero-text');
    disable('romero');
    // console.log(player);

    

})

document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerInput = getInput('per-player-field');
    

    
    const totalPlayer = list.children.length;
    
    
    
    const totalPlayerExpense = perPlayerInput * totalPlayer;
    
    const playerExpenseElement = document.getElementById('player-expense');
    playerExpenseElement.innerText = totalPlayerExpense;

    // const mahim = getInnerText('player-expense');
    // console.log(mahim);

    

    

})

document.getElementById('calculate-total').addEventListener('click', function(){
    const manager = getInput('manager');
    const coach = getInput('coach');

    const playerTotalcost = getInnerText('player-expense');

    const overAllCost = manager + coach + playerTotalcost;

    const finalTotalCostElement = document.getElementById('final-total-cost');
    finalTotalCostElement.innerText = overAllCost;

    
})


























