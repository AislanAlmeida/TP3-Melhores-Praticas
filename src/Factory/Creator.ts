import { Aluno } from "../models/domain/Aluno";
import { IPessoa } from "../models/interfaces/IPessoa";
import { NomeValueObject } from "../ValueObject/Nome.value-object";

abstract class Creator{
    public abstract factoryMethod(nome:string):IPessoa;
}

export class CreatorAluno extends Creator{
    public factoryMethod(nome:string): Aluno {
        return new Aluno(nome);
    }

    public criarAluno(nome:string, email:string, matricula:string):Aluno | undefined{
        let aluno = this.factoryMethod(nome);
        console.log(nome,aluno);
        if(nome !== '' && email !== '' && matricula !== ''){

            aluno.nome = NomeValueObject.create(nome);
            aluno.email = email;
            aluno.matricula = matricula;

            return aluno;
        }
    }

}