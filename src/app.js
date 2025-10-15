import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  let listaDominios = "";

  pronoun.map(p => {
    adj.map(a => {
      noun.map(n => {
        listaDominios += `<hr><p>${p}${a}${n}.com<hr></p>`;
      });
    });
  });

  const lista = document.querySelector('#dominios');
  lista.innerHTML = listaDominios;
};
