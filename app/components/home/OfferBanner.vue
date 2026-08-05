<script setup lang="ts">
import OfferCarousel from './OfferCarousel.vue'
</script>

<template>
  <section class="offers-section">
    <div class="section-header">
      <div>
        <span class="tag">
          🔥 Deals
        </span>

        <h2>
          Top Offers Near You
        </h2>

        <p>
          Discover exclusive discounts from your favourite restaurants.
        </p>
      </div>

      <NuxtLink to="/offers" class="view-all">
        View All
      </NuxtLink>
    </div>

    <OfferCarousel />
  </section>
</template>

<style scoped>
.offers-section {
  max-width: 1440px;
  margin: 72px auto;
  padding: 0 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 28px;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(252, 128, 25, .1);
  color: #fc8019;
  font-weight: 700;
  margin-bottom: 12px;
}

.section-header h2 {
  font-size: 38px;
  font-weight: 800;
  color: #222;
  margin-bottom: 10px;
}

.section-header p {
  color: #666;
  max-width: 520px;
}

.view-all {
  color: #fc8019;
  text-decoration: none;
  font-weight: 700;
  transition: .25s;
}

.view-all:hover {
  color: #e56f11;
}

@media (max-width:768px) {

  .offers-section {
    padding: 0 18px;
    margin: 56px auto;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .section-header h2 {
    font-size: 30px;
  }

}
</style>