<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

import OfferCard from './OfferCard.vue'
import { offers } from '../../../constants/offers'

const [emblaRef] = emblaCarouselVue(
    {
        loop: true,
        align: 'start',
        dragFree: true
    },
    [
        Autoplay({
            delay: 4000,
            stopOnInteraction: true
        })
    ]
)
</script>

<template>
    <div ref="emblaRef" class="embla">
        <div class="embla__container">
            <div v-for="offer in offers" :key="offer.title" class="embla__slide">
                <OfferCard :title="offer.title" :subtitle="offer.subtitle" :button="offer.button"
                    :image="offer.image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.embla {
    overflow: hidden;
}

.embla__container {
    display: flex;
    gap: 24px;
}

.embla__slide {
    flex: 0 0 340px;
}

@media (max-width:1024px) {
    .embla__slide {
        flex: 0 0 300px;
    }
}

@media (max-width:768px) {
    .embla__container {
        gap: 18px;
    }

    .embla__slide {
        flex: 0 0 260px;
    }
}
</style>