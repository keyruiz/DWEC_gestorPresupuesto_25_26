function mostrarDatoEnId(idElemento, valor) {
    const elemento = document.getElementById(idElemento);

    if (elemento) {
        elemento.textContent = valor;
    } else {
        console.warn(`No se encontró ningún elemento con id: ${idElemento}`);
    }
}

function mostrarGastoWeb() {

}

function mostrarGastosAgrupadosWeb() {

}

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}