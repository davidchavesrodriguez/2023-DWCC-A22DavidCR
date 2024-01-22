// Reescribe o seguinte código usando async/await:
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }
// loadJson("https://no-such-user.json").catch(console.log);

async function loadJson(url) {
    try {
      const response = await fetch(url);
  
      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  loadJson('https://no-such-user.json');
  
