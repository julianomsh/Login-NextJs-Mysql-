import {React, useState} from 'react'
import Link from "next/link"
import NavBar from '../components/NavBar' 


export default function Cadastro() {


const [ cadastroUsername, setCadastroUsername] = useState('');
const [ cadastroemail, setCadastroemail] = useState('');
const [ cadastroPassword, setCadastroPassword] = useState('');


  return (
    <div>
           <NavBar></NavBar>
       <h1>Cadastro</h1>
       <form>
       <input type='text' name='username' placeholder='nome' onChange={e => setCadastroUsername(e.target.value)}></input>
       <input type='email' name='email' placeholder='E-mail' onChange={e => setCadastroemail(e.target.value)}></input>
       <input type='password' name='password' placeholder='Senha' onChange={e => setCadastroPassword(e.target.value)}></input>  
       <button>Cadastrar</button>
       </form>
       <p></p>
        <Link href="/login"> Ja possui cadastro?</Link> 
    </div>
  )
}
