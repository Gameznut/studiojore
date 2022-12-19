<template>
    <section id="about" class="main_container !py-[5rem]">
        <h1 class="text-[20px] tracking-[.6rem] uppercase font-bold mb-[1rem]">About</h1>
        <div class=" flex justify-between sm:items-start items-center sm:flex-row flex-col-reverse gap-[1rem]">
            <div class="flex relative flex-col justify-between gap-[1rem] items-center min-h-[400px] ">
                <p class="sm:text-[20px] text-[gray] max-w-[600px] w-full"><span
                        class="text-[#d49a9afd] uppercase font-[600]">Studio
                        Jore</span>
                    is a design, photography and marketing agency
                    that offers creative solutions to business problems.
                    <span class="text-[#d49a9afd] uppercase font-[600]">Studio
                        Jore</span>
                    is a design, photography and marketing agency
                    that offers creative solutions to business problems.
                </p>
                <div class="flex gap-[1rem] flex-col  sm:flex-row w-full align-bottom justify-between">

                    <div
                        class="bg-[#e7e7e785] rounded-md shadow-md shadow-[#00000080] px-[1.5rem] text-center p-[1rem]">
                        <p class="text-[30px] text-[#d49a9afd]">1000+</p>
                        <p class="text-[20px] text-[gray]">Creatives</p>
                    </div>
                    <div
                        class="bg-[#e7e7e785] rounded-md shadow-md shadow-[#00000080] px-[1.5rem] text-center p-[1rem]">
                        <p class="text-[30px] text-[#d49a9afd]">50+</p>
                        <p class="text-[20px] text-[gray]">Partners</p>
                    </div>
                    <div
                        class="bg-[#e7e7e785] rounded-md shadow-md shadow-[#00000080] px-[1.5rem] text-center p-[1rem]">
                        <p class="text-[30px] text-[#d49a9afd]">200+</p>
                        <p class="text-[20px] text-[gray]">Stories Told</p>
                    </div>
                    <div
                        class="bg-[#e7e7e785] rounded-md shadow-md shadow-[#00000080] px-[1.5rem] text-center p-[1rem]">
                        <p class="text-[30px] text-[#d49a9afd]">100+</p>
                        <p class="text-[20px] text-[gray]">Clients</p>
                    </div>
                </div>

            </div>

            <swiper class="max-w-[600px] w-full" :effect="'flip'" :loop="true" :loopFillGroupWithBlank="true"
                :centeredSlides="true" :modules="[EffectFlip, Autoplay]" :autoplay="{
                    delay: 2000,
                    disableOnInteraction: false,
                }">
                <swiper-slide v-for="image, index in 6" :key="index">
                    <NuxtImg alt="slideshow of my work" loading="lazy"
                        class=" object-cover object-top w-full sm:h-[500px] h-[300px]  rounded-md"
                        :src="`/${image}.jpg`" />
                </swiper-slide>
                <div class="w-full bg-[#000000a6] blur-[2rem] mb-[1rem]  h-[2px] p-[1rem]"> </div>
            </swiper>

        </div>
    </section>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay, EffectFlip } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";

</script>
