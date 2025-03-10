<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <div>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Name"
            v-model="user.name"
            @input="validateName"
            required
          />
          <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>
        <input
          type="email"
          id="email"
          placeholder="Email"
          v-model="user.email"
          @input="validateEmail"
          required
        />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          @input="validatePassword"
          required
        />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>
      <button
        :disabled="!canSubmit"
        :class="{ 'disabled-button': !canSubmit }"
        type="submit" class="submit-button">Sign Up</button>
      <button @click="goBack" class="back-button">Back</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { User } from '@/types/user';
import { signUp } from '@/api/auth';
import { validateName, validateEmail, validatePassword } from '@/utils/validation';

export default defineComponent({
  name: 'SignUp',
  emits: ['resetForm'],
  setup(_props, { emit }) {
    const user = ref<User>({
      email: '',
      name: '',
      password: '',
    });
    const errors = ref<{ [key: string]: string }>({
      email: '',
      name: '',
      password: '',
    });
    const router = useRouter();

    const canSubmit = computed(() => {
      const noErrors = Object.values(errors.value).every((error) => !error);
      const hasValues = Object.values(user.value).every((value) => value);
      return noErrors && hasValues;
    });

    const goBack = () => {
      user.value.name = '';
      user.value.email = '';
      user.value.password = '';
      emit('resetForm');
    };

    const handleSignUp = async () => {
      if (canSubmit.value) {
        try {
          const data = await signUp(user.value);
          if (data.accessToken) {
            router.push({ name: 'Home' });
          } else {
            errors.value.email = data.error;
          }
        } catch (error) {
          errors.value.email = 'Sign Up failed. Please try again.';
        }
      }
    };

    return {
      user,
      errors,
      canSubmit,
      goBack,
      handleSignUp,
      validateName: () => validateName(user.value.name, errors.value),
      validateEmail: () => validateEmail(user.value.email, errors.value),
      validatePassword: () => validatePassword(user.value.password, errors.value),
    };
  },
});
</script>
