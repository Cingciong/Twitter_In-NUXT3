<template>
    <div class="border-x" :class="TwitterBorderColor">
        <div class="sticky top-0 px-4 py-3 backdrop-blur-md dark:bg-dim-900">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white-100">
                {{ props.title }}
            </h2>
        </div>
        <div v-if="props.loading" class=" flex justify-center p-4 border-b" :class="TwitterBorderColor">
                <LogoSpinner/>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>

const {TwitterBorderColor} = useTailwindConfig

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    },
});
</script>