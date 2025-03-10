<template>
  <div class="auth">
    <h1>Welcome to the application</h1>
    <div class="auth-buttons" v-if="!showSignInForm && !showSignUpForm" >
      <button @click="showForm('signUp')" class="auth-button sign-up-button">Sign Up</button>
      <button @click="showForm('signIn')" class="auth-button sign-in-button">Sign In</button>
    </div>

    <!-- Render the form based on the selected action -->
    <div v-if="showSignInForm" class="auth-form">
      <SignInForm @resetForm="resetForms" />
    </div>

    <div v-if="showSignUpForm" class="auth-form">
      <SignUpForm @resetForm="resetForms" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SignInForm from './SignIn.vue';
import SignUpForm from './SignUp.vue';

export default defineComponent({
  name: 'AuthView',
  components: {
    SignInForm,
    SignUpForm,
  },
  setup() {
    // State for form visibility
    const showSignInForm = ref(false);
    const showSignUpForm = ref(false);

    // Show the appropriate form based on the button clicked
    const showForm = (action: 'signIn' | 'signUp') => {
      showSignInForm.value = action === 'signIn';
      showSignUpForm.value = action === 'signUp';
    };

    // Reset form visibility and clear input fields
    const resetForms = () => {
      showSignInForm.value = false;
      showSignUpForm.value = false;
    };

    return {
      showSignInForm,
      showSignUpForm,
      showForm,
      resetForms,
    };
  },
});
</script>

<style scoped>
.auth {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.auth-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.auth-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.sign-up-button {
  background-color: #3498db;
  color: white;
}

.sign-up-button:hover {
  background-color: #2980b9;
}

.sign-in-button {
  background-color: #2ecc71;
  color: white;
}

.sign-in-button:hover {
  background-color: #27ae60;
}

.auth-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.auth-form h2 {
  font-size: 1.8rem;
  margin-bottom: 15px;
}

.auth-form input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}
</style>