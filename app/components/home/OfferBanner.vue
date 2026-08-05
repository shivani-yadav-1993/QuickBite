<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section class="offer-banner">

    <div>

      <h2>
        Flat 50% OFF
      </h2>

      <p>
        On your first order. Limited time offer.
      </p>

    </div>

    <BaseButton
      label="Grab Offer"
      size="lg"
    />

  </section>
</template>

<style scoped>
.offer-banner {
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 40px;

  border-radius: var(--border-radius-lg);

  background: linear-gradient(
    90deg,
    var(--primary),
    #ffb347
  );

  color: white;

  margin: 48px 0;
}

.offer-banner h2 {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .offer-banner {
    flex-direction: column;

    gap: 20px;

    text-align: center;
  }
}
</style>
