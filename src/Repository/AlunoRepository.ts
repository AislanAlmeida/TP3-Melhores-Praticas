import { Aluno } from "../models/domain/Aluno";
import { IRepository } from "./IRepository";

/**
 * Padrão Repository
 */
class AlunoRepository implements IRepository<Aluno>{
    
    private listaAlunos: Array<Aluno> = new Array<Aluno>();
    
    salvar(item: Aluno): Aluno | undefined {
        item.id = this.listaAlunos.length + 1;
        this.listaAlunos.push(item);
        return item;
    }
    
    obterTodos(): Aluno[] {
        return this.listaAlunos;
    }
    obterPorId(id: number): Aluno | undefined {
        return this.listaAlunos.find(a => a.id === id);
    }
    alterar(item: Aluno): Aluno {
        let aluno = this.obterPorId(item.id);
        if(aluno){
            aluno.email = item.email;
            aluno.nome = item.nome;
            aluno.matricula = item.matricula;
            return aluno;
        }
        return item;
    }
    excluir(id: number): void {
        let index = this.listaAlunos.findIndex(a => a.id == id);
        if(index !== -1){
            this.listaAlunos.splice(index,1);
        }
    }

}

export default new AlunoRepository();