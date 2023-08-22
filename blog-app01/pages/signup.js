import { useState } from "react"
import Link from "next/link"
export default function  login (){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
     const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,password)
     }
    return(
        <>
        <div className="container center">
            <h2>signup here</h2>
            <form onSubmit ={(e)=>handleSubmit(e)}>
                <div className="input-field">
                <input type="text" placeholder="qadir" value={name}  onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="email@.com" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                 <input type="password" placeholder="****" value={password}  onChange={(e) => setPassword(e.target.value)}/>


            
                <button type="submit" className="btn #7e57c2 deep-purple lighten-1">sign up</button>
              
                <Link href="/login">Al ready have an Account</Link>
              </div>
            </form>

        </div>
        </>
    )
}