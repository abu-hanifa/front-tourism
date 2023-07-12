import  { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authSignIn } from '../features/applicationSlice'
import { AppDispatch } from '../App/app.store'

function SingIn(): JSX.Element {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
    <form onSubmit={handleSignIn}>
        <input type="text" placeholder='email' value={email} onChange={handleEmail}/>
        {!email.trim() && <div>введите email</div> }
        <input type="text" placeholder='Пароль' value={password} onChange={handlePassword}/>
        {!password.trim() && <div>введите Пароль</div> }
        <button>Add</button>
    </form>
  )
}

export default SingIn