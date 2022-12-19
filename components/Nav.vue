<template>
    <header class="bg-[#ffffff] duration-300 nav fixed top-0 left-0 right-0 z-[100] ">
        <nav class=" main_container flex justify-between !py-[1rem]">
            <div class="flex items-center gap-[1rem]">
                logo
                <NuxtLink to="#subscribe">Subscribe</NuxtLink>
                <NuxtLink to="#services">Client Services</NuxtLink>
            </div>
            <div class="flex items-center gap-[1rem]">
                <NuxtLink to="#book-us">Book us</NuxtLink>
                <NuxtLink to="#services">Works</NuxtLink>
                <NuxtLink to="#about">About</NuxtLink>
                <NuxtLink to="#services">More</NuxtLink>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
onMounted(() => {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 1) nav!.classList.add("scroll");
        else nav!.classList.remove("scroll");
    });
});

</script>

<style>
.links{

}
</style>
