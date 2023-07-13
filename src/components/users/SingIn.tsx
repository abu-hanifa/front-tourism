import  { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authSignIn } from '../features/applicationSlice'
import { AppDispatch } from '../App/app.store'
import { Link } from 'react-router-dom'
import style from './Sing.module.css'

function SingIn(): JSX.Element {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [blur, setBlur] = useState(false)
    const [blur1, setBlur1] = useState(false)


    const dispatch = useDispatch<AppDispatch>()
    
    function handleSignIn (e:FormEvent) {
      e.preventDefault()
      dispatch(authSignIn({email, password}))
      setEmail('')
      setPassword('')
    }
    function handleEmail (e:ChangeEvent<HTMLInputElement>) {
      setEmail(e.target.value)
    }
    function handlePassword (e:ChangeEvent<HTMLInputElement>) {
      setPassword(e.target.value)
    }
  return (
    <div className={style.form}>
      <div className={style.todo}>
        <h1>Добро пожаловать!</h1>
      </div>
    <form onSubmit={handleSignIn}>
        {blur ? <div className={style.text}>введите email</div> : <div className={style.text}></div> }
        <input onBlur={() => setBlur(!email && true)} onFocus={() => setBlur(false)} type="text" placeholder='email' value={email} onChange={handleEmail}/>
        {blur1 ? <div className={style.text}>введите Пароль</div> : <div className={style.text}></div>  }
        <input onBlur={() => setBlur1(!password && true)} onFocus={() => setBlur1(false)} type="password" placeholder='Пароль' value={password} onChange={handlePassword}/>
        <div className={style.forgot}>Забыли пароль?</div>
        <button className={style.but}>Войти</button>
        <div className={style.line}></div>
        <div className={style.text1}>Нет аккаунта?</div>
        <button className={style.button}>

        <Link className={style.link} to='/register'>Зарегистрироваться</Link>
        </button>
    </form>
    </div>
  )
}

export default SingIn