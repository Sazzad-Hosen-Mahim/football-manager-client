
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
    const perPlayer = getInput('per-player-field');
    // console.log(perPlayer);

    
    const totalPlayer = list.children.length;
    
    // console.log(list.children.length); important

    // const playerExpenseString = playerExpenseElement.innerText;
    // const playerExpense = parseFloat(playerExpenseString);
    
    const totalPlayerExpense = perPlayer * totalPlayer;
    
    const playerExpenseElement = document.getElementById('player-expense');
    playerExpenseElement.innerText = totalPlayerExpense;
    



    

    



})

























