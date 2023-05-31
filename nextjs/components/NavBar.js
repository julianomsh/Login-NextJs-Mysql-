import React from 'react'
import Link from "next/link"
import styles from '../styles/NavBar.module.css'

export default function Index() {
  return (
    <div className={styles.NavBar}>
        <Link href={"/login"}><h1>Login</h1></Link>
        <Link href={"/cadastro"}><h1>Cadastrar</h1></Link>
        <Link href={"/navbar"}><h1>Home</h1></Link>
    </div>
  )
}
