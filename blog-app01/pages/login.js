import { useState } from "react"
import Link from "next/link"
export default function  login (){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
     const handleS
    return(
        <>
        <div className="container center">
            <h2>login here</h2>
            <from>
                <div className="input-field">
                    <input type="email" placeholder="email@.com" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="****" value={password}  onChange={(e) => setPassword(e.target.value)}/>


                </div>
                <button type="submit" className="btn #7e57c2 deep-purple lighten-1"> Login</button>
              <div>  
                <Link href="/siginup">Dont have a Account</Link>
              </div>
            </from>

        </div>
        </>
    )
}