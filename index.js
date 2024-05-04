var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer!","Keyboardidst!","Introvert!","Family Oriented!"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 150
let height  = sec.offsetHeight
let id = sec.getAttribute("id")
if (top >= offset && top < offset + height) {
    navLinks.forEach(links => {
        links.classList.remove("active")
        document.querySelector("header nav a[href * = "+ id+"]").classList.add("active")
    })
}
    })
    let header = document.querySelector("header")
header.classList.toggle("sticky",window.scrollY > 100)
}
