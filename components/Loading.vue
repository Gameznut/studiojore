<template>
    <div id="preloader">
        <div class="spinner"></div>
    </div>
</template>

<style>
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
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
</style>

<script>

</script>
