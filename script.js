const hamburger = document.querySelector(".hamburger-btn")
const dropdown = document.querySelector(".dropdown")
const closeUp = document.querySelector(".close")
const header = document.querySelector(".head")

document.addEventListener("click", (e) =>{
    if(e.target.className.includes("hamburger-btn")){
        header.innerHTML = `<img src="images/logo.svg" alt="">
    <button class="close"><img src="images/icon-close.svg"></button>`
    dropdown.style.display = "flex"
    document.body.style.overflow = "hidden"
    }
})


document.addEventListener("click", (e) =>{
    if(e.target.className.includes("close")){
        header.innerHTML = `<img src="images/logo.svg" alt="">
    <button class="hamburger-btn"><img src="images/icon-hamburger.svg"></button>`
    dropdown.style.display = "none"
    document.body.style.overflow = "visible"
    }
})



