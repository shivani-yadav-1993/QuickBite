<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import BaseButton from '~/components/ui/BaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseInput from '~/components/ui/BaseInput.vue'
import BaseTextarea from '~/components/ui/BaseTextarea.vue'
import BaseSelect from '~/components/ui/BaseSelect.vue'

import { ref } from 'vue'

const address = ref('')
const city = ref('')
const paymentMethod = ref('')

const paymentOptions = [
  {
    label: 'Cash on Delivery',
    value: 'cod'
  },
  {
    label: 'UPI',
    value: 'upi'
  },
  {
    label: 'Credit / Debit Card',
    value: 'card'
  }
]
</script>

<template>
  <div class="container">

    <h1>Checkout</h1>

    <BaseCard>

      <BaseTextarea
        v-model="address"
        label="Delivery Address"
      />

      <BaseInput
        v-model="city"
        label="City"
      />

      <BaseSelect
        v-model="paymentMethod"
        label="Payment Method"
        :options="paymentOptions"
      />

      <BaseButton
        label="Place Order"
        full-width
      />

    </BaseCard>

  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
  padding: 24px;
}

.qb-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
