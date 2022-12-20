<template>
    <div class="bg-[#0000006e] relative h-screen">
        <Nav />
        <div class="relative">
            <swiper :slidesPerView="1" :slidesPerGroup="1" :loop="true" :breakpoints="{
                '769': {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            }" :loopFillGroupWithBlank="true" :centeredSlides="true" :modules="[Autoplay]" :autoplay="{
    delay: 5000,
    disableOnInteraction: false,
}">
                <swiper-slide class="" v-for="image, index in 6" :key="index">
                    <NuxtImg alt="slideshow of my work" loading="lazy"
                        class="h-screen opacity-[.27] w-full object-cover" :src="`/${image}.jpg`" />
                </swiper-slide>
            </swiper>
            <div class="absolute inset-0 z-10 bg-[#00000091] w-screen h-screen"></div>
            <div
                class="absolute inset-0 owner text-animatison text-[#d49a9afd] sm:text-[100px] text-[45px] font-bold glowing-text text-center tracking-[1.5rem] z-10 grid place-items-center uppercase">
                <div class="flex justify-center flex-col">
                    <p>Studio </p>
                    <p> jore</p>
                </div>
            </div>

        </div>
        <About />
        <Services />
        <Global />
        <Team />
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";


</script>

<style scoped>
@keyframes glowing {
    0% {
        text-shadow: 1px 2px 5px #fff;
    }

    50% {
        text-shadow: 1px 2px 20px #000;
    }

    100% {
        text-shadow: 1px 2px 5px rgb(255, 255, 255);
    }
}

.glowing-text {
    animation: glowing 1s infinite;
}

.text-animation {
    animation: color-change 5s infinite;
}



@keyframes color-change {
    0% {
        font-size: 100px;
        /* color: rgb(0, 255, 221); */
    }

    50% {
        font-size: 120px;
        /* color: rgb(238, 255, 0); */
    }

    100% {
        font-size: 100px;
        /* color: #d49a9afd; */
    }
}
</style>
