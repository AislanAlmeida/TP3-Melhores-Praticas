import { Request, Response, Router } from "express";
import AlunoController from "../controllers/AlunoController";
const router = Router();

router.get('/',AlunoController.obterAlunos);

router.get('/cadastrar',(req:Request,res:Response) =>{
    res.render('cadastroAluno');
})
router.get('/:id',AlunoController.obterAluno);

router.post('/',AlunoController.criarAluno);

router.post('/:id',AlunoController.alterarAluno);

router.delete('/:id',AlunoController.excluirAluno);

export const r_aluno:Router = router;