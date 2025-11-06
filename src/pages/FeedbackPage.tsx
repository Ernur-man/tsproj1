import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css'
import axios from 'axios';
import { useEffect } from 'react';
import { userStore } from '../store/feedbackStore';
import type { Users } from '../types/Users';
import '../less/feedback.less'
import twopoint from '../assets/twopoint.svg'
import { Autoplay } from 'swiper/modules';

export default function FeedbackPage(){
    const {users, addUsers} = userStore()

    useEffect(()=>{
        axios.get<Users[]>("users.json")
        .then((res)=> addUsers(res.data))
    },[])
    return(
        <main className="feedback">
            <div className="container">
                <h2  className="square animate__animated animate__fadeInDownBig wow">What Our Clients Say`</h2>
                
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}>
                    
                {
                    users.map((el)=>(
                        <SwiperSlide>
                            <div key={el.id}  className="square animate__animated animate__fadeIn wow">
                                <img src={twopoint} alt="twopoint" />
                                <p>{el.title}</p>
                                <h4>{el.author}</h4>
                                <span>{el.proffession}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>

            </div>
        </main>
    )
}