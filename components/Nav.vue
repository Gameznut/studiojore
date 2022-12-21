<template>
    <transition name="height">
        <header class="bg-[#ffffff] duration-300 nav fixed top-0 left-0 right-0 z-[100] ">
            <nav class=" main_container duration-300 flex justify-between sm:!py-[1rem] flex-col !py-[.5rem]">
                <div class=" sm:flex justify-between w-full hidden  font-bold text-[18px] uppercase ">
                    <div class="flex items-center gap-[1rem]">
                                    <NuxtLink to="/">logo</NuxtLink>
                        <!-- <NuxtLink to="#subscribe">Subscribe</NuxtLink>
                        <NuxtLink to="#services">Client Services</NuxtLink> -->
                    </div>
                    <div class="flex items-center gap-[1rem]">
                        <NuxtLink to="#about">About</NuxtLink>
                        <NuxtLink to="#works">Works</NuxtLink>
                        <NuxtLink to="#book-us">Book us</NuxtLink>
                        <!-- <NuxtLink to="#services">More</NuxtLink> -->
                    </div>
                </div>
                <!-- Mobile link -->
                <div
                    class="flex sm:hidden main_container duration-300 s z-[100] fixed top-0 left-0  right-0 bg-[#ffffff] nav w-full justify-between items-center">
                    <div>
                        <NuxtLink to="/">logo</NuxtLink>
                    </div>
                    <svg class="ham hamRotate ham1" :class="menu_open ? 'active' : ''" viewBox="0 0 100 100" width="50"
                        height="50" @click="toggle">
                        <path class="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path class="line middle" d="m 30,50 h 40" />
                        <path class="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                </div>

                <transition name="slide_left" mode="out-in">
                    <div v-if="menu_open" class="duration-300 font-bold text-[20px] uppercase flex flex-col gap-[1rem]">

                        <!-- <NuxtLink to="#subscribe">Subscribe</NuxtLink>
                        <NuxtLink to="#services">Client Services</NuxtLink> -->

                        <NuxtLink to="#about">About</NuxtLink>
                        <NuxtLink to="#works">Works</NuxtLink>
                        <NuxtLink to="#book-us">Book us</NuxtLink>
                        <!-- <NuxtLink to="#services">More</NuxtLink> -->

                    </div>
                </transition>
            </nav>
        </header>
    </transition>
</template>
<script setup lang="ts">
const menu_open = ref(false)
const toggle = () => {
    menu_open.value = !menu_open.value
}
onMounted(() => {
    const navs = document.querySelectorAll(".nav");
    window.addEventListener("scroll", () => {
        navs.forEach(nav => {
            if (window.scrollY > 1) nav!.classList.add("scroll");
            else nav!.classList.remove("scroll");
        })
    });
});



</script>

<style scoped>
.height-enter-active,
.height-leave-active {
    transition: height .5s;
}

.slide_left-enter-active,
.slide_left-leave-active {
    transition: all .5s;

}

.slide_left-enter-from {
    transform: translatey(-100%);
}

.slide_left-leave-to {
    transform: translatey(-100%);
}

.ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.hamRotate.active {
    transform: rotate(45deg);
}

.hamRotate180.active {
    transform: rotate(180deg);
}

.line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: rgb(0, 0, 0);
    stroke-width: 5;
    stroke-linecap: round;
}

.ham1 .top {
    stroke-dasharray: 40 139;
}

.ham1 .bottom {
    stroke-dasharray: 40 180;
}

.ham1.active .top {
    stroke-dashoffset: -98px;
}

.ham1.active .bottom {
    stroke-dashoffset: -138px;
}
</style>
