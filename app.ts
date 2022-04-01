import express from 'express';
import path from 'path';
import { r_aluno } from './src/routes/r_aluno';

const PORT = 8082;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views',path.join(__dirname,'./src/views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use('/alunos',r_aluno);

app.get('/',(req:express.Request,res:express.Response) =>{
    res.render('index',{error:false});
})

app.listen(PORT,() =>{
    console.log(`Servico executando em http://localhost:${PORT}`)
})