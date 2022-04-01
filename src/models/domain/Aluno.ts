import { NomeValueObject } from "../../ValueObject/Nome.value-object";
import { IPessoa } from "../interfaces/IPessoa";

export class Aluno implements IPessoa{
    id:number=0;
    nome:NomeValueObject;
    email:string='';
    matricula:string='';
    
    constructor(nome: string){
        this.nome = NomeValueObject.create(nome);
    }   

    imprimir(): string {
        return `\n - Nome: ${this.nome} \n - Email: ${this.email} \n - Matricula: ${this.matricula}`;
    }
    
    
}