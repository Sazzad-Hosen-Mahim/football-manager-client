
const messi = document.getElementById('messi');
messi.addEventListener('click', function(){
    
    getTextFromSelectButton('messi-text');
    disable('messi');
    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    if(list.children.length > 5){
        alert('cant select player more than 5');
        messi.removeEventListener('click', getTextFromSelectButton);
    }
    
    

})

const ronaldo = document.getElementById('ronaldo');
ronaldo.addEventListener('click', function(){
    
    getTextFromSelectButton('ronaldo-text');
    disable('ronaldo');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    if(list.children.length > 5){
        alert('cant select player more than 5');
        ronaldo.removeEventListener('click', getTextFromSelectButton);
    }
    
    


})

const neymar = document.getElementById('neymar');
neymar.addEventListener('click', function(){
    
    getTextFromSelectButton('neymar-text');
    disable('neymar');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    if(list.children.length > 5){
        alert('cant select player more than 5');
        neymar.removeEventListener('click', getTextFromSelectButton);
    }
    

})

const kdb = document.getElementById('kdb');
kdb.addEventListener('click', function(){
    
    getTextFromSelectButton('kdb-text');
    disable('kdb');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    
    if(list.children.length > 5){
        alert('cant select player more than 5');
        kdb.removeEventListener('click', getTextFromSelectButton);
    }

})

const benzema = document.getElementById('benzema');
benzema.addEventListener('click', function(){
    
    getTextFromSelectButton('benzema-text');
    disable('benzema');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    
    if(list.children.length > 5){
        alert('cant select player more than 5');
        benzema.removeEventListener('click', getTextFromSelectButton);
    }

})

const pedri = document.getElementById('pedri');
pedri.addEventListener('click', function(){
    
    getTextFromSelectButton('pedri-text');
    disable('pedri');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    if(list.children.length > 5){
        alert('cant select player more than 5');
        pedri.removeEventListener('click', getTextFromSelectButton);
    }
    
})

const lewa = document.getElementById('lewa');
lewa.addEventListener('click', function(){
    
    getTextFromSelectButton('lewa-text');
    disable('lewa');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    if(list.children.length > 5){
        alert('cant select player more than 5');
        lewa.removeEventListener('click', getTextFromSelectButton);
    }
    

})

const courtois = document.getElementById('courtois');
courtois.addEventListener('click', function(){
    
    getTextFromSelectButton('courtois-text');
    disable('courtois');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    
    if(list.children.length > 5){
        alert('cant select player more than 5');
        courtois.removeEventListener('click', getTextFromSelectButton);
    }

})

const romero = document.getElementById('romero');
romero.addEventListener('click', function(){
    
    getTextFromSelectButton('romero-text');
    disable('romero');

    const selectedNumber = document.getElementById('selected-number');
    selectedNumber.innerText = list.children.length;

    
    

    if(list.children.length > 5){
        alert('cant select player more than 5');
        romero.removeEventListener('click', getTextFromSelectButton);
        
    }

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

























