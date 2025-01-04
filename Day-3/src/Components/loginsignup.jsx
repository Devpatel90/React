import { useState } from "react"
import styles from "./main.module.css"

function Login(){

    const [state,setState] = useState(true)
    return (

        <div className={styles.main}>
            <div className={styles.ama}> <img src="10002.png" alt="" className={styles.lo} /> </div>
            {/* <div className={styles.b1}>
                <div><h2 className="text-light mt-5">Login</h2></div>
                <div><p className="text-light mt-5">Get access to your Orders, Wishlist and Recommendations</p></div>
                <div className={styles.logo}><img src="10001.png" alt="" /></div>
            </div>
            { state == true ? 
            <div id="login" className={styles.log}>
                <h1>Login</h1>
                <input type="text" name="" id="" placeholder="Enter Email Address"/><br /><br />
                <input type="password" name="" id="" placeholder="Enter Password" /><br /><br />
                <input type="submit" name="" id="" />
                <p onClick={()=>{setState(false)}}>New to Flipkart ? Create an Account</p>
            </div> :
            <div id="signup" className={styles.log}>
                <h1>Signup</h1>
                <input type="text" name="" id="" placeholder="Enter Username"/><br /><br />
                <input type="text" name="" id="" placeholder="Enter Email Address"/><br /><br />
                <input type="password" name="" id="" placeholder="Enter Password" /><br /><br />
                <input type="submit" name="" id="" />
                <p onClick={()=>{setState(true)}}>Existing User ? Log In</p>
            </div>} */}
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
                    <input type="text" class="form-control" id="name" placeholder="First and last name" required></input>
                </div>
            
                <div class="mb-3">
                    <label for="mobile" class="form-label" className={styles.lab}>Mobile number</label>
                    <div class="input-group">
                        <input type="tel" class="form-control" id="mobile" placeholder="Mobile number" required></input>
                    </div>
                 </div>

                <div class="mb-3">
                    <label for="password" class="form-label" className={styles.lab}>Password</label>
                    <input type="password" class="form-control" id="password" placeholder="At least 6 characters" required></input>
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