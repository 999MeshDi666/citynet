let RegBtn = document.querySelector('.btn_reg');
let LoginBtn = document.querySelector('.btn_login');
let FormReg = document.querySelector('.form_reg');
let FormLogin = document.querySelector('.form_login');

RegBtn.addEventListener('click',()=>{
    FormReg.classList.add('form_reg_on');
    FormLogin.classList.add('form_login_off');
});
LoginBtn.addEventListener('click',()=>{
    FormReg.classList.remove('form_reg_on');
    FormLogin.classList.remove('form_login_off');
});