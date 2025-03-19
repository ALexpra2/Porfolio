import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css"; 
import projects from "../data/Projects"; 
const Carousel = () => {
    return (
        <div className="carousel-container">
            <h2>🚀 Mis Proyectos</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.name} className="carousel-image" />
                            <p className="carousel-text">{project.name}</p>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
