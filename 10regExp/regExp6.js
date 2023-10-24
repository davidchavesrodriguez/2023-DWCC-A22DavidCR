// 6. Ás veces é útil eliminar as etiquetas HTML dun texto para
// evitar que se inclúa código mal intencionado nunha páxina web.
// Crea unha función á que se lle pase un texto e devolva o
// mesmo texto coas etiquetas HTML eliminadas.
function clearHtml(text) {
  const htmlTags = /<.*>/;
  console.log(text.replace(htmlTags, ""));
}
clearHtml(
  "Hola, <!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>Julio!"
);
