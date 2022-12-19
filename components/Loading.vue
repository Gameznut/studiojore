<template>
    <!-- <div id="preloader">
        <div class="spinner"></div>
     
    </div> -->
    <div id="preloader"
        class="absolute inset-0 owner text-animatison text-black sm:text-[100px] text-[30px] font-bold glowing-text text-center tracking-[1.5rem] z-10 grid place-items-center uppercase">
        <div>
            <p>Studio </p>
            <p> jore</p>
        </div>
        
    </div>
</template>

<style>
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
}

.spinner {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #333;
    animation: spin 1s infinite linear;

}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
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

.glowing-text {
    animation: glowing 1s infinite;
}
</style>

