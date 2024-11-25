document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone').value;
    const pinNumber = document.getElementById('pin-number').value

    if(phoneNumber == '01312203474' && pinNumber == '617738'){
        window.location.href = 'file/home.html'
    }
    else{
        alert("Wrong Phone Number or Password !!")
    }
})