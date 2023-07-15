let prevY = 0
window.onscroll = () => {
    if(window.innerWidth >= 600){
        if(prevY > window.scrollY) {
            document.getElementById("nav").style.top = "0";
        }
        else {
            document.getElementById("nav").style.top = "-50px";
            document.getElementById("dropdown-menu").style.display = "none";
        }
        prevY = window.scrollY;
    }
}

let drop = document.getElementById("dropdown")
drop.addEventListener('mouseover', () => {
    document.getElementById("dropdown-menu").style.display = "flex";
})
drop.addEventListener('mouseleave', () => {
    document.getElementById("dropdown-menu").style.display = "none";
})

let phone = document.getElementById("phone")
phone.addEventListener('mouseover', () => {
    phone.src = "./img/phone2.png";
})
phone.addEventListener('mouseleave', () => {
    phone.src = "./img/phone.png";
})

let email = document.getElementById("email")
email.addEventListener('mouseover', () => {
    email.src = "./img/email2.png";
})
email.addEventListener('mouseleave', () => {
    email.src = "./img/email.png";
})

let github = document.getElementById("github")
github.addEventListener('mouseover', () => {
    github.src = "./img/github2.png";
})
github.addEventListener('mouseleave', () => {
    github.src = "./img/github.png";
})

let resume = document.getElementById("resume")
resume.addEventListener('mouseover', () => {
    resume.src = "./img/doc2.png";
})
resume.addEventListener('mouseleave', () => {
    resume.src = "./img/doc.png";
})

function menu(){
    document.getElementById("nav").style.display = "flex";
    document.getElementById("menuc").style.display = "block";
    document.getElementById("menu").style.top = "-50px";
    document.getElementById("dropdown-menu").style.display = "flex";
}

function menuc(){
    document.getElementById("nav").style.display = "none";
    document.getElementById("menuc").style.display = "none";
    document.getElementById("menu").style.top = "1%";
}

window.onresize = () => {
    if(window.innerWidth >= 600) {
        document.getElementById("menu").style.display = "none";
        document.getElementById("menuc").style.display = "none";
        document.getElementById("nav").style.display = "flex";
        document.getElementById("dropdown-menu").style.display = "none";
    }
    else {
        menuc()
        document.getElementById("menu").style.display = "block";
    }
}