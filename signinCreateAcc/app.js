function formValidate1() {
    let userName = document.getElementById('userName')
    let password = document.getElementById('password')
    let nameErr = document.getElementById("nameErr")
    let passErr = document.getElementById("passErr")
    if (userName.value == "" || password.value == "") {
        nameErr.style.visibility = "visible"
        nameErr.style.color = "red"
        passErr.style.visibility = "visible"
        passErr.style.color = "red"
        userName.style.border = "1px solid red"
        password.style.border = "1px solid red"
        return false
    } else {

        window.location = "https://cdn.dribbble.com/users/21478/screenshots/960854/media/f88dd17fe9653800f459bb2ce80cff5b.jpg?compress=1&resize=800x600&vertical=top";
        return false;
    }
}

let myForm = document.getElementById("myForm", addEventListener("submit", e => {
    e.preventDefault()
}))
myForm.addEventListener("submit", formValidate1)

let navreg = document.getElementById("navreg")
if (!(navreg.click == true)) {
    navreg.style.backgroundColor = "#cce6ff"
    navreg.style.borderRadius = "4px"
}

let navlo = document.getElementById("navlo")
if (!(navlo.click == false)) {
    navlo.style.backgroundColor = "#cce6ff"
    navlo.style.borderRadius = "4px"
}