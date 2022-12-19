<template>

    <section class="bg-white !py-[5rem]">
        <div class="main_container">
        <h1 class="text-[20px] tracking-[.6rem] text-center uppercase font-bold mb-[1rem]">HOME TO GLOBAL BRANDS</h1>
            <div class=" flex flex-wrap gap-[1rem] justify-center">
                <div v-for="(item, index) in 13" :key="index">
                    <NuxtImg class="h-[120px] object-contain w-[150px] object-top" :src="`brand${item}.jpg`" />
                </div>
            </div>


            <div>
                <p class="text-center text-[25px] max-w-[700px] mx-auto my-[1rem]">“Visuals are processed 60,000 times
                    faster
                    than text by the human brain
                    and 90% of information transmitted to the brain is visual"</p>
            </div>
        </div>
    </section>
</template>
