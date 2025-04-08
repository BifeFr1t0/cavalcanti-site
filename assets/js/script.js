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
    const redirect = document.querySelector('.redirect')
    
    
        redirect.addEventListener("click", ()=>{
            redirect.classList.add("rotationAnimation")
            setTimeout(()=>{
            window.location.assign("https://wa.me/5515991604132?text=Ol%C3%A1%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!")
            },1500) 
        })
    
}
redirectWhatsapp()

function startPage(){
    document.addEventListener('scroll',()=>{
        const sobre = document.getElementById('sobre')
        const fotos = document.getElementById('fotos')

        sobre.classList.add("text-animate")
        fotos.classList.add("text-animate-2")
    })
}

startPage()