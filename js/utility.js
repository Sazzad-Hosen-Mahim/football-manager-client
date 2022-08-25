// function to select from select button 

const list = document.getElementById('order-list');  
function getTextFromSelectButton(players){
    const player = document.getElementById(players);
    const playerName = player.innerText;
    console.log(playerName);
    
    // putting players name into ol
    
    const li = document.createElement('li');
    li.innerText = playerName;

    list.appendChild(li);

    // return list.children.length;
    const highestList = list.children.length
    // console.log(list.children.length);

    
    
    
    
    return highestList;
       

    
}

// disable function  start

function disable(playerId){
    document.getElementById(playerId).disabled = true;
}

// disable function end 


// calculation function start 

function getInput(inputValue){
    const perPlayerField = document.getElementById(inputValue);
    const perPlayerFieldString = perPlayerField.value;
    const perPlayer = parseFloat(perPlayerFieldString);

    return perPlayer;

}

// calculation function end 










