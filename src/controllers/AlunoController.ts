import { Request, Response } from "express";
import { CreatorAluno } from "../Factory/Creator";
import { Aluno } from "../models/domain/Aluno";
import AlunoRepository from "../Repository/AlunoRepository";
const creatorAluno = new CreatorAluno();
class AlunoController{
    criarAluno(req:Request,res:Response){
        let {nome,email,matricula} = req.body;

        try {
            let aluno = creatorAluno.criarAluno(nome,email,matricula);
    
            if(aluno === undefined){
                res.sendStatus(400);
            }
            
            if(aluno){
                let alunoDB = AlunoRepository.salvar(aluno);
                alunoDB ? res.status(201).render('detalhes',{
                    id: alunoDB.id,
                    nome: alunoDB.nome.props.value,
                    email: alunoDB.email,
                    matricula: alunoDB.matricula,
                    error: undefined
                }) : res.sendStatus(500);
            }
        } catch (error) {
            res.render('index',{error});
        }
        

        
    }
    obterAlunos(req:Request,res:Response){
        let alunos = AlunoRepository.obterTodos();
        res.status(200).render('listaAlunos',{alunos:alunos});
    }
    excluirAluno(req:Request,res:Response){
        let alunoId = req.params.id;
        AlunoRepository.excluir(+alunoId);
        res.status(200);
    }
    obterAluno(req:Request,res:Response){
        let alunoId = req.params.id;
        let alunoDB = AlunoRepository.obterPorId(+alunoId);
        alunoDB ? res.status(200).render('updateAluno',{
            id: alunoDB.id,
            nome: alunoDB.nome.props.value,
            email: alunoDB.email,
            matricula: alunoDB.matricula,
            error: undefined
        }) : res.render('index',{error:'Este aluno não existe'});;
    }
    alterarAluno(req:Request,res:Response){
        let alunoId = req.params.id;
        let {nome,email,matricula} = req.body;
        let aluno = new Aluno(nome);
        aluno.id = +alunoId;
        aluno.email = email;
        aluno.matricula = matricula;
        if(aluno){
            let alunoAlterado = AlunoRepository.alterar(aluno);
            let alunos = AlunoRepository.obterTodos();
            res.status(200).render('listaAlunos',{alunos:alunos});
        }else{
            res.sendStatus(400);
        }
    }
}
export default new AlunoController();