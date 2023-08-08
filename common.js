
const id = document.getElementById('id');
const pw = document.getElementById('password');
const loginbutton = document.getElementById('loginbutton');

function login() {
    const id = document.getElementById('id');
    const pw = document.getElementById('password');

    if(id.value=="" || pw.value==""){
        alert("로그인을 할 수 없습니다.")
    }else{
        location.href='main.html';
    }
}

function create_id() {
    var name = document.querySelector('#name');
    var roomnum = document.querySelector('#roomnum');
    var id = document.querySelector('#id');
    var pw = document.querySelector('#password');
    var r_pw = document.querySelector('#r_pw');

    if(id.value=="" || pw.value =="" || r_pw.value==""){
        alert("회원가입을 할 수 없습니다.")
    }else{
        if(pw.value !== r_pw.value) alert("비밀번호를 확인해주세요.");
        else location.href = 'main.html';
    }
}
