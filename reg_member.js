
var input_id;
var input_pw;
var input_r_pw;
var input_name;



var id;
var pw;
var r_pw;
var n;



window.onload = function () {
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_r_pw = document.getElementById("r_pw");
    input_name = document.getElementById("name");

}

function check() {
    id=input_id;
    pw=input_pw;
    r_pw=input_r_pw;
    n=input_name;
    
    
    if(c_id()&&c_pw()&&c_r_pw()&&c_name()&&pw_check()){
        alert("회원가입 완료");
    } else{
        alert("회원가입 실패");
    }
}

function c_id() {
    if (id.value.length >= 4 && id.value.length <= 12) {
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}

function c_pw() {
    if (pw.value.length >= 4 && pw.value.length <= 12) {
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function c_r_pw() {
    if (r_pw.value.length >= 4 && r_pw.value.length <= 12) {
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function c_name() {
    if (n.value.length >= 2 && n.value.length <= 12) {
        console.log("ok name");
        return true;
    } else {
        console.log("no name");
        return false;
    }
}
function pw_check() {
if(pw.value==r_pw.value){
    console.log("ok ");
    return true;
} else{
    console.log("no");
    return false;
}
}
