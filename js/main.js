window.addEventListener('scroll', function(){
    if (window.pageYOffset > 10) {
        document.querySelector('nav').classList.add("bg-white", "shadow-md")
    }
    else  {
        document.querySelector('nav').classList.remove("bg-white", "shadow-md")
    }
})