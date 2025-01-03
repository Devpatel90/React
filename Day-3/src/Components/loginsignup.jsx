import { useState } from "react"
import styles from "./main.module.css"

function Login(){

    const [state,setState] = useState(true)
    return (
        <div className={styles.main}>
            <div className={styles.b1}></div>
            { state == true ? 
            <div id="login" className={styles.log}>
                <h1>Login</h1>
                <input type="text" name="" id="" placeholder="Enter Email Address"/><br /><br />
                <input type="password" name="" id="" placeholder="Enter Password" /><br /><br />
                <input type="submit" name="" id="" />
                <p onClick={()=>{setState(false)}}>New to Flipkart ? Create an Account</p>
            </div> :
            <div id="signup">
                <h1>Signup</h1>
                <input type="text" name="" id="" placeholder="Enter Username"/><br /><br />
                <input type="text" name="" id="" placeholder="Enter Email Address"/><br /><br />
                <input type="password" name="" id="" placeholder="Enter Password" /><br /><br />
                <input type="submit" name="" id="" />
                <p onClick={()=>{setState(true)}}>Existing User ? Log In</p>
            </div>}

        </div>
    )
}

export default Login