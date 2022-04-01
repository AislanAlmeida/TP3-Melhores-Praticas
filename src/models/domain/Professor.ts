import { NomeValueObject } from "../../ValueObject/Nome.value-object";
import { IPessoa } from "../interfaces/IPessoa";

export class Professor implements IPessoa{
    id: number = 0;
    nome: NomeValueObject;
    email: string = '';
    CPF: string = '';
    constructor(nome: string){
        this.nome = NomeValueObject.create(nome);
    }  
    imprimir(): string {
        return `\n - Nome: ${this.nome} \n - Email: ${this.email} \n - CPF: ${this.CPF}`;
    }

}