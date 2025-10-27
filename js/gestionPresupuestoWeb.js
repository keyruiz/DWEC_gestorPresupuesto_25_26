function mostrarDatoEnId(idElemento, valor) {
    const elemento = document.getElementById(idElemento);

    if (elemento) {
        elemento.textContent = valor;
    } else {
        console.warn(`No se encontró ningún elemento con id: ${idElemento}`);
    }
}

function mostrarGastoWeb(idElemento, gasto) {
    let contenedor = document.getElementById(idElemento);

    let divGasto = document.createElement("div");
    divGasto.classList.add("gasto");

    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("gasto-descripcion");
    divDescripcion.textContent = gasto.descripcion;
    divGasto.appendChild(divDescripcion);

    let divFecha = document.createElement("div");
    divFecha.classList.add("gasto-fecha");
    divFecha.textContent = gasto.fecha;
    divGasto.appendChild(divFecha);

    let divValor = document.createElement("div");
    divValor.classList.add("gasto-valor");
    divValor.textContent = gasto.valor;
    divGasto.appendChild(divValor);

    let divEtiquetas = document.createElement("div");
    divEtiquetas.classList.add("gasto-etiquetas");
    divEtiquetas.textContent = gasto.descripcion;
    divGasto.appendChild(divDescripcion);
    gasto.etiquetas.forEach(etiqueta => {
        let spanEtiqueta = document.createElement('span');
        spanEtiqueta.classList.add('gasto-etiquetas-etiqueta');
        spanEtiqueta.textContent = etiqueta;
        divEtiquetas.appendChild(spanEtiqueta);
      });
      divGasto.appendChild(divEtiquetas);
    contenedor.appendChild(divGasto);
}



function mostrarGastosAgrupadosWeb() {

}

export {
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}