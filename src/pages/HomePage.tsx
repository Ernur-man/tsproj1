import Header from "../components/header";
import '../less/home.less'
import {BiSearch } from 'react-icons/bi';
import elipse from '../assets/Ellipse.webp'
import js from '../assets/js.svg'
import vuew from '../assets/vue.svg'
import angular from '../assets/angular.svg'
import square from '../assets/square.svg'
import net from '../assets/net.svg'

export default function HomePage(){
    return(
        <main className="main" id="home">
            <Header/>
            <img src={elipse} alt="elipse" className="elipse"/>
            <div className="container">
                <aside className='animate__animated animate__fadeInLeft wow'>
                    <h2>World Top <p>Themes,Plugins & Templates</p></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit in id hac platea leo vulputate.</p>
                    <form>
                        <input type="text" placeholder="e.g. “wordpress”"/>
                        <button><BiSearch style={{marginRight: 10, fontSize: 20}}/> Search</button>
                    </form>
                </aside>
                <aside className="square animate__animated animate__fadeInRight wow">
                    <img src={square} alt="square" className="square " />
                    <img src={angular} alt="angular" className="angular"/>
                    <img src={net} alt="net" className="net"/>
                    <img src={vuew} alt="vue" className="vuew"/>
                    <img src={js} alt="js" className="js"/>
                </aside>
            </div>
        </main>
    )
}