// GitHub ofrece unha API para interactuar cos repositirios permitindo
// crealos e xestionalos. A API tamén permite consultar información pública.
// Pode mirarse a documentación para máis información.
// De forma resumida, para utilizar a API de GitHub haberá que realizar
// os seguintes pasos:
// ● Crear un token de acceso clásico.
// ● Importar octokit no script (importarase dende o CDN esm.sh):
import { Octokit, App } from "https://esm.sh/octokit";

// GitHub recomenda a utilización de Octokit, pois ofrece utilidades
// de manexo da API facéndoa máis fácil de usar.
// ● Crear unha instancia de Octokit co token creado no primeiro paso:
const octokit = new Octokit({
  auth: "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",
});

// ● Usar octokit.request para facer as peticións. Por exemplo,
// para obter información do usuario autenticado usarase o seguinte código:
const res = await octokit.request("GET /user", {
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

// Crea unha función async chamada obterUsuarios(arrayNomes) que reciba
// como parámetro un array de logins de GitHub e mostre por consola
// a información de GitHub sobre eses usuarios. Documentación de
// como obter información dun usuario.
// Assuming octokit is already defined as you did in your original code

async function obterUsuarios(arrayNomes) {
  for (const githubUser of arrayNomes) {
    try {
      const userInfo = await octokit.request(`GET /users/${githubUser}`, {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      console.log(userInfo.data);
    } catch (error) {
      console.error(
        `Error from ${githubUser}: ${error.message}`
      );
    }
  }
}

const githubUsernames = ["user1", "user2", "user3", "user4"];
obterUsuarios(githubUsernames);
