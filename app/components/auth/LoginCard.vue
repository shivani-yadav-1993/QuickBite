<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

import BaseButton from '~/components/ui/BaseButton.vue'
import BaseInput from '~/components/ui/BaseInput.vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const login = () => {
  console.log({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
}
</script>

<template>
  <div class="login-card">
    <div class="brand">
      🍔 QuickBite
    </div>

    <h1>Welcome Back</h1>

    <p>
      Login to continue ordering your favourite food.
    </p>

    <BaseInput
      v-model="email"
      label="Email"
      placeholder="Enter your email"
    />

    <div class="password-field">
      <BaseInput
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        placeholder="Enter your password"
      />

      <button
        class="toggle-password"
        @click="showPassword = !showPassword"
      >
        <Icon
          :icon="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
          width="20"
        />
      </button>
    </div>

    <div class="options">
      <label>
        <input
          v-model="rememberMe"
          type="checkbox"
        >

        Remember Me
      </label>

      <NuxtLink to="/">
        Forgot Password?
      </NuxtLink>
    </div>

    <BaseButton
      label="Login"
      full-width
      @click="login"
    />

    <div class="divider">
      <span>OR</span>
    </div>

    <div class="social-buttons">
      <button>
        <Icon
          icon="logos:google-icon"
          width="20"
        />
        Google
      </button>

      <button>
        <Icon
          icon="logos:github-icon"
          width="20"
        />
        GitHub
      </button>
    </div>

    <p class="signup">
      Don't have an account?

      <NuxtLink to="/signup">
        Create Account
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>
.login-card {
  width: 100%;
  max-width: 470px;
  padding: 40px;
  border-radius: 28px;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, .72);
  box-shadow: 0 20px 60px rgba(0, 0, 0, .12);
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.brand {
  font-size: 30px;
  font-weight: 700;
  color: #fc8019;
}

h1 {
  font-size: 36px;
  font-weight: 700;
}

p {
  color: #666;
}

.password-field {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 44px;
  right: 16px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.options a {
  color: #fc8019;
  text-decoration: none;
  font-weight: 600;
}

.divider {
  display: flex;
  justify-content: center;
  color: #999;
  font-size: 13px;
}

.social-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.social-buttons button {
  height: 50px;
  border: none;
  border-radius: 14px;
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: .3s;
}

.social-buttons button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, .08);
}

.signup {
  text-align: center;
}

.signup a {
  color: #fc8019;
  text-decoration: none;
  font-weight: 700;
}
</style>