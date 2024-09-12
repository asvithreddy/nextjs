import styles from "./navlink.module.css"
import Link from "next/link"
const navlink=({item})=>{
    return(
        //<div className={styles.container}Navlink></div>
        <Link href={item.path} className={styles.container}>{item.title}</Link>
    )
}
export default navlink