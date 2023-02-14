
const navitems = document.querySelectorAll('.nav-item')
navitems.forEach((navitem)=>{
    navitem.addEventListener('click',(e)=>{
        const target = e.target
        console.log(navitem);
        navitem.querySelector('.nav-link')
        navitem.children[0].classList.remove('active')
        const parent =target.parentElement.parentElement.children
        Array.from(parent).forEach((child)=>{
            if (child.querySelector('.nav-link')== target) {
            child.querySelector('.nav-link').classList.add('active')
            }
            else{
                child.querySelector('.nav-link').classList.remove('active')
            }
        })
    })
})