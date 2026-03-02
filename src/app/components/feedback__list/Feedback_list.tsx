"use client"
import Feedback from "../feedback/Feedback";
import persons from "@/app/utils/person";
import styles from "./Feedback_list.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Feedback_list() {
    return (

        <section className={styles.feedbacks} id="feedbacks">

            <h2 className={styles.feedback__title}>Feedbacks <span>de alunos</span></h2>
            <div className={styles.feedback__container}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className={styles.feedback__swiper}
                >
                    {
                        persons.map((person) => (
                            <SwiperSlide>
                                <Feedback {...person} key={person.namePerson} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>

    );
}
