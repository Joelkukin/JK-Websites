import barba from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js';
import { gsap } from 'https://unpkg.com/@barba/core';
/* Trancision de la pagina */
function PageTransition() {
    let tl= gsap.timeline();

    tl.to( "transition", {
        duration: 1,
        scaleY:1,
        transformOrigin: "bottom",
        ease: "power4.inOut"
    })

    tl.to( ".transition", {
        duration: 1,
        scaleY:0,
        transformOrigin: "top",
        ease: "power4.inOut",
        delay: 0.2
    })
}
/* animación del contenido */
function contentAnimation(){
    let tl= gsap.timeline();

    tl.to( "h1", {
        top: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 0.75
    })
}

/* Timer */
function delay(n){
    n = n || 0;
    return new Promise((done) => {
        setTimeout(() => {
            done(); 
        },n);
    })
}

barba.init({
    sync:true,
    transitions: [{
        
        name: 'fade',
        
        async leave(data) {
            // Transición de salida
            const done = this.async();
            PageTransition()
            await delay(1000)
            done
        },
        async enter(data) {
            // Transición de entrada
            contentAnimation();
            
        },

        async once(data){
            contentAnimation();
        }
    }]
});
