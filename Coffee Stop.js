let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
})
// document.querySelector('#menu-btn').onclick = ()=>{
//     navbar.classList.toggle('active');
// }

let cartItem = document.querySelector('.cart-items-container');
let cartBtn = document.querySelector('#cart-btn');

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
})

let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
})

window.onscroll = ()=>{
    navbar.classList.remove('active');
    // cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

// like button
function changeColor(){
    var icon = document.querySelector('#heart-btn');
    icon.style.color = "red";
}

//contact form validation

function validation(){

    //username
    var user = document.getElementById('username').value;
    if(user == ""){
        document.getElementById('fusername').innerHTML= " **please enter name";
        return false;
    }
    else if((user.length < 3) || (user.length > 21)){
        document.getElementById('fusername').innerHTML = " **name must consists of 2 to 20 characters";
        return false;
    }
    else if(!isNaN(user)){
        document.getElementById('fusername').innerHTML = " **enter valid name";
        return false;
    }
    

    //email
    var email = document.getElementById('email').value;
    if(email == ""){
        document.getElementById('femail').innerHTML = " **please enter email adress";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('femail').innerHTML = " **invalid position of @";
        return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!= '.')){
        document.getElementById('femail').innerHTML = " **invalid email";
        return false;
    }

    // phone number 
    var phone = document.getElementById('number').value;
    if(phone == ""){
        document.getElementById('fnumber').innerHTML = ' **please enter phone number';
        return false;
    }
    if(isNaN(phone)){
        document.getElementById('fnumber').innerHTML = ' **enter digits only';
        return false;
    }
    if(phone.length!=10){
        document.getElementById('fnumber').innerHTML = ' **number should be of 10 digits'
        return false;
    }
    document.getElementById('form').reset();
}

//save data to local storage
function save_data(){
    var input = document.getElementById('username');
    localStorage.setItem("username", input.value);
    var storedValue = localStorage.getItem("username");

    var input2 = document.getElementById('email');
    localStorage.setItem("email", input2.value);
    var storedValue2 = localStorage.getItem("email");

    var input3 = document.getElementById('number');
    localStorage.setItem("number", input3.value);
    var storedValue3 = localStorage.getItem("number");
}




// let icons = document.querySelector('.icons')
// let heartBtn = document.querySelector('#heart-btn');
// console.log(heartBtn);
// heartBtn.addEventListener('click', ()=>{
//     icons.style.color = 'red';
//     return false;
// })
// function myFunc(){
//     const heartBtn = document.getElementById('heart-btn');
//     heartBtn.addEventListener('click', ()=>{
//         heartBtn.classList.toggle('red');
//     });
// };
// myFunc();

// const heartBtn = document.querySelectorAll('#heart-btn');
// heartBtn.addEventListener('click', ()=>{
//     heartBtn.classList.toggle('red');
// })
// heartBtn();