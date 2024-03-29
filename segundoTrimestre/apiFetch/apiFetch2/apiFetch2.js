let heroesPetition= fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    heroesPetition
    .then((response) => 
      response.json())
    .then((response) => {
        let squadName = response.squadName;
        let homeTown = response.homeTown;
        let formedYear = response.formed;
        let header = document.getElementsByTagName("header")[0];
        let headerHeading = document.createElement("h1");
        headerHeading.innerText = squadName;
        let headerParagraph = document.createElement("p");
        headerParagraph.innerText = `Home Town: ${homeTown} // Formed: ${formedYear} `;
        header.appendChild(headerHeading);
        header.appendChild(headerParagraph);
      
        let members= response.members;
        let section= document.getElementsByTagName("section")[0];
        members.forEach(member => {
          let articleMember= document.createElement("article");
          //(Super)personal data
          let memberName= document.createElement("h2");
          memberName.innerText= member.name;
          articleMember.appendChild(memberName);
      
          let memberSecretName= document.createElement("p");
          memberSecretName.innerText= `Secret identity: ${member.secretIdentity}`;
          articleMember.appendChild(memberSecretName);
      
          let memberAge= document.createElement("p");
          memberAge.innerText= `Age: ${member.age}`;
          articleMember.appendChild(memberAge);
      
          let superpowersParagraph= document.createElement("p");
          superpowersParagraph.innerText= "Superpowers:";
          articleMember.appendChild(superpowersParagraph);
          
      
          //Superpowers
          let powerList= document.createElement("ul");
          member.powers.forEach(power=> {
            let memberPower= document.createElement("li");
            memberPower.innerText= power
            powerList.appendChild(memberPower);
          })
      
          articleMember.appendChild(powerList);
      
          section.appendChild(articleMember);
      
        });
        
      
    });