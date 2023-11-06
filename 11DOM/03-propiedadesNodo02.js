// O número de ligazóns da páxina
console.log('A- O número de ligazóns da páxina');
const allLinks = document.getElementsByTagName('a');
console.log(allLinks.length);

// A dirección da penúltima ligazón
console.log('B- A dirección da penúltima ligazón');
const hrefSixthLink = allLinks[allLinks.length - 2].getAttribute('href');
console.log(hrefSixthLink);

// O número de ligazóns que apuntan a http://proba
console.log('C- O número de ligazóns que apuntan a http://proba');
const hrefProba = document.querySelectorAll('a[href="http://proba"]');
console.log(hrefProba.length);

// O número de ligazóns do terceiro parágrafo
console.log('D- O número de ligazóns do terceiro parágrafo');
const thirdParagrahp = document.getElementsByTagName('p')[2];
console.log(thirdParagrahp.getElementsByTagName('a').length);

// Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa
console.log(
  'E- Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa'
);
for (const link of hrefProba) {
  link.style.color = '#FF4500';
}
