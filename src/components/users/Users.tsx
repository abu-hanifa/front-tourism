import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"
import { fetchUsers } from "../features/data.slice"
import { AppDispatch, RootState } from "../App/app.store"
function Users ():JSX.Element  {
    const dispatch = useDispatch<AppDispatch>()
    const users = useSelector((state: RootState ) => state.application.users)

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