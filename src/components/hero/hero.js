import * as React from "react"
import * as styles from "./hero.scss"


const Hero = ({heroTile}) => {
    return (
        <div className={styles.hero}> <h1>{heroTile}</h1></div>
    );
}

export default Hero;