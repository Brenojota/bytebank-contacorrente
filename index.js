import { Cliente } from "./Cliente.js";

import { ContaCorrente } from "./ContaCorrente.js";
let numeroDeContas = 0;
const cliente1 = new Cliente("Juan",123456488);
const contaCorrenteJuan = new ContaCorrente(1001,102030, cliente1);

const cliente2 = new Cliente("Alice",145236978);
const contaCorrenteAlice = new ContaCorrente(1001,708090, cliente2);

console.log(ContaCorrente.numeroDeContas);
