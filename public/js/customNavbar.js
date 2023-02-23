

$(document).ready(function () {
    const navitems = document.querySelectorAll('.nav-item')
    navitems.forEach((navitem) => {
        navitem.addEventListener('click', (e) => {
            const target = e.target
            navitem.querySelector('.nav-link')
            navitem.children[0].classList.remove('active')
            const parent = target.parentElement.parentElement.children
            Array.from(parent).forEach((child) => {
                if (child.querySelector('.nav-link') == target) {
                    child.querySelector('.nav-link').classList.add('active')
                }
                else {
                    child.querySelector('.nav-link').classList.remove('active')
                }
            })
        })
    })
    const dropdownButton = document.querySelector('#dropdownMenuLink')
    dropdownButton.addEventListener('click', () => {
        const sidecart = document.querySelector('.sidecart')
        sidecart.classList.add('show')
        const closeButton = document.querySelector('#dropdownMenuLinkClose')
        closeButton.addEventListener('click', () => {
            sidecart.classList.remove('show')
        })
    })
    $(document).scroll(function () { 
        const scrolly= $(this).scrollTop()
        console.log(scrollY);
        if (scrolly>=80) {
           $(".logo").addClass('d-none');
        }
        else if(scrolly<80){
           $(".logo").removeClass('d-none');
        }
    });
});