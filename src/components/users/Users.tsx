import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import { fetchUsers } from "../features/data.slice"
const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)

useEffect(() => {
    dispatch(fetchUsers())
},[])
return (
    <div>
        {users.map((item) => {
            return <div key={item._id}>{item.email}</div>
        })}
    </div>
)
    
}
export default Users