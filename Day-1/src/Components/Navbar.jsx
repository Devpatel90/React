import styles from "./Nav.module.css"
 
function Nav(){
    return (
        <div>
            <div className={styles.main}>

                <div className={styles.logo}>
                    <img src={"logo.png"} alt="" />
                </div>

                <div className={styles.m1}>
                    <h3>MEN</h3>
                    <h3>WOMEN</h3>
                    <h3>KIDS</h3>
                    <h3>HOME & LIVING</h3>
                    <h3>BEAUTY</h3>
                    <h3>STUDIO</h3>
                </div>

                <div className={styles.sea}>
                    <input type="text" className={styles.box} placeholder="Search for products, brands and more"></input>
                    <input type="text" placeholder="Search for products, brands and more"></input>

                </div>

            </div>
        </div>
    )
}

export default Nav