import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import {criarImagem, editarImagem, mostrarImagens, deletarImagem, mostrarUmaImagem, downloadImagem} from './controllers/ImagemController.js';
import { criarUsuario, logarUsuario, mostrarUmUsuario, mostrarUsuario } from './controllers/UsuarioController.js';

const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.get ('/', (req,res)=>{
    res.send('API Funcionando!')
});

app.get('/public/:nomeImg', downloadImagem)
//CRUD Imagem
app.post ('/imagem', criarImagem);
app.get('/imagem',mostrarImagens);
app.put('/imagem/:id_imagem', mostrarUmaImagem)
app.put('/imagem/:id_imagem', editarImagem)
app.delete('/imagem/:id_imagem', deletarImagem)

//CRUD usuario
app.post ('/usuario', criarUsuario);
app.get ('/usuario', mostrarUsuario);
app.get ('/usuario/:id_usuario', mostrarUmUsuario);

//Efetuar login
app.post('/login', logarUsuario);



app.listen(porta, ()=>{
console.log (`API Rodando na porta ${porta}`)
});
