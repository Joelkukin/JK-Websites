function extraerContenido(ruta) {
    let contenidoTxt;
    fetch(ruta)
    .then(response => response.text())
    .then(data => {
        let contenidoTxt = data;
        console.log(contenidoTxt);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    return  contenidoTxt;
}

export function render(selector,ruta) {
    let target = document.querySelector(selector);
    let componente = extraerContenido(ruta);
    target.innerHTML = componente;
}
