<template>
  <div class="home">
    <h1>Welcome, {{ user.name }}!</h1>
    <button @click="handleSignout" class="sign-out-button">Sign Out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { signOut } from '@/api/auth';
import { getUserProfile } from '@/api/profile'; 

export default defineComponent({
  name: 'HomeView',
  setup() {
    const user = ref({
      name: '',
      email: '',
    });
    const router = useRouter();

    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();
        user.value = response;
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    const handleSignout = async () => {
      try {
        await signOut();
        router.push({ name: 'Auth' });
      } catch (error) {
        console.error('Signout failed:', error);
      }
    };

    onMounted(() => {
      fetchUserProfile(); 
      // Fetch user profile when component is mounted
      // Typically User data should be stored in state management
      // like Vuex not to fetch profile data on every page load
    });

    return {
      user,
      handleSignout,
    };
  },
});
</script>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.sign-out-button {
  padding: 10px 20px;
  background-color: #ff4757;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.sign-out-button:hover {
  background-color: #ff6b81;
}
</style>
