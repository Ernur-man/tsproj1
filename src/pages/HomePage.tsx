import Header from "../components/header";
import '../less/home.less'
import {BiSearch } from 'react-icons/bi';
import elipse from '/Ellipse.webp'
import js from '/js.svg'
import vuew from '/vue.svg'
import angular from '/angular.svg'
import square from '/square.svg'
import net from '/net.svg'
import { useEffect, useState } from "react";
import axios from "axios";

type Search = {
    id: number;
    title: string
};

export default function HomePage(){
    const [data, setData] = useState<Search[]>([])
    const [value, setValue] = useState<string>('')

    useEffect(()=>{
        axios.get<Search[]>("search.json")
        .then((res)=>{
            setData(res.data)
        })
        .catch((e)=>alert("Error: " + e))

    },[])
    return(
        <main className="main" id="home">
            <Header/>
            <img src={elipse} alt="elipse" className="elipse"/>
            <div className="container">
                <aside className='animate__animated animate__fadeInLeft wow'>
                    <h2>World Top <p>Themes,Plugins & Templates</p></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit in id hac platea leo vulputate.</p>
                    <article>
                        <form>
                            <input type="text" placeholder="e.g. “wordpress”" value={value} onChange={(e)=>setValue(e.target.value)}/>
                            <button><BiSearch style={{marginRight: 10, fontSize: 20}}/> Search</button>
                        </form>
                            <nav className={data.length > 0 && value.length > 0 ? `tips active` : `tips` } >
                                {
                                    data.map((el)=>(
                                        el.title.includes(value) && value.length > 0 &&(
                                            <p key={el.id}>{el.title}</p>
                                        )
                                    ))
                                }
                            </nav>
                    </article>
                </aside>
                <aside className="hero-images animate__animated animate__fadeInRight wow">
                    <img src={square} alt="Square" className="square" />
                    <img src={angular} alt="Angular" className="angular" />
                    <img src={net} alt=".NET" className="net" />
                    <img src={vuew} alt="Vue" className="vuew" />
                    <img src={js} alt="Node.js" className="js" />
                </aside>
            </div>
        </main>
    )
}
