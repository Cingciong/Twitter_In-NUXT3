<template>
    <nuxt-link to="#">
    <div class="rounded-full w-min p-3 flex items-center hover:bg-blue-50  dark:hover:bg-dim-200 text-black dark:text-white " :class='Transition'>
            <div class="h-6 w-6"><slot name="icon"></slot></div>
            <div class="ml-3 hidden text-xl md:block"><slot name="description"></slot></div>
    </div>
    </nuxt-link>
</template>  

<script setup>
const {Transition} = useTailwindConfig()

</script>