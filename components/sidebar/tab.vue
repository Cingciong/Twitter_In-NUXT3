<template>
    <div class="rounded-full w-auto hover:bg-blue-50 dark:hover:bg-white flex-row"  :class='Transition'>
        <nuxt-link to="#">
            <div class="h-full w-"><slot name="icon"></slot></div>
            <div class="h-full hidden xl:block"><slot name="description"></slot></div>
        </nuxt-link>    
    </div>
</template>  

<script setup>
const {Transition} = useTailwindConfig()

</script>