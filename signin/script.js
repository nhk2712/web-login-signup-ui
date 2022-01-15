var username = document.getElementById('username')
var password = document.getElementById('password')

var usf = document.getElementById('usf')
var pwf = document.getElementById('pwf')

var done = document.getElementById('done')
var formContent = document.getElementById('form-content')

usf.onfocus = function() {
    username.style.border = "2px solid #00ccff"
}

usf.onblur = function () {
    if (this.value === "") username.style.border = "2px solid red"
    else username.style.border = "2px solid lightgrey"
}

pwf.onfocus = function() {
    password.style.border = "2px solid #00ccff"
}

pwf.onblur = function () {
    if (this.value === "") password.style.border = "2px solid red"
    else password.style.border = "2px solid lightgrey"
}

done.onclick = function() {
    if (usf.value==="") username.style.border = "2px solid red"
    if (pwf.value==="") password.style.border = "2px solid red"

    if (usf.value!="" && pwf.value!="") formContent.submit()
}