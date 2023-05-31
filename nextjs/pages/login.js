import {React, useState} from 'react'
import Link from "next/link"
import NavBar from '../components/NavBar' 


export default function Login() {


const [ loginUsername, setloginUsername] = useState('');
const [ loginPassword, setloginPassword] = useState('');


  return (
    <div>
        <NavBar></NavBar>
       <h1>Login</h1>
       <form>
            <input type='text' name='username' placeholder='name' onChange={e => setloginUsername(e.target.value)}></input>
            <input type='password' name='password' placeholder='Senha' onChange={e => setloginPassword(e.target.value)}></input>  
            <button>Login</button>
       </form>
       <p></p>
    <Link href="/login"> Ja possui cadastro?</Link> 
    </div>
  )
}
