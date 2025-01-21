let completo: string = "";
function ahora(mensaje: string) {
  completo = `Este es mi mensaje` + mensaje;
  console.log(completo);
}

ahora("desde una funcion");
