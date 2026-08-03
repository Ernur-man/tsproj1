import '../less/header.less'
import logo from '/logo.svg'
import { AiFillHeart } from 'react-icons/ai';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa6';
import { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Layer from './layer';
export default function Header(){
    const [activeList, setActiveList] = useState<boolean>(false)
    const [activeSignIn, setActiveSingIn] = useState<boolean>(false)

    const menuRef = useRef<HTMLDivElement>(null)
    const list:string[] = ["Home", "Advantages", "Products"];

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setActiveList(false);
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);



    return(
        <>
            <Layer active={activeSignIn} setActive={setActiveSingIn}/>
            <header className='animate__animated animate__fadeInDown wow'>
                <div className="container">
                    <article>
                        <img src={logo} alt="LOGO" />
                        <aside ref={menuRef}>
                            <div
                                className="menu"
                                onClick={() => setActiveList(prev => !prev)}
                            >
                                <h4>Categories</h4>
                                <FaAngleDown className="arrow_down" />
                            </div>

                            <nav className={`list ${activeList ? "active" : ""}`}>
                                {list.map((el, i) => (
                                    <li key={i}>
                                        <a
                                            href={`#${el.toLowerCase()}`}
                                            onClick={() => setActiveList(false)}
                                        >
                                            {el}
                                        </a>
                                    </li>
                                ))}
                            </nav>
                        </aside>
                    </article>
                    <article>
                        <div><AiFillHeart style={{color: 'white'}}/></div>
                        <div><BiSolidShoppingBagAlt style={{color: 'white'}}/></div>
                        <div>
                            <FaUser style={{marginRight: 15}}/>
                            <button onClick={()=>setActiveSingIn(true)}>Sign In</button>
                        </div>
                    </article>
                </div>

            </header>
        </>
    )
}
