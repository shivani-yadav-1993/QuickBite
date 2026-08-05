<script setup lang="ts">
import FloatingFoods from './FloatingFoods.vue'
</script>

<template>
  <div class="auth-background">
    <div class="blob blob-1" />
    <div class="blob blob-2" />
    <div class="blob blob-3" />

    <FloatingFoods />
  </div>
</template>

<style scoped>
.auth-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at top left, #ffe6c8 0%, transparent 35%),
    radial-gradient(circle at bottom right, #ffd9b3 0%, transparent 40%),
    linear-gradient(135deg, #fff9f5 0%, #fff2e8 100%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: .45;
  animation: blobMove 18s ease-in-out infinite;
}

.blob-1 {
  width: 420px;
  height: 420px;
  background: #fc8019;
  top: -120px;
  left: -120px;
}

.blob-2 {
  width: 360px;
  height: 360px;
  background: #ffb347;
  bottom: -80px;
  right: -80px;
  animation-delay: 6s;
}

.blob-3 {
  width: 260px;
  height: 260px;
  background: #ffd48c;
  top: 45%;
  left: 48%;
  animation-delay: 10s;
}

@keyframes blobMove {
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(40px, -30px) scale(1.08);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
}
</style>