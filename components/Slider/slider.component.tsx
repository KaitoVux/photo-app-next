// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import imageService from '@services/image.service';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider: React.FC = () => {
    const [images, setImages] = useState<any>([]);
    useEffect(() => {
        (async () => {
            try {
                const images = await await imageService.getFeatureImages();
                console.log(images);
                setImages(images);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const sliders = images?.map((image: any) => (
        <SwiperSlide key={image.id}>
            <div className="h-60 md:h-[500px]">
                <Image src={image.url} alt="" layout="fill" objectFit="cover"></Image>
            </div>
        </SwiperSlide>
    ));

    return (
        <section className="pb-8 w-screen">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {}}
                onSlideChange={() => {}}
            >
                {images &&
                    images?.map((image: any) => (
                        <SwiperSlide key={image.id}>
                            <div className="h-60 md:h-[500px]">
                                <Image
                                    src={image.url}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                ></Image>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};
