<script setup lang="ts">
import { NuxtImg } from '#components'
import { motion } from 'motion-v'

interface Props {
    title: string
    subtitle: string
    button: string
    image: string
}

defineProps<Props>()
</script>

<template>
    <motion.div class="offer-card" :initial="{ opacity: 0, y: 24 }" :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.45 }" :while-hover="{ y: -8, scale: 1.02 }" viewport="{ once: true }">
        <NuxtImg :src="image" :alt="title" class="offer-image" loading="lazy" format="webp" />

        <div class="overlay">
            <span class="badge">
                Limited Time
            </span>

            <h3>
                {{ title }}
            </h3>

            <p>
                {{ subtitle }}
            </p>

            <button class="offer-btn">
                {{ button }}
            </button>
        </div>
    </motion.div>
</template>

<style scoped>
.offer-card {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    height: 240px;
    cursor: pointer;
    flex: 0 0 340px;
    box-shadow:
        0 10px 35px rgba(0, 0, 0, .12);
}

.offer-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .45s;
}

.offer-card:hover .offer-image {
    transform: scale(1.08);
}

.overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    background:
        linear-gradient(to top,
            rgba(0, 0, 0, .82),
            rgba(0, 0, 0, .15));
}

.badge {
    align-self: flex-start;
    margin-bottom: auto;
    background: white;
    color: #fc8019;
    font-size: 12px;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 999px;
}

h3 {
    color: white;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 8px;
}

p {
    color: rgba(255, 255, 255, .9);
    margin-bottom: 18px;
}

.offer-btn {
    align-self: flex-start;
    border: none;
    cursor: pointer;
    padding: 12px 22px;
    border-radius: 999px;
    background: #fc8019;
    color: white;
    font-weight: 700;
    transition: .25s;
}

.offer-btn:hover {
    background: #ff922e;
}

@media (max-width:768px) {
    .offer-card {
        flex: 0 0 280px;
        height: 200px;
    }

    h3 {
        font-size: 24px;
    }
}
</style>