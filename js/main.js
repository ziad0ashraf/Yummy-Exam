/// <reference types="../@types/jquery"/>

import { apis } from "./APIs.js";
new apis();

let nameInput=document.getElementById('nameInput')
let emailInput=document.getElementById('emailInput')
let phoneInput=document.getElementById('phoneInput')
let ageInput=document.getElementById('ageInput')
let passwordInput=document.getElementById('passwordInput')
let rePasswordInput=document.getElementById('rePasswordInput')
let regexName=/^[a-zA-ZÀ-ÖØ-öø-ÿ'.\s-]{4,100}$/
let regexEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let regexPhone=/^01[0-2]\d{8}$/
let regexAge=/^(1[49]|[2-9]\d)$/
let regexPassword=/^([A-Za-z])[A-Za-z\d]{3,}$/

function qw(){
    if (validName()&&validEmail()&&validPhone()&&validAge()&&validPassword()&&rePass()) {
        document.getElementById('btnSubmit').classList.remove('disabled')
    }else{
        document.getElementById('btnSubmit').classList.add('disabled')
    }
}
nameInput.addEventListener('keyup', qw);
emailInput.addEventListener('keyup', qw);phoneInput.addEventListener('keyup', qw);
ageInput.addEventListener('keyup', qw);passwordInput.addEventListener('keyup', qw);
rePasswordInput.addEventListener('keyup', qw);

function validName(){
    if(regexName.test(nameInput.value)){
        nameInput.classList.replace('is-invalid', 'is-valid')
        $('.alertName').addClass('d-none')
        return true
    }else{
        $('.alertName').removeClass('d-none')
        nameInput.classList.add('is-invalid')
        nameInput.classList.remove('is-valid')
        return false
    }

}
validEmail()
function validEmail(){
    if(regexEmail.test(emailInput.value)){
        emailInput.classList.replace('is-invalid', 'is-valid')
        $('.alertEmail').addClass('d-none')
        return true
    }else{
        $('.alertEmail').removeClass('d-none')
        emailInput.classList.add('is-invalid')
        emailInput.classList.remove('is-valid')
        return false
    }

}

function validPhone(){
    if(regexPhone.test(phoneInput.value)){
        phoneInput.classList.replace('is-invalid', 'is-valid')
        $('.phoneInput').addClass('d-none')
        return true
    }else{
        $('.phoneInput').removeClass('d-none')
        phoneInput.classList.add('is-invalid')
        phoneInput.classList.remove('is-valid')
        return false
    }

}

function validAge(){
    if(regexAge.test(ageInput.value)){
        ageInput.classList.replace('is-invalid', 'is-valid')
        $('.alertAge').addClass('d-none')
        return true
    }else{
        $('.alertAge').removeClass('d-none')
        ageInput.classList.add('is-invalid')
        ageInput.classList.remove('is-valid')
        return false
    }

}
function validPassword(){
    if(regexPassword.test(passwordInput.value)){
        passwordInput.classList.replace('is-invalid', 'is-valid')
        $('.alertPass').addClass('d-none')
        return true
    }else{
        $('.alertPass').removeClass('d-none')
        passwordInput.classList.add('is-invalid')
        passwordInput.classList.remove('is-valid')
        return false
    }

}

function rePass(){
    if(passwordInput.value==rePasswordInput.value){
        rePasswordInput.classList.replace('is-invalid', 'is-valid')
        $('.alertRePass').addClass('d-none')
        return true
    }else{
        $('.alertRePass').removeClass('d-none')
        rePasswordInput.classList.add('is-invalid')
        rePasswordInput.classList.remove('is-valid')
        return false
    }
}

document.getElementById('searchLetter').addEventListener('input', function() {
    let value = this.value;
    if (value.length > 1) {
        this.value = value.charAt(0); 
    }
});


/* <><><><><><><>jquery<><><<><><><> */

$('.closeDetails').on('click',()=>{
    $('sectionDetails').addClass('d-none')
    $('sectionHome').removeClass('d-none')
})


let widthAside=$('#movingAside').width();
let width=$('aside').width();
// console.log(widthAside);
$('#movingAside').css({marginLeft:-widthAside})

for (let i = 0; i < 5; i++) {
    $("aside ul li").eq(i).animate({top: 300}, (i + 5) * 100)
}
$('#closeBtn').on('click',()=>{
    $('main').animate({marginLeft:0})
    for (let i = 0; i < 5; i++) {$("aside ul li").eq(i).animate({top: 100}, (i + 5) * 100)}
    $('#movingAside').animate({marginLeft :-widthAside},()=>{
        $('#closeBtn').addClass('d-none')
        $('#openBtn').removeClass('d-none')
    })
})
$('#openBtn').on('click',()=>{
    $('main').animate({marginLeft:width})
    for (let i = 0; i < 5; i++) {$("aside ul li").eq(i).animate({top: 0}, (i + 5) * 100)}
    $('#movingAside').animate({marginLeft :0},()=>{
        // $("aside ul li").animate({left: 0}, 500)
        $('#closeBtn').removeClass('d-none')
        $('#openBtn').addClass('d-none')
    })
})

$('aside ul li').on('click',function(){
    $(this).css({color:'gold'}).siblings().css({color:'white'})
})


$('#search').on('click',()=>{
    $('sectionHome').addClass('d-none')
    $('sectionDetails').addClass('d-none')
    $('sectionSearch').removeClass('d-none')
    $('sectionCategory').addClass('d-none')
    $('sectionArea').addClass('d-none')
    $('sectionIngredients').addClass('d-none')
    $('sectionContacts').addClass('d-none')
})
$('#categories').on('click',()=>{
    $('sectionHome').addClass('d-none')
    $('sectionDetails').addClass('d-none')
    $('sectionSearch').addClass('d-none')
    $('sectionCategory').removeClass('d-none')
    $('sectionArea').addClass('d-none')
    $('sectionIngredients').addClass('d-none')
    $('sectionContacts').addClass('d-none')
})
$('#area').on('click',()=>{
    $('sectionHome').addClass('d-none')
    $('sectionDetails').addClass('d-none')
    $('sectionSearch').addClass('d-none')
    $('sectionCategory').addClass('d-none')
    $('sectionArea').removeClass('d-none')
    $('sectionIngredients').addClass('d-none')
    $('sectionContacts').addClass('d-none')
})
$('#ingredients').on('click',()=>{
    $('sectionHome').addClass('d-none')
    $('sectionDetails').addClass('d-none')
    $('sectionSearch').addClass('d-none')
    $('sectionCategory').addClass('d-none')
    $('sectionArea').addClass('d-none')
    $('sectionIngredients').removeClass('d-none')
    $('sectionContacts').addClass('d-none')
})
$('#contact').on('click',()=>{
    $('sectionHome').addClass('d-none')
    $('sectionDetails').addClass('d-none')
    $('sectionSearch').addClass('d-none')
    $('sectionCategory').addClass('d-none')
    $('sectionArea').addClass('d-none')
    $('sectionIngredients').addClass('d-none')
    $('sectionContacts').removeClass('d-none')
})