// Descarga o ficheiro municipiosCoruna.json. Coa información do
// ficheiro descargado crea unha páxina web onde se mostre nunha táboa
// a información dos municipios da Coruña (Nome, número de habitantes,
// superficie e capital).
// Engade á túa páxina web unha caixa de texto de tal forma que cada vez
// que se escriba unha letra se mostren na táboa só os municipios que
// teñan un nome que comece polo texto escrito.
// Configura tamén a táboa para que ao pulsar sobre unha fila se
// mostre toda a información dese municipio que hai no ficheiro JSON.

let body= document.getElementsByTagName("body")[0];
async function printTable() {
  const response = await fetch("./municipiosCoruna.json");
  const data= await response.json();

  let table= document.createElement("table");
  body.appendChild(table);

  let theaders= document.createElement("tr");
  table.appendChild(theaders);

  let theadNome= document.createElement("th");
  theadNome.innerText= "Nome";
  theaders.appendChild(theadNome);


  let theadHabitantes= document.createElement("th");
  theadHabitantes.innerText= "Habitantes";
  theaders.appendChild(theadHabitantes);

  let theadSuperficie= document.createElement("th");
  theadSuperficie.innerText= "Superficie";
  theaders.appendChild(theadSuperficie);

  let theadHCapital= document.createElement("th");
  theadHCapital.innerText= "Capital";
  theaders.appendChild(theadHCapital);

  data.forEach(municipio => {
    let trData= document.createElement("tr");

    //show info
    trData.addEventListener("click", ()=>{
        municipio.forEach(data => {
            alert(data)
        });
    })
    table.appendChild(trData);

    let tdNome= document.createElement("td");
    tdNome.innerText= municipio["Denominación"];
    trData.appendChild(tdNome);

    let tdHabitantes= document.createElement("td");
    tdHabitantes.innerText= municipio["Habitantes"];
    trData.appendChild(tdHabitantes);

    let tdSuperficie= document.createElement("td");
    tdSuperficie.innerText=municipio["Superficie"];
    trData.appendChild(tdSuperficie);

    let tdCapital= document.createElement("td");
    tdCapital.innerText=municipio["Capitalidad"];
    trData.appendChild(tdCapital);
  });

  
  
}

printTable();
