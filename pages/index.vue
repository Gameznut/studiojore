<template>
    <div class="bg-[#000000] h-screen">
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
                    <NuxtImg alt="slideshow of my work" loading="lazy" class="h-screen w-full object-cover"
                        :src="`/${image}.jpg`" />
                </swiper-slide>
            </swiper>
        </div>
        <About />
        <Services />
        <Global />
        <section>
        
        </section>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay, EffectFlip } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";


</script>

<style scoped>

</style>
