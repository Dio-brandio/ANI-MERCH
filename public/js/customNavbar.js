

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
        const scrollOFBODY= $(document).scrollTop()
        if(!$('#navbarSupportedContent').hasClass('show')){
            if (scrollOFBODY>$('.navbar').height()/3) {
                $('.navbar').removeClass('bg-transparent navbar-light').addClass('bg-dark navbar-dark shadow')
                $('.text-color-change .nav-link').addClass('text-white')
                $('.logo').addClass('h-0')
            }
            else{
                $('.navbar').removeClass('bg-dark navbar-dark shadow').addClass('bg-transparent navbar-light')
                $('.text-color-change .nav-link').removeClass('text-white')
                $('.logo').removeClass('h-0')
            }
        }
        else{
            $('.navbar').removeClass('bg-transparent navbar-light').addClass('bg-dark navbar-dark')
            $('.text-color-change .nav-link').addClass('text-white')
        }
    });
});