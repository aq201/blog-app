import { useState } from "react"
import Link from "next/link"
export default function  login (){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
     const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email,password)
     }
    return(
        <>
        <div className="container center">
            <h2>login here</h2>
            <form onSubmit ={(e)=>handleSubmit(e)}>
                <div className="input-field">
                    <input type="email" placeholder="email@.com" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="****" value={password}  onChange={(e) => setPassword(e.target.value)}/>


            
                <button type="submit" className="btn #7e57c2 deep-purple lighten-1"> Login</button>
              
                <Link href="/signup">Dont have a Account</Link>
              </div>
            </form>

        </div>
        </>
    )
}