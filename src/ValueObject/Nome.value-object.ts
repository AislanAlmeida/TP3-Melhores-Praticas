import { ValueObject } from "./ValueObject";


export interface NomeValueObjectProps{
    value:string;
}

/**
 * Cria nome como um value object
 */
export class NomeValueObject extends ValueObject<NomeValueObjectProps>{
    private constructor(props:NomeValueObjectProps){
        super(props);
    }

    public static create(nome:string){
        const isTamanhoNomeValido = nome.length >= 3 && nome.length <= 20;
        if(!isTamanhoNomeValido){
            throw new Error("'Value Object Nome: Tamanho de Nome inválido'");
            
        }
        return new NomeValueObject({value:nome});
    }
}