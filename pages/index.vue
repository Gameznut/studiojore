<template>
    <div class="bg-[#0000006e] relative h-screen">
        <Nav />
        <Welcome />
        <About />
        <Services />
        <section id="works" class="bg-[#0000001e] text-[white] py-[5rem]">
            <div class="main_container">
                <h1 class="text-[20px] tracking-[.6rem] uppercase font-bold mb-[1rem]">Works</h1>
                <div class="my-[2rem] grids justify-center rounded-[20px] overflow-hidden grid">
                    <div :class="projects.length == 1 ? 'rounded-[10px]' : ''" class=" card photo-1"
                        v-for="project, index in projects" :key="project">

                        <NuxtImg :alt="project.image" loading="lazy" class="" :src="project.image" />
                        <div class="bg"></div>
                        <div class="content">
                            <p>{{ project.app }}</p>
                            <p>{{ index + 1 }} </p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        <Global />
        <Team />
    </div>
</template>
<script setup>
const projects = ref([
    {
        app: 'Ip Tracker',
        image: '7.jpg'
    },
    {
        app: 'She',
        image: '1.jpg',
        desc: 'Know the location of any Ip Address'
    },
    {
        app: 'Ip Tracker',
        image: '2.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '3.jpg'
    },
    {
        app: 'She',
        image: '1.jpg',
        desc: 'Know the location of any Ip Address'
    },
    {
        app: 'Ip Tracker',
        image: '2.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '3.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '4.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '5.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '6.jpg'
    },
    {
        app: 'She',
        image: '1.jpg',
        desc: 'Know the location of any Ip Address'
    },
    {
        app: 'Ip Tracker',
        image: '2.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '5.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '4.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '6.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '7.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '1.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '5.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '6.jpg'
    },
    {
        app: 'She',
        image: '1.jpg',
        desc: 'Know the location of any Ip Address'
    },
    {
        app: 'Ip Tracker',
        image: '2.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '5.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '4.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '6.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '7.jpg'
    },
    {
        app: 'Ip Tracker',
        image: '1.jpg'
    },
])

onMounted(() => {
    let longHorizontalBlocks1 = []
    let longHorizontalBlocks2 = []
    let longVerticalBlocks1 = []
    let longVerticalBlocks2 = []
    let blocks0 = []
    let blocks5 = []
    let blocks6 = []
    let blocks7 = []
    let h1 = 0
    let h2 = 3
    let v1 = 2
    let v2 = 4
    let b0 = 1
    let b5 = 5
    let b6 = 6
    let b7 = 7
    for (let y = 0; y < projects.value.length; y++) {
        longHorizontalBlocks1.push(h1)
        longHorizontalBlocks2.push(h2)
        longVerticalBlocks1.push(v1)
        longVerticalBlocks2.push(v2)
        blocks0.push(b0)
        blocks5.push(b5)
        blocks6.push(b6)
        blocks7.push(b7)
        h1 += 8
        h2 += 8
        v1 += 8
        v2 += 8
        b0 += 8
        b5 += 8
        b6 += 8
        b7 += 8
    }

    const loadgrid = ref(() => {
        const cards = document.querySelectorAll('.card');
        const grids = document.querySelector('.grids');
        if (window.innerWidth < 700) {
            grids.style.gridAutoRows = `320px`
            grids.style.gridTemplateColumns = `minmax(100px, 1fr)`
            for (let index = 0; index < cards.length; index++) {
                cards[index].style.gridColumn = `span 1`;
                cards[index].style.gridRow = `span 1`;
            }
        }
        else {
            grids.style.gridAutoRows = `500px`
            grids.style.gridTemplateColumns = `repeat(3, minmax(100px, 500px))`
            for (let i = 0; i < cards.length; i++) {
                if (longHorizontalBlocks1.includes(i)) {
                    cards[i].style.gridColumn = `span 2`;
                    cards[i].style.gridRow = `span 1`;
                    cards[i].style.background = `coral`;
                    cards[i].id = i
                }
                if (longHorizontalBlocks2.includes(i)) {
                    cards[i].style.gridColumn = `span 2`;
                    cards[i].style.gridRow = `span 1`;
                    cards[i].style.background = `red`;
                    cards[i].id = i
                }
                if (longVerticalBlocks1.includes(i)) {
                    cards[i].style.gridColumn = `span 1`;
                    cards[i].style.gridRow = `span 2`;
                    cards[i].style.background = `gold`;
                    cards[i].id = i

                }

                if (longVerticalBlocks2.includes(i)) {
                    cards[i].style.gridColumn = `span 1`;
                    cards[i].style.gridRow = `span 2`;
                    cards[i].style.background = `white`;
                    cards[i].id = i

                }
                if (blocks0.includes(i)) {
                    cards[i].style.gridColumn = `span 1`;
                    cards[i].style.gridRow = `span 1`;
                    cards[i].style.background = `green`;
                    cards[i].id = i

                }
                if (blocks5.includes(i)) {
                    cards[i].style.gridColumn = `span 1`;
                    cards[i].style.gridRow = `span 1`;
                    cards[i].style.background = `pink`;
                    cards[i].id = i

                }
                if (blocks6.includes(i)) {
                    cards[i].style.gridColumn = `span 1`;
                    cards[i].style.gridRow = `span 1`;
                    cards[i].style.background = `yellow`;
                    cards[i].id = i

                }
                if (blocks7.includes(i)) {
                    cards[i].style.gridColumn = `span 1`;
                    cards[i].style.gridRow = `span 1`;
                    cards[i].style.background = `blue`;
                    cards[i].id = i
                }

            }

        }
    })
    loadgrid.value()
    window.addEventListener('resize', () => {
        loadgrid.value()
    })

})


</script>
<style>
.card {
    grid-row: span 1;
    grid-column: span 1;
    background-color: #898bff;
}

.card,
.card>img {
    position: relative;
    overflow: hidden;
    /* cursor: pointer; */
}

.card>img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
}

.card .bg {
    position: absolute;
    inset: 0;
    transition: 300ms;
}

.card:hover .bg,
.card:hover img,
.card:hover .content {
    background-color: rgba(28, 29, 29, 0.562);
    scale: 1.1;
    opacity: 1;
}

.card .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #898bff;
    justify-content: center;
    transition: 300ms;
    opacity: 0;
    position: absolute;
    inset: 0;
}
</style>
