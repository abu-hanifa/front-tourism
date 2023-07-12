import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authSigUp } from '../features/applicationSlice'
import { AppDispatch } from '../App/app.store'



function SingUp():JSX.Element {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch  = useDispatch<AppDispatch>()

   

    function handleSignUp (e:FormEvent) {
      e.preventDefault()
      dispatch(authSigUp({name, lastname, email, password}))
      setEmail('')
      setName('')
      setLastname('')
      setPassword('')
      navigate('/email')
      
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

  return (
   <form onSubmit={handleSignUp}>
    <input placeholder='Имя' type="text" value={name} onChange={handleName}/>
    {!name.trim() && <div>введите имя</div> }
    <input placeholder='Фамилия' type="text" value={lastname} onChange={handleLastname}/>
    {!lastname.trim() && <div>введите фамилию</div> }
    <input placeholder='email' type="text" value={email} onChange={handleEmail}/>
    {!email.trim() && <div>введите email</div> }
    <input placeholder='Пароль' type="text" value={password} onChange={handlePassword}/>
    {!password.trim() && <div>введите Пароль</div> }
    <button>Add</button>
   </form>
  )
}

export default SingUp