const perguntas = [
  {
    pergunta: "Qual profeta foi engolido por um grande peixe?",
    respostas: ["Jonas", "Ezequiel", "Isaías"],
    correta: 0,
  },
  {
    pergunta: "Quem foi o primeiro rei de Israel?",
    respostas: ["Davi", "Salomão", "Saul"],
    correta: 2,
  },
  {
    pergunta: "Quem era a esposa de Adão?",
    respostas: ["Maria", "Eva", "Rute"],
    correta: 1,
  },
  {
    pergunta:
      "Quem foi o homem que construiu uma arca para salvar sua família e os animais do dilúvio?",
    respostas: ["Noé", "Abraão", "Moisés"],
    correta: 0,
  },
  {
    pergunta:
      "Quem era o filho de Davi que se rebelou contra ele e tentou tomar o trono?",
    respostas: ["Absalão", "Salomão", "Adonias"],
    correta: 0,
  },
  {
    pergunta: "Qual profeta foi alimentado por corvos durante uma grande seca?",
    respostas: ["Eliseu", "Elias", "Jeremias"],
    correta: 1,
  },
  {
    pergunta: "Quem foi o rei que construiu o Templo de Jerusalém?",
    respostas: ["Salomão", "Davi", "Josué"],
    correta: 0,
  },
  {
    pergunta:
      "Quem era o irmão mais velho de Maria e Marta, que Jesus ressuscitou dos mortos?",
    respostas: ["Tiago", "Lázaro", "Simão"],
    correta: 1,
  },
  {
    pergunta:
      "Quem foi o profeta que desafiou os profetas de Baal no monte Carmelo?",
    respostas: ["Eliseu", "Ezequiel", "Elias"],
    correta: 2,
  },
  {
    pergunta:
      "Quem foi a mulher que se tornou esposa de José, após ter sido vendida como escrava pelos seus irmãos?",
    respostas: ["Raquel", "Tamar", "Azenate"],
    correta: 2,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

// laço de repetção;
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta;

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    dt.querySelector('span').textContent = resposta;

    quizItem.querySelector('dl').appendChild(dt);
  }

  quizItem.querySelector('dl dt').remove();


  // coloca a pergunta na tela;
  quiz.appendChild(quizItem)
}
