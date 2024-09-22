function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value 
    const inputNumber=parseFloat(inputValue)
    return inputNumber;

}


function getTextFieldValueById(id){
    const inputText=document.getElementById(id).innerText
    const inputNumber=parseFloat(inputText)
    return inputNumber;
}


function showSelectionById(id) {
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('Transaction-from').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
