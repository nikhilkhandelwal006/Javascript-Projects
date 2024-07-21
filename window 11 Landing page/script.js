let taskbar=document.querySelector(".taskbar")
let startmenu=document.querySelector(".startmenu")

taskbar.addEventListener("click",()=>{
    if(startmenu.style.bottom=="50px"){
        startmenu.style.bottom="-655px"
    }else{
        startmenu.style.bottom="50px"
    }
})