import '../less/footer.less'
import { useState } from 'react'

export default function FooterPage(){
    const [activeModal, setActiveModal] = useState<boolean>(false)

    function emailSend(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setActiveModal(true)
        setTimeout(() => {
            setActiveModal(false)
        }, 3000);
    }
    return(
        <main className="footer">
            <div className={activeModal == true ? `modalWindow active` : `modalWindow`}>
                <h2>Your email was send</h2>
            </div>
             
            <aside>
                <div className="container">
                    <h3  className="square animate__animated animate__fadeInLeft wow">Newsletter</h3>
                    <form onSubmit={emailSend}  className="square animate__animated animate__fadeInRight wow">
                            <input type="text" placeholder="Your email" required/>
                            <button>Send</button>
                    </form>
                </div>
            </aside>
            <div className="container">
                <aside  className="square animate__animated animate__fadeInUp wow">
                    <menu>
                        <li><a href="#">HTML Design</a></li>
                        <li><a href="#">WP  Themes</a></li>
                        <li><a href="#">CMS Themes</a></li>
                        <li><a href="#">eCommerce</a></li>
                        <li><a href="#">Blogging</a></li>
                        <li><a href="#">UI Templates</a></li>
                    </menu>
                    <p>2021 JS Template. Designd By Ojjomedia All Rights Reserved</p>
                </aside>
            </div>
        </main>
    )
}