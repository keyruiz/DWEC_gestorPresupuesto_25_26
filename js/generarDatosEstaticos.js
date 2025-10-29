import * as gestionWeb from "./gestionPresupuestoWeb.js"
import * as gestion from "./gestionPresupuesto.js"

gestion.actualizarPresupuesto(1500);
let presupuestoTexto = gestion.mostrarPresupuesto();
gestionWeb.mostrarDatoEnId("presupuesto", presupuestoTexto);