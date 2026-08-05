<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

import { ref } from 'vue'

import BaseButton from '~/components/ui/BaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseInput from '~/components/ui/BaseInput.vue'

const name = ref('')

const email = ref('')

const password = ref('')

const confirmPassword = ref('')
</script>

<template>
  <div class="auth-page">

    <BaseCard>

      <h2>Create Account</h2>

      <BaseInput
        v-model="name"
        label="Full Name"
      />

      <BaseInput
        v-model="email"
        label="Email"
      />

      <BaseInput
        v-model="password"
        label="Password"
        type="password"
      />

      <BaseInput
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
      />

      <BaseButton
        label="Create Account"
        full-width
      />

    </BaseCard>

  </div>
</template>

<style scoped>
.auth-page {
  display: flex;

  justify-content: center;

  align-items: center;

  min-height: 90vh;
}
</style>
