const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um estilo de folha de estilo",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Comparar valores",
        "Retornar o tipo de uma variável",
        "Executar uma repetição",
      ],
      correta: 1,
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variável myVar;",
        "declare myVar;",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um objeto",
        "Um bloco de código reutilizável",
      ],
      correta: 2,
    },
    {
      pergunta: "Como se faz um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "# Este é um comentário",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual método é usado para converter uma string em número?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "convertToNumber()",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Uma linguagem de programação",
        "A representação da estrutura de uma página web",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Nenhuma diferença",
        "'==' compara apenas o valor, '===' compara valor e tipo",
        "'===' compara apenas o valor, '==' compara valor e tipo",
      ],
      correta: 1,
    },
    {
      pergunta: "Como você declara um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 10; i++)",
        "loop (i = 0; i < 10; i++)",
        "repeat (i = 0; i < 10; i++)",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o evento 'onclick' em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Uma função que é executada quando um elemento é clicado",
        "Um método de manipulação de strings",
      ],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  //no nome da variável, não se utiliza espaço, ao invés disto se coloca a primeira letra da próxima palavra em maiúscula
  const mostrarTotal = document.querySelector('#acertos span')
  //irá selecionar o "filho" <span> dentro da <div id="#acertos">
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        // toda vez que clicar em uma 'input' irá executar o que for determinado
        const estaCorreta = event.target.value == item.correta
        //faz uma comparação da input (resposta) selecionada com o valor correta que está guardado lá na [{}] e traz uma resposta pelo método booleano ('true', 'false'); se ao invés de == utilizasse ===, o resultado sempre seria 'false', pois estaria comparando estritamente um número com uma resposta em letras, utilizando ==, o código entende que o número se refere à posição do item dentro da array
        corretas.delete(item)
        if(estaCorreta) {
          // if = se -> estabelece uma condição
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      
  
      quizItem.querySelector('dl').appendChild(dt)
      //precisa ser sempre a última linha
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  