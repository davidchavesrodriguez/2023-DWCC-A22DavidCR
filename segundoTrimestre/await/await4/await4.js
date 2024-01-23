// Descarga o ficheiro municipiosCoruna.json. Coa información do
// ficheiro descargado crea unha páxina web onde se mostre nunha táboa
// a información dos municipios da Coruña (Nome, número de habitantes,
// superficie e capital).
// Engade á túa páxina web unha caixa de texto de tal forma que cada vez
// que se escriba unha letra se mostren na táboa só os municipios que
// teñan un nome que comece polo texto escrito.
// Configura tamén a táboa para que ao pulsar sobre unha fila se
// mostre toda a información dese municipio que hai no ficheiro JSON.

let body = document.getElementsByTagName("body")[0];
async function printTable() {
  const response = await fetch("./municipiosCoruna.json");
  const data = await response.json();

  let table = document.createElement("table");
  body.appendChild(table);

  let theaders = document.createElement("tr");
  table.appendChild(theaders);

  let theadNome = document.createElement("th");
  theadNome.innerText = "Nome";
  theaders.appendChild(theadNome);

  let theadHabitantes = document.createElement("th");
  theadHabitantes.innerText = "Habitantes";
  theaders.appendChild(theadHabitantes);

  let theadSuperficie = document.createElement("th");
  theadSuperficie.innerText = "Superficie";
  theaders.appendChild(theadSuperficie);

  let theadHCapital = document.createElement("th");
  theadHCapital.innerText = "Capital";
  theaders.appendChild(theadHCapital);

  data.forEach((municipio) => {
    let trData = document.createElement("tr");
    table.appendChild(trData);

    //show info
    trData.addEventListener("click", (event) => {
      let trInfo = document.createElement("tr");
      trInfo.classList.add("trInfo");
      trInfo.addEventListener("click", (event) => {
        event.target.closest("TR").classList.add("hidden");
      });

      let tdInfo1 = document.createElement("td");
      let tdInfo2 = document.createElement("td");
      let tdInfo3 = document.createElement("td");
      let tdInfo4 = document.createElement("td");

      tdInfo1.innerText = `Comunidad autónoma: ${municipio["Comunidad Autónoma"]}
      Código de CA: ${municipio["Código de CA"]}
      Código Provincia: ${municipio["Codigo Provincia"]}`;
      trInfo.appendChild(tdInfo1);

      tdInfo2.innerText = `Provincia: ${municipio["Provincia"]}
      Número de inscripción: ${municipio["Número de inscripción"]}
      Codigo Municipio: ${municipio["Codigo Municipio"]}`;
      trInfo.appendChild(tdInfo2);

      tdInfo3.innerText = `Denominación: ${municipio["Denominación"]}
      Fecha de inscripción: ${municipio["Fecha de inscripción"]}
      Capitalidad: ${municipio["Capitalidad"]}`;
      trInfo.appendChild(tdInfo3);

      tdInfo4.innerText = `Habitantes: ${municipio["Habitantes"]}
      Superficie: ${municipio["Superficie"]}
      Densidad: ${municipio["Densidad"]}`;
      trInfo.appendChild(tdInfo4);

      event.target.closest("TR").after(trInfo);
    });

    let tdNome = document.createElement("td");
    tdNome.innerText = municipio["Denominación"];
    trData.appendChild(tdNome);

    let tdHabitantes = document.createElement("td");
    tdHabitantes.innerText = municipio["Habitantes"];
    trData.appendChild(tdHabitantes);

    let tdSuperficie = document.createElement("td");
    tdSuperficie.innerText = municipio["Superficie"];
    trData.appendChild(tdSuperficie);

    let tdCapital = document.createElement("td");
    tdCapital.innerText = municipio["Capitalidad"];
    trData.appendChild(tdCapital);
  });
}

printTable();
