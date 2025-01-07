import { useState } from "react"
import styles from "./main.module.css"

function Login(){

    const [state,setState] = useState(true);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    return (

        <div className={styles.main}>
            <div className={styles.ama}> <img src="10002.png" alt="" className={styles.lo} /> </div>
            
        { state == true ?
        <div className={styles.container1}>
            <h3 class="mb-4 text-center">Sign in</h3>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label" className={styles.lab}>Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Email" required></input><br />
                    <label for="email" class="form-label" className={styles.lab}>Password</label>
                    <input type="password" class="form-control" id="passowrd" placeholder="Enter Password" required></input>
                </div>
                    <button type="submit" class="btn btn-continue w-100" className={styles.btn1} btn btn-continue w-100>Continue</button>
                    <p class="mt-3 small">By continuing, you agree to Amazon's 
                    <a href="#" class="text-decoration-none"> Conditions of Use</a> and 
                    <a href="#" class="text-decoration-none">   Privacy Notice</a>.
                    </p>
            </form>
            <hr></hr>
            <div>
                <p>New to Amazon?</p>
                <a href="#" class="btn btn-outline-secondary w-100" onClick={()=>{setState(false)}}>Create your Amazon account</a>
            </div>
        </div> :

        <div className={styles.container2}>
            <h3 class="mb-4 text-center">Create Account</h3>
            <form>          
                <div class="mb-3">
                    <label for="name" class="form-label" className={styles.lab}>Your name</label>
                    <input type="text" class="form-control" value={name} placeholder="First and last name" required></input>
                </div>
            
                <div class="mb-3">
                    <label for="mobile" class="form-label" className={styles.lab}>Email Address</label>
                    <div class="input-group">
                        <input type="tel" class="form-control" value={email} placeholder="Email Address" required></input>
                    </div>
                 </div>

                <div class="mb-3">
                    <label for="password" class="form-label" className={styles.lab}>Password</label>
                    <input type="password" class="form-control" value={password} placeholder="At least 6 characters" required></input>
                    <div class="form-text text-info info-text">Passwords must be at least 6 characters.</div>
                </div>

                <button type="submit" class="btn btn-verify w-100" className={styles.btn2}>Verify mobile number</button>
            
            <hr></hr>
            
            <div>
                <p>Already have an account? <a href="#" onClick={()=>{setState(true)}}>Sign in</a></p>
            </div>

            </form>
        </div>

        }
        </div>
    )
}

export default Login