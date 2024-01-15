let catPetition = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"
  );
  
  catPetition
    .then((response) => {
      return response.json();
    })
    .then((gatas) => {
      const nombresGatas = gatas.map((gata) => gata.name);
  
      let nomeGatas = "Os nomes das gatas son ";
      nomeGatas +=
        nombresGatas.slice(0, -1).join(", ") + " e " + nombresGatas.slice(-1);
  
      let nomes = document.createElement("p");
      nomes.innerText = nomeGatas;
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(nomes);
  
      let totalGatiños = 0;
      let femias = 0;
      let machos = 0;
  
      gatas.forEach((gata) => {
        totalGatiños += gata.kittens.length;
        gata.kittens.forEach((gatiño) => {
          if (gatiño.gender === "f") {
            femias++;
          } else if (gatiño.gender === "m") {
            machos++;
          }
        });
      });
  
      let totalGatiñosElemento= document.createElement("p");
      totalGatiñosElemento.innerText= `Hai ${totalGatiños} gatiños: ${femias} femias e ${machos} machos.`;
      body.appendChild(totalGatiñosElemento);

      console.log(`Hai ${totalGatiños} gatiños: ${femias} femias e ${machos} machos.`);



      
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  

    