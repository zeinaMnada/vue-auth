<template>
  <div class="signin">
    <h2>Sign In</h2>
    <form @submit.prevent="handleSignIn">
      <div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          v-model="user.email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
      </div>
      <button
        :disabled="!canSubmit"
        :class="{ 'disabled-button': !canSubmit }"
        type="submit" class="submit-button">Sign In</button>
      <button @click="goBack" class="back-button">Back</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { User } from '@/types/user';
import { signIn } from '@/api/auth';

export default defineComponent({
  name: 'SignIn',
  emits: ['resetForm'],
  setup(_props, { emit }) {
    const user = ref<User>({
      email: '',
      password: '',
    });
    const router = useRouter();

    const canSubmit = computed(() => {
      return user.value.email.length > 0 && user.value.password.length > 0;
    });

    const goBack = () => {
      user.value.email = '';
      user.value.password = '';
      emit('resetForm');
    };

    const handleSignIn = async () => {
      if (user.value.email && user.value.password) {
        const data = await signIn({ email: user.value.email, password: user.value.password});
        if (!("error" in data)) {
          router.push({ name: 'Home' });
        }
      }
    };
    return {
      user,
      canSubmit,
      goBack,
      handleSignIn,
    };
  },
});
</script>
