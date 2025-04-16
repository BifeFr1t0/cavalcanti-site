function showMore(){
    const button = document.querySelector('.nav-image');
    const images = document.querySelectorAll('.more-image');

    button.classList.add("d-none")
    images.forEach(img=>img.classList.remove('d-none'))
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 100 );
}

function redirectWhatsapp(){
    const redirectWhatsapp = document.querySelector('.redirectWhatsapp')
    const redirectFacebook = document.querySelector('.bi-facebook')
    const redirectInstagram = document.querySelector('.bi-instagram')
    
        redirectWhatsapp.addEventListener("click", ()=>{
            redirectWhatsapp.classList.add("rotationAnimation")
            setTimeout(()=>{
            window.open("https://wa.me/5515991604132?text=Ol%C3%A1%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!")
            redirectWhatsapp.classList.remode("rotationAnimation")
            },1500) 
        })
        redirectFacebook.addEventListener("click", ()=>{
            redirectFacebook.classList.add("rotationMediaAnimation")
            redirectFacebook.style.color="rgb(41, 71, 204)"
            setTimeout(()=>{
            window.open("https://wa.me/5515991604132?text=Ol%C3%A1%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!")
            redirectFacebook.classList.remove("rotationMediaAnimation")
            redirectFacebook.style.color="rgb(197, 197, 252)"
            },1900) 
            
        })
        redirectInstagram.addEventListener("click", ()=>{
            redirectInstagram.classList.add("rotationMediaAnimation")
            redirectInstagram.style.color="rgb(170, 39, 137)"
            setTimeout(()=>{
            window.open("https://wa.me/5515991604132?text=Ol%C3%A1%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!")
            redirectInstagram.classList.remove("rotationMediaAnimation")
            redirectInstagram.style.color="rgb(197, 197, 252)"
            },1900) 
            
        })
    
}
redirectWhatsapp()

function startPage(){
    window.addEventListener('load',()=>{
            const loading = document.querySelector(".loading-page")
            const loaded = document.querySelector(".loaded-page")
    
            loading.classList.add('d-none')
            loaded.classList.remove('d-none')
    })
    document.addEventListener('scroll',()=>{
        const sobre = document.getElementById('sobre')
        const fotos = document.getElementById('fotos')

        sobre.classList.add("text-animate")
        fotos.classList.add("text-animate-2")
    })
}

startPage()