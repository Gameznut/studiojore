<template>
    <section id="team" class="main_container !py-[5rem]">
        <h1 class="text-center text-[20px] tracking-[.6rem] uppercase font-bold mb-[1rem]">MEET OUR INNOVATIVE TEAM
        </h1>
        <div
            class="flesx flex-wrap grid sm:grid-cols-[repeat(2,minmax(0,1fr))] md:grid-cols-[repeat(3,minmax(0,1fr))] grid-cols-[repeat(1,minmax(0,1fr))] justify-center">
            <div class=" w-full relative content" v-for="image, index in 6" :key="index">
                <NuxtImg alt="slideshow of my work" loading="lazy"
                    class="h-[300px] md:h-[400px]  w-full object-cover object-top" :src="`/${image}.jpg`" />
                <div class=" bg "></div>
                <div class="absolute inset-0 grid place-items-center text-center text">
                    <div>
                        <h1 class="uppercase text-[20px] tracking-[.6rem] font-bold mb-[1rem]">Role</h1>
                        <p class="uppercase text-[16px] tracking-[.2rem] font-[500] mb-[1rem]">Name</p>
                        <p class="uppercase text-[14px]  mb-[1rem]">Description</p>
                        <div class="p-[1rem] flex gap-[1.5rem]  rounded-full">
                            <NuxtLink to="#">
                                <Icon class="cursor-pointer" size="25" name="ri:instagram-line" />
                            </NuxtLink>
                            <NuxtLink to="#">
                                <Icon class="cursor-pointer" size="25" name="ri:facebook-line" />
                            </NuxtLink>
                            <NuxtLink to="#">
                                <Icon class="cursor-pointer" size="25" name="ri:twitter-line" />
                            </NuxtLink>
                            <NuxtLink to="#">
                                <Icon class="cursor-pointer" size="25" name="ri:whatsapp-line" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.content .bg {
    position: absolute;
    inset: 0;

}


.content .text {
    transition: 300ms;
    opacity: 0;
}

.content:hover .bg,
.content:hover .text {
    background-color: #d49a9a70;
    transition: all 300ms ease-in-out;
    opacity: 1;
}
</style>
