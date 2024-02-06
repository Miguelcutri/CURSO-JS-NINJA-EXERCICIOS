/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

const isTruthy = (param) => (param ? true : false);

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(""));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(NaN));
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy("string"));
console.log(isTruthy(1));
console.log(isTruthy(2));
console.log(isTruthy(3));
console.log(isTruthy(true));
console.log(isTruthy("1"));
console.log(isTruthy("um"));
console.log(isTruthy("1"));
console.log(isTruthy({}));
console.log(isTruthy([]));
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const car = {
  brand: "Volkswagen",
  model: "Polo",
  plate: "AKB-2020",
  year: 2021,
  color: "Cinza chumbo",
  numberOfDoors: 4,
  seats: 5,
  numberOfPeoples: 0,
};
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function updateColor(color) {
  return (car.color = color);
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
function getColor() {
  return car.color;
}
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
function getModel() {
  return car.model;
}
/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
function getBrand() {
  return car.brand;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
function getBrandModel() {
  return `Esse carro é um ${car.brand} ${car.model}`;
}
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
function addPeoplesInCar(number) {
  const newNumberOfPeoples = car.numberOfPeoples + number;
  if (newNumberOfPeoples > car.seats) {
    const availableSeats = car.seats - car.numberOfPeoples;
    if (availableSeats === 0) {
      return "O carro já está lotado!";
    } else {
      return `Só cabem mais ${availableSeats} pessoas!`;
    }
  } else if (newNumberOfPeoples < 0) {
    return "Você não pode remover mais pessoas do que o total no carro!";
  } else {
    car.numberOfPeoples = newNumberOfPeoples;
    const peoplePeoples = car.numberOfPeoples === 1 ? "pessoa" : "pessoas";
    return `Já temos ${car.numberOfPeoples} ${peoplePeoples} no carro!`;
  }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/
console.log(car.color);
// Mude a cor do carro para vermelho.
updateColor("vermelho");
// E agora, qual a cor do carro
console.log(car.color);

// Mude a cor do carro para verde musgo.
updateColor("verde musgo");

// E agora, qual a cor do carro
console.log(car.color);

// Qual a marca e modelo do carro
console.log(getBrandModel());

// Adicione 2 pessoas no carro.
console.log(addPeoplesInCar(2));

// Adicione mais 4 pessoas no carro.
console.log(addPeoplesInCar(4));

// Faça o carro encher.
console.log(addPeoplesInCar(3));

// Tire 4 pessoas do carro.
console.log(addPeoplesInCar(-4));

// Adicione 10 pessoas no carro.
console.log(addPeoplesInCar(10));

// Quantas pessoas temos no carro
console.log(`Atualmente, temos ${car.numberOfPeoples} pessoa no carro!`);
