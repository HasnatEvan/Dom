document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const inputNumber=document.getElementById('input-number').value 
    const inputPassword=document.getElementById('input-password').value 
     if(inputNumber==='100'&& inputPassword==='9999'){
      //   alert("Login")
      window.location.href = './home.html';

     }
     else{
        alert('Something Wrong Please Try Again')
     }
})