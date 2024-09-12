import Link from "next/link"; 
import styles from "./links.module.css"

const Links =()=>
{
    const links=[
        {
            title:"Homepage",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
        {
            title:"Blog",
            path:"/blog",
        },

    ];
    return(
        <div className={styles.links} >
            {links.map((link=>(
                //<Link href={link.path} key={link.title}>{link.title}</Link>
                <navlink item={link} key={link.title}/>
            )))}
        </div>
    )
}
export default Links