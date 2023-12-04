// 4. Descarga o código HTML e fai que ao pulsar en calquera ligazón do elemento con id
// “contents”, se pida confirmación antes de redirixir ao novo enderezo. Se a persoa
// pulsa cancelar na confirmación, non se navegará á nova páxina.
// Utiliza un só manexador de eventos.
// Fíxate que as ligazóns poden ter etiquetas aniñadas “<a href=".."><i>...</i></a>”

let contentsElement = document.getElementById('contents');
// let links = contentsElement.getElementsByTagName("a");

contentsElement.addEventListener('click', (event) => {
  let targetElement = event.target;

  let enlaceProximo = targetElement.closest('a');

  if (enlaceProximo) {
    let confirmation = window.confirm(
      'COIDADO. Esto é un enlace, queres ir aí?'
    );

    if (!confirmation) {
      event.preventDefault();
      window.alert('Para casiña');
    }
  }
});
