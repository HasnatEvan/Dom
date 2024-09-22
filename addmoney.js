// add money
document.getElementById('Add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('clicked')
    const inputAmount=getInputFieldValueById('input-amount')
    const inputPassword=getInputFieldValueById('input-password')
    // console.log(inputAmount,inputPassword)
    if(isNaN(inputAmount)){
        alert('Something Wrong Please Try Again')
    }
    if(inputPassword===9999){
         
        const mainBalance=getTextFieldValueById('main-balance')
        const newBalance=mainBalance+inputAmount;
        console.log(newBalance)

        document.getElementById('main-balance').innerText = newBalance
        // Transaction history
        const p=document.createElement('p')
        p.innerText=`Added: ${inputAmount}Tk. Balance: ${newBalance}`
        console.log(p)
        document.getElementById('Transaction-contanier').appendChild(p)


    }
    else{
        alert('Failed To The Add Money')
    }
})



// cash out

document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('clicked')
    const cashOutAmount=getInputFieldValueById('cash-out-amount')
    const cashOutPassword=getInputFieldValueById('cash-out-password')

    // console.log(cashOutAmount,cashOutPassword)
    if(cashOutPassword===9999){
      
        const mainBalance=getTextFieldValueById('main-balance')
        if(cashOutAmount>mainBalance){
            alert('You Do Not Have Enough Money')
            return
        }
        const newBalance=mainBalance-cashOutAmount
        console.log(newBalance)

        document.getElementById('main-balance').innerText=newBalance
        // transaction history
        const div=document.createElement('div')
        div.classList.add('bg-yellow-500')
        div.innerHTML=`
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOutAmount} Withdraw in new balance ${newBalance}</p>
        `
        document.getElementById('Transaction-contanier').appendChild(div)
    }
    else{
        alert('Failed To The Cash Out Money')
    }
})
