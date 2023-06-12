<template>
  <div :class="{'dark': darkMode}">

    <div class="min-h-full bg-white dark:bg-dim-900">
      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max lg:px-8 lg:gap-5">
        <!--left sidebar-->
        <div class=" hidden md:block xs:col-span-1 ml-5 md:col-span-3 ">
          <div class="sticky top-0">
            <SidebarLeft />
          </div>
        </div>

        <!--main-->
        <div class="bg-blue-500 col-span-9 md:col-span-5">qq</div>

        <!--right bar-->
        <div class="bg-green-500 xs:col-span-1 md:col-span-3">qq</div>

      </div>
    </div>


  </div>
</template>
<script setup>
  const darkMode = ref(true);

</script>