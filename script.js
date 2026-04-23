class Calculadora {
  constructor(num_1, num_2) {
    this.num_1 = num_1;
    this.num_2 = num_2;
  }

  somar() {
    return this.num_1 + this.num_2;
  }

  subtrair() {
    return this.num_1 - this.num_2;
  }

  multiplicar() {
    return this.num_1 * this.num_2;
  }

  dividir() {
    if (this.num_2 === 0) {
      console.log("Erro: Divisao por zero!");
      return 0;
    }
    return this.num_1 * (this.num_2 ** -1); 
  }
}
class ConversorTemp {
  constructor(grau) {
    this.grau = grau;
  }

  farenheit() {
    return (this.grau * 1.8) + 32;
  }

  kelvin() {
    return this.grau + 273.15;
  }
}
class SimuladoFinanceiro {
  constructor(salario, desconto, bonus) {
    this.salario = salario;
    this.desconto = desconto;
    this.bonus = bonus;
  }

  calcularTotal() {
    return (this.salario + this.bonus) - this.desconto;
  }
}

const minhaCalc = new Calculadora(10, 5);
console.log("==== CALCULADORA ====");
console.log("Somar: " + minhaCalc.somar());
console.log("Subtrair: " + minhaCalc.subtrair());
console.log("Multiplicar: " + minhaCalc.multiplicar());
console.log("Dividir: " + minhaCalc.dividir());

const meuConversor = new ConversorTemp(25);
console.log("==== CONVERSOR TEMP ====");
console.log("Farenheit: " + meuConversor.farenheit());
console.log("Kelvin: " + meuConversor.kelvin());

const meuFinanceiro = new SimuladoFinanceiro(3000, 200, 500);
console.log("==== FINANCEIRO ====");
console.log("Total Liquido: R$ " + meuFinanceiro.calcularTotal());