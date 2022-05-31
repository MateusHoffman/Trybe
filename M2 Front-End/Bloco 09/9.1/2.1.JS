const despesas = [
  {gym: 99},
  {ifood: 200},
  {phone: 60},
  {internet: 100}
];

const renda = 1000;

const somaDespesas = (despesas) => {
const custoItem = despesas.map((eDespesas) => Object.values(eDespesas)); /// [ [ 99 ], [ 200 ], [ 60 ], [ 100 ] ]

  const despesaTotal = custoItem.reduce((acc, curr) => {
    // console.log(acc, '-- += --', curr[0]);
    return acc += curr[0]
  }, 0);
  return despesaTotal;
};

const despesaMensal = (renda, despesas, callback) => {

  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};


// acc é a sigla para accumulator (acumulador)
// curr é a sigla para current (valor atual)

despesaMensal(renda, despesas, somaDespesas);