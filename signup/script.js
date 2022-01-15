var username = document.getElementById('username')
var password = document.getElementById('password')
var retype = document.getElementById('retype')
var email = document.getElementById('email')
var phone = document.getElementById('phone')

var usf = document.getElementById('usf')
var pwf = document.getElementById('pwf')
var rtf = document.getElementById('rtf')
var emf = document.getElementById('emf')
var pnf = document.getElementById('pnf')

var done = document.getElementById('done')
var formContent = document.getElementById('form-content')

usf.onfocus = function() {
    username.style.border = "2px solid #00ccff"
}

usf.onblur = function () {
    if (this.value === "" || isUsername(usf.value)===false) username.style.border = "2px solid red"
    else username.style.border = "2px solid green"
}

pwf.onfocus = function() {
    password.style.border = "2px solid #00ccff"
}

pwf.onblur = function () {
    if (this.value === "" || isTruePass(pwf.value)===false) password.style.border = "2px solid red"
    else if (isStrongPass(pwf.value)===false) password.style.border = "2px solid orange"
    else password.style.border = "2px solid green"
}

rtf.onfocus = function() {
    retype.style.border = "2px solid #00ccff"
}

rtf.onblur = function () {
    if (this.value === "" || this.value!=pwf.value) retype.style.border = "2px solid red"
    else retype.style.border = "2px solid green"
}

emf.onfocus = function() {
    email.style.border = "2px solid #00ccff"
}

emf.onblur = function () {
    if (this.value === "" || this.value.indexOf("@")===-1) email.style.border = "2px solid red"
    else email.style.border = "2px solid green"
}

pnf.onfocus = function() {
    phone.style.border = "2px solid #00ccff"
}

pnf.onblur = function () {
    if (this.value === "" || isPhone(pnf.value)===false) phone.style.border = "2px solid red"
    else phone.style.border = "2px solid green"
}

done.onclick = function() {
    if (usf.value==="" || isUsername(usf.value)===false) username.style.border = "2px solid red"
    if (isStrongPass(pwf.value)===false) password.style.border = "2px solid orange"
    if (pwf.value==="" || isTruePass(pwf.value)===false) password.style.border = "2px solid red"
    if (rtf.value==="" || rtf.value!=pwf.value) retype.style.border = "2px solid red"
    if (pnf.value==="" || isPhone(pnf.value)===false) phone.style.border = "2px solid red"
    if (emf.value==="" || emf.value.indexOf("@")===-1) email.style.border = "2px solid red"

    if (usf.value!=""
     && pwf.value!=""
     && rtf.value!=""
     && rtf.value===pwf.value
     && pnf.value!=""
     && emf.value!=""
     && emf.value.indexOf("@")!=-1
     && isPhone(pnf.value)===true
     && isUsername(usf.value)===true
     && isTruePass(pwf.value)===true)
    formContent.submit()
}

function isPhone(str) {
    for (var i=0; i<str.length; i++){
        if (str.charAt(i)<'0' || str.charAt(i)>'9') return false
    }
    return true
}

function isUsername(str){
    for (var i=0; i<str.length; i++){
        if (str.charAt(i)<'&' || str.charAt(i)> '~') return false
    }
    return true
}

function isTruePass(str) {
    for (var i=0; i<str.length; i++){
        if (str.charAt(i)<'&' || str.charAt(i)> '~') return false
    }
    return true
}

function isStrongPass(str){
    var isStrong = "";
    if (str.length>=8 && str.length<=15) isStrong+="a"

    for (var i=0; i<str.length; i++){
        if (str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){ //test chữ số
            isStrong+="b"
            break
        } 
    }

    for (var i=0; i<str.length; i++){
        if (str.charAt(i)>='A' && str.charAt(i)<='Z'){
            isStrong+="c"
            break
        } 
    }

    for (var i=0; i<str.length; i++){
        if (str.charAt(i)>='a' && str.charAt(i)<='z'){
            isStrong+="d"
            break
        }
    }

    for (var i=0; i<str.length; i++){
        if ((str.charAt(i)>='&' && str.charAt(i)<='/')
         || (str.charAt(i)>=':' && str.charAt(i)<='@')
         || (str.charAt(i)>='[' && str.charAt(i)<='`')
         || (str.charAt(i)>='{' && str.charAt(i)<='~')){
            isStrong+="e"
            break
        }
    }

    if (isStrong==="abcde") return true
    else return false
}