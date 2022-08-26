
document.getElementById('messi').addEventListener('click', function(){
    
    getTextFromSelectButton('messi-text');
    disable('messi');
    
    

})

document.getElementById('ronaldo').addEventListener('click', function(){
    
    getTextFromSelectButton('ronaldo-text');
    disable('ronaldo');
    
    


})

document.getElementById('neymar').addEventListener('click', function(){
    
    getTextFromSelectButton('neymar-text');
    disable('neymar');
    

})

document.getElementById('kdb').addEventListener('click', function(){
    
    getTextFromSelectButton('kdb-text');
    disable('kdb');
    

})

document.getElementById('benzema').addEventListener('click', function(){
    
    getTextFromSelectButton('benzema-text');
    disable('benzema');
    

})

document.getElementById('pedri').addEventListener('click', function(){
    
    getTextFromSelectButton('pedri-text');
    disable('pedri');
    
})

document.getElementById('lewa').addEventListener('click', function(){
    
    getTextFromSelectButton('lewa-text');
    disable('lewa');
    

})

document.getElementById('courtois').addEventListener('click', function(){
    
    getTextFromSelectButton('courtois-text');
    disable('courtois');
    

})

document.getElementById('romero').addEventListener('click', function(){
    
    getTextFromSelectButton('romero-text');
    disable('romero');
    

    

})

document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerInput = getInput('per-player-field');
    

    
    const totalPlayer = list.children.length;
    
    
    
    const totalPlayerExpense = perPlayerInput * totalPlayer;
    
    const playerExpenseElement = document.getElementById('player-expense');
    playerExpenseElement.innerText = totalPlayerExpense;

    


})

document.getElementById('calculate-total').addEventListener('click', function(){
    const manager = getInput('manager');
    const coach = getInput('coach');

    const playerTotalcost = getInnerText('player-expense');

    const overAllCost = manager + coach + playerTotalcost;

    const finalTotalCostElement = document.getElementById('final-total-cost');
    finalTotalCostElement.innerText = overAllCost;


})


























