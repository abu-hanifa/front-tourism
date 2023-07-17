import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { authSigUp } from '../features/applicationSlice'
import { AppDispatch } from '../App/app.store'
import style from './Sing.module.css'



function SingUp():JSX.Element {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [blur, setBlur] = useState(false)
    const [blur1, setBlur1] = useState(false)
    const [blur2, setBlur2] = useState(false)
    const [blur3, setBlur3] = useState(false)
  
   
    
    

    const navigate = useNavigate()
    const dispatch  = useDispatch<AppDispatch>()

   
    

    function handleSignUp (e:FormEvent) {
      e.preventDefault()
      if(password.length < 8){
        setPassword('')
        return alert('пароль должен быть не менее 8 символов')
      }
        
      if(name.trim() && lastname.trim() && email.trim() && password.trim() ){

        dispatch(authSigUp({name, lastname, email, password}))
        setEmail('')
        setName('')
        setLastname('')
        setPassword('')
        navigate('/email')
        
        
      }
      
    }

   function handleName (e:ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
   }
   function handleLastname (e:ChangeEvent<HTMLInputElement>) {
    setLastname(e.target.value)
   }
   function handleEmail (e:ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
   }
   function handlePassword (e:ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
   }
console.log(blur);

  return (
    <div  className={style.form}>
    <div className={style.todo}>

      <h1>Зарегистрироваться!</h1>
    </div>
   <form  onSubmit={handleSignUp}>
    {blur ? <div className={style.text}>введите имя</div> : <div className={style.text}></div>}
    <input onBlur={() => setBlur(!name && true)} onFocus={() => setBlur(false)} placeholder='Имя' type="text" value={name} onChange={handleName}/>
    {blur1 ? <div className={style.text}>введите фамилию</div> : <div className={style.text}></div> }
    <input onBlur={() => setBlur1(!lastname && true)} onFocus={() => setBlur1(false)} placeholder='Фамилия' type="text" value={lastname} onChange={handleLastname}/>
    {blur2 ? <div className={style.text}>введите email</div> : <div className={style.text}></div> }
    <input onBlur={() => setBlur2(!email && true)} onFocus={() => setBlur2(false)} placeholder='email' type="email" value={email} onChange={handleEmail}/>
    {blur3 ? <div className={style.text}>введите Пароль</div>  : <div className={style.text}></div> }
    
    <input  onBlur={() => setBlur3(!password && true)} onFocus={() => setBlur3(false)} placeholder='Пароль' type="password" value={password} onChange={handlePassword}/>
    <button className={style.but}> Зерегистрироваться</button>
    <div className={style.line}></div>
    <div className={style.text1}>Уже есть аккаунт</div>
    <button className={style.button}>
    <Link className={style.link} to='/email'>Войти</Link>
    </button>
    
   </form>
    </div>
  )
}

export default SingUp