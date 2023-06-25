<template>
  <div :class="{'dark': darkMode}">

    <div class="min-h-full bg-white dark:bg-dim-900">


      <!-- App -->
      <div v-if="false" class="grid grid-cols-12 mx-auto sm:px-6 lg:max lg:px-8 lg:gap-5">
        
        <!--left sidebar-->
        <div class=" hidden md:block xs:col-span-1 ml-5 md:col-span-3 ">
          <div class="sticky top-0">
            <SidebarLeft />
          </div>
        </div>

        <!--main-->
        <main class=" col-span-9 md:col-span-5">
          <router-view>
            
          </router-view>
        </main>

        <!--right bar-->
        <SidebarRight />

      </div>

      <AuthPage v-else />

    </div>

    


  </div>
</template>
<script setup>
  const darkMode = ref(false);

</script>