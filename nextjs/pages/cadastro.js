import {useState} from 'react'
{/*import Link from "next/link"*/}
import NavBar from '../components/NavBar' 
import axios from 'axios'

export default function Cadastro() {


const [ cadastroUsername, setCadastroUsername] = useState('');
const [ cadastroPassword, setCadastroPassword] = useState('');

const cadastro = () => {
    axios({
        mathod:"post",
        data: {
            username: cadastroUsername,
            password: cadastroPassword
        },
        withCredentials:true,
        url:"http://localhost:3001/cadastro"
        }).then((res) => console.log(res)).catch((err) => console.log(err));
    }



  return (
    <div>
           <NavBar></NavBar>
       <h1>Cadastro</h1>
       <form>
       <input type='text' name='username' placeholder='nome' onChange={e => setCadastroUsername(e.target.value)}></input>
       <input type='password' name='password' placeholder='Senha' onChange={e => setCadastroPassword(e.target.value)}></input>  
       <button onClick={cadastro}>Cadastrar</button>
       </form>
       <p></p>
       {/* <Link href="/login"> Ja possui cadastro?</Link> */}
    </div>
  )
}
