import { NomeValueObject } from "../../ValueObject/Nome.value-object";

export interface IPessoa{
    id:number;
    nome:NomeValueObject;
    email:string;
    imprimir():string;
}