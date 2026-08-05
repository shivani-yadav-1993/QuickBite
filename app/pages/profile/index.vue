<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

import { ref } from 'vue'

import BaseAvatar from '~/components/ui/BaseAvatar.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseInput from '~/components/ui/BaseInput.vue'

const name = ref('John Doe')
const email = ref('john@example.com')
const phone = ref('9876543210')
</script>

<template>
  <div class="container">

    <h1>My Profile</h1>

    <BaseCard>

      <div class="profile-header">
        <BaseAvatar
          src="https://i.pravatar.cc/150"
          :size="90"
        />
      </div>

      <BaseInput
        v-model="name"
        label="Full Name"
      />

      <BaseInput
        v-model="email"
        label="Email"
      />

      <BaseInput
        v-model="phone"
        label="Phone"
      />

      <BaseButton
        label="Save Changes"
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

.profile-header {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.qb-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
