<template>
    <div class="h-screen flex flex-col gap-2 ">
        <div class="rounded-full w-10 h-10 hover:bg-blue-50 dark:hover:bg-white"  :class='Transition'>
            <nuxt-link to="/">
            <div class="w-full flex items-center">
                <LogoTwitter />
            </div>
            </nuxt-link>  
        </div> 
        <SidebarTab>
            <template v-slot:icon>
                <HomeIcon />
            </template>
            <template v-slot:description>
                Home
            </template>
        </SidebarTab>
        
    </div>    
</template>

<script setup>
import {HomeIcon} from "@heroicons/vue/solid"
const {Transition} = useTailwindConfig()

</script>