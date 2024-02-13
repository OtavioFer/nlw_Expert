const perguntas = [
  {
    pergunta:
      "Qual função é usada para converter um número em uma string em JavaScript?",
    respostas: ["stringify()", "toString()", "toText()"],
    correta: 1,
  },
  {
    pergunta:
      "Qual método é usado para dividir uma string em um array de substrings?",
    respostas: ["split()", "slice()", "divide()"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função de um operador de atribuição?",
    respostas: [
      "Comparar valores",
      "Atribuir um valor a uma variável",
      "Executar uma função",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o operador de incremento em JavaScript?",
    respostas: ["++", "+=", "--"],
    correta: 0,
  },
  {
    pergunta:
      "Qual método é usado para juntar os elementos de um array em uma string?",
    respostas: ["concat()", "join()", "merge()"],
    correta: 1,
  },
  {
    pergunta:
      "Qual função é usada para arredondar um número para o inteiro mais próximo?",
    respostas: ["round()", "ceil()", "floor()"],
    correta: 0,
  },
  {
    pergunta:
      "Qual método é usado para remover o primeiro elemento de um array?",
    respostas: ["shift()", "removeFirst()", "deleteFirst()"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do operador lógico '||' em JavaScript?",
    respostas: [
      "Operador de adição",
      "Operador de multiplicação",
      "Operador de OU lógico",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual método é usado para encontrar a posição de um elemento em um array?",
    respostas: ["indexOf()", "positionOf()", "findPosition()"],
    correta: 0,
  },
  {
    pergunta: "Qual é o resultado da expressão '10' + 5 em JavaScript?",
    respostas: ["'105'", "15", "'10'5"],
    correta: 0,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// laço de repetção;
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true) // Para cada repetção a funcção "cloneNode" clona o item
  quizItem.querySelector("h3").textContent = item.pergunta // Modifica o h3

  // inputs;
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }

  quizItem.querySelector("dl dt").remove()

  // coloca a pergunta na tela;
  quiz.appendChild(quizItem) // -> adiciona um filho
}
