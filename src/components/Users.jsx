import { useContext } from "react"
import { UserContext } from "../utils/Context"
import { Link } from "react-router-dom";


const Users = () => {
 const [user] =useContext(UserContext);



  return (
    <>
   
    <ul className="flex justify-center gap-10 flex-wrap p-10 ">
    {user.map((user)=>(
        <li key={user.id} className="bg-black text-white p-10 flex flex-col items-center">
        <h1 className="font-semibold uppercase underline underline-offset-4" >{user.username}</h1>
        <p className="mt-5">{user.email}</p>
        <h4 className="mt-2">{user.phone}</h4>
        <h2 className="mt-2">{user.address.city}</h2>
        <Link className="px-3 py-1 bg-zinc-400 rounded-full text-black mt-5" to={`/users/${user.id}`}>Show Details</Link>
        </li>
     ))}
     </ul>
    
    
    </>
  )
}

export default Users