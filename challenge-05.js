/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(paramter) {
  return paramter;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnIndexValue(arrayValues, number) {
  return arrayValues[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const arrFiveValues = [5, "quatro", true, { dois: "2" }, null];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnIndexValue(arrFiveValues, 0));
console.log(returnIndexValue(arrFiveValues, 1));
console.log(returnIndexValue(arrFiveValues, 2));
console.log(returnIndexValue(arrFiveValues, 3));
console.log(returnIndexValue(arrFiveValues, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
  var bookObject = {
    billyGrahamAutobiografia: {
      name: "Autobiografia de Billy Graham",
      pageNumbers: 712,
      author: "Billy Graham",
      publishCompany: "United Press",
    },
    mereChristianity: {
      name: "Mero Cristianismo",
      pageNumbers: 256,
      author: "C.S. Lewis",
      publishCompany: "Geoffrey Bles",
    },
    inTheGripOfGrace: {
      name: "Aperto da graça",
      pageNumbers: 272,
      author: "Max Lucado",
      publishCompany: "Word Publishing",
    },
  };
  // if (name === "Autobiografia de Billy Graham") {
  //   return bookObject.billyGrahamAutobiografia;
  // } else if (name === "Mero Cristianismo") {
  //   return bookObject.mereChristianity;
  // } else if (name === "Aperto da graça") {
  //   return bookObject.inTheGripOfGrace;
  // } else {
  //   return bookObject;
  // }
  switch (name) {
    case "Autobiografia de Billy Graham":
      return bookObject.billyGrahamAutobiografia;

    case "Mero Cristianismo":
      return bookObject.mereChristianity;

    case "Aperto da graça":
      return bookObject.inTheGripOfGrace;

    default:
      return bookObject;
  }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  `O livro ${book("Autobiografia de Billy Graham").name} tem ${
    book("Autobiografia de Billy Graham").pageNumbers
  } páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  `O autor do livro ${book("Autobiografia de Billy Graham").name} é ${
    book("Autobiografia de Billy Graham").author
  }.`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro ${
    book("Autobiografia de Billy Graham").name
  } foi publicado pela editora ${
    book("Autobiografia de Billy Graham").publishCompany
  }.`
);
