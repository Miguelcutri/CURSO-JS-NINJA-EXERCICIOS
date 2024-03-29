// Declarar uma variável qualquer, que receba um objeto vazio.
const emptyObject = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
const people = {
  name: "Miguel",
  lastName: "Cutri",
  gender: "Masculino",
  age: 24,
  height: 1.85,
  weight: 87,
  walking: false,
  walkedHowManyMeters: 0,
};
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
people.haveBirthday = function () {
  people.age++;
};
/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
people.walk = function (meters) {
  people.walking = true;
  people.walkedHowManyMeters += meters;
};
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
people.stop = function () {
  people.walking = false;
};
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
people.completeName = function () {
  return `Olá! Meu nome é ${people.name} ${people.lastName}`;
};
/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
people.returnAge = function () {
  return `Olá! eu tenho ${people.age} anos`;
};
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
people.returnWeight = function () {
  return `Eu peso ${people.weight}Kg`;
};
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
people.returnHeight = function () {
  return `Minha altura é ${people.height}m`;
};
/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.completeName());
//Olá! Meu nome é Miguel Cutri

/*
Qual a idade da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.returnAge());
//Olá! eu tenho 24 anos

/*
Qual o peso da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.returnWeight());
//Eu peso 87Kg

/*
Qual a altura da pessoa (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(people.returnHeight());
//Minha altura é 1.85m

/*
Faça a `pessoa` fazer 3 aniversários.
*/
people.haveBirthday();
people.haveBirthday();
people.haveBirthday();

/*
Quantos anos a `pessoa` tem agora (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(people.returnAge());

// 27

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
people.walk(5);
people.walk(10);
people.walk(15);

/*
A pessoa ainda está andando (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
  */
console.log(people.walking);
// Sim

/*
Se a pessoa ainda está andando, faça-a parar.
*/
people.stop();
/*
E agora: a pessoa ainda está andando (Use uma instrução para responder e
  comentários inline ao lado da instrução para mostrar a resposta retornada)
  */
console.log(people.walking);
// Não

/*
Quantos metros a pessoa andou (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(people.walkedHowManyMeters);
// 30 metros

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

// Agora, apresente-se ;)

people.presentation = function () {
  if (people.gender === "Masculino") {
    var masculinoOuFemino = "o";
  } else {
    var masculinoOuFemino = "a";
  }

  if (people.age === 1) {
    var idadeMenorQueUm = "ano";
  } else {
    var idadeMenorQueUm = "anos";
  }

  if (people.walkedHowManyMeters === 1) {
    var singularOuPlural = "metro";
  } else {
    var singularOuPlural = "metros";
  }
  people.age = 24; // (Só para ajustar para idade correta novamente)
  return (
    `Olá, eu sou ${masculinoOuFemino} ${people.name} ${people.lastName}, tenho ${people.age} ${idadeMenorQueUm},` +
    ` ${people.height}m, meu peso é ${people.weight}Kg e, só hoje, eu já caminhei ${people.walkedHowManyMeters} ${singularOuPlural}!`
  );
};
console.log(people.presentation());
