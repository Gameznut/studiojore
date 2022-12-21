<template>
    <transition name="fade">
        <div v-if="open" id="preloader"
            class="absolute  inset-0 z-[100] owner text-animatison text-black sm:text-[100px] text-[50px] font-bold glowing-text text-center tracking-[1.5rem] z- grid place-items-center uppercase">

            <div class="">
                <p>Studio </p>
                <p> jore</p>
                <button @click="open = false"
                    class="uppercase hover:bg-[white] hover:text-[#d49a9afd] mx-auto opacity-0 duration-300 sm:text-[50px] text-[30px]  font-serif bg-[#d49a9afd] py-[.7rem] px-[2rem] mt-[2rem] rounded-md show">Welcome</button>

            </div>
        </div>
    </transition>
</template>

<script setup>
const open = ref(true)

watch(open, (x) => {
    const body = document.querySelector('body');

    if (!x) {
        body.classList.add('!overflow-auto')
        console.log('hide')
    }
})
</script>
<style scoped>
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000fd;
    z-index: 9999;
    display: grid;
    place-items: center;
    /* min-height: 120vh; */
    /* height: 100%; */
}


@keyframes glowing {
    0% {
        text-shadow: 0 0 5px #fff;
    }

    50% {
        text-shadow: 1px 2px 20px #d49a9afd;
    }

    100% {
        text-shadow: 0 0 5px rgb(255, 255, 255);
    }
}

.glowing-text p {
    animation: glowing 1s infinite;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.door-enter-active {
    -webkit-animation: door-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: door-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation-duration: 800ms;
}

.door-leave-active {
    -webkit-animation: door-leave both;
    animation: door-leave both;
    animation-duration: 800ms;
}

@keyframes door-enter {
    from {
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
    }
}

@-webkit-keyframes door-leave {
    60% {
        -webkit-transform: scale3d(0.01, 1, 1);
        transform: scale3d(0.01, 1, 1);
    }

    to {
        -webkit-transform: scale3d(0, 1, 0.1);
        transform: scale3d(0, 1, 0.1);
    }
}

@keyframes door-leave {
    60% {
        -webkit-transform: scale3d(0.01, 1, 1);
        transform: scale3d(0.01, 1, 1);
    }

    to {
        -webkit-transform: scale3d(0, 1, 0.1);
        transform: scale3d(0, 1, 0.1);
    }
}
</style>
