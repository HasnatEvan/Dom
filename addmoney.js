// Add Money....
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    // console.log('add money clicked')

     const inputAmount=getInputFieldValueById('input-amount')
    const inputPassword=getInputFieldValueById('input-password')
    // console.log(inputAmount,inputPassword)
    if(isNaN(inputAmount)){
        alert('Something Wrong Please Try Again')
    }
    if(inputPassword===9999){
        alert('Added')

        const accountBalance=getTextFieldValueById('account-balance')
        const newBalance=accountBalance+inputAmount
        // console.log(newBalance)

        document.getElementById('account-balance').innerText=newBalance

    }
    else{
        alert('Failed to the add Money')
    }
})
// Cash out.......
document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault()
    // console.log('clicked')
    const cashOutAmount=getInputFieldValueById('cash-out-amount')
    const cashOutPassword=getInputFieldValueById('cash-out-password')
    // console.log(cashOutAmount,cashOutPassword)
    if(isNaN(cashOutAmount)){
        alert('Something Wrong Please Try Again')
    }
    if(cashOutPassword===9999){
        const accountBalance=getTextFieldValueById('account-balance')
        const newBalance=accountBalance-cashOutAmount

        document.getElementById('account-balance').innerText=newBalance
        
    }
    else{
        alert('Failed to the cash out')
    }
})

