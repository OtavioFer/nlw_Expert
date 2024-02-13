const perguntas = [
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: ["variable", "var", "let"],
    correta: 2,
  },
  {
    pergunta:
      "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: ["print()", "log()", "console.log()"],
    correta: 2,
  },
  {
    pergunta:
      "Qual operador é usado para comparar igualdade estrita (valor e tipo)?",
    respostas: ["==", "===", "="],
    correta: 1,
  },
  {
    pergunta:
      "Qual método é usado para adicionar um elemento ao final de um array?",
    respostas: ["push()", "append()", "addToEnd()"],
    correta: 0,
  },
  {
    pergunta:
      "Qual função é usada para converter uma string em um número em JavaScript?",
    respostas: ["parseString()", "convertToInt()", "parseInt()"],
    correta: 2,
  },
  {
    pergunta:
      "Qual operador é usado para acessar uma propriedade de um objeto?",
    respostas: [".", "->", ":"],
    correta: 0,
  },
  {
    pergunta:
      "Qual estrutura de controle é usada para tomar decisões em JavaScript?",
    respostas: ["for", "if", "while"],
    correta: 1,
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array?",
    respostas: ["pop()", "removeLast()", "deleteLast()"],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a sintaxe correta para comentar uma única linha em JavaScript?",
    respostas: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual função é usada para obter o comprimento de uma string em JavaScript?",
    respostas: ["len()", "length()", "size()"],
    correta: 1,
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
