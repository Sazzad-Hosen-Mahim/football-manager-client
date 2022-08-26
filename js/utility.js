// function to select from select button 

const list = document.getElementById('order-list');  
function getTextFromSelectButton(players){
    const player = document.getElementById(players);
    const playerName = player.innerText;
    // console.log(playerName);
    
    // putting players name into ol
    
    const li = document.createElement('li');
    li.innerText = playerName;

    list.appendChild(li);

    // return list.children.length;
    // const highestList = list.children.length
    // console.log(list.children.length);
    
}

// disable function  start

function disable(playerId){
    document.getElementById(playerId).disabled = true;
}

// disable function end 


// calculation function start 

function getInput(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputFieldString = inputField.value;
    const total = parseFloat(inputFieldString);

    return total;

}


// calculation function end 

// set innertext  function start

function getInnerText(textName){
    const textString = document.getElementById(textName).innerText;
    const text = parseFloat(textString);

    return text;

}

// set innertext function end 








