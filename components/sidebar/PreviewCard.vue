<template>
    <div class=" rounded-2xl bg-gray-50 dark:bg-dim-700 border overflow-hidden pt-2 mb-2 " :class="TwitterBorderColor">
        <h1 class="font-bold text-lg h-12 border-b pl-4 p-1">
            {{ props.title }}
        </h1>

        <slot></slot>

        <div class="p-4 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300" :class="DefaulTranstiotn">
            Show more
        </div>
    </div>  
</template> 

<script setup>

const {TwitterBorderColor, DefaulTranstiotn} = useTailwindConfig();


const props = defineProps({
    title: {
        type: String,
        required:true
    }
});
</script>