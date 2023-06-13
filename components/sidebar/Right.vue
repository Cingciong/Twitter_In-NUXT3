<template>
    <div class=" xl:col-span-4  md:block  bg-blue-500  flex flex-col mdLcol-span-3 mt-2">

        <div class="w-full h-11 p bg-gray-200 rounded-full focus:bg-inherit  hover:bg-slate-50 hover:border-y-2 hover:border-dim-100 mb-3" :class='Transition'><!--twitter search-->
            <form class="w-full flex  justify-start items-center gap-3">
                <div class="w-5 text-gray-400  dark:text-white" fill="currentColor">
                    <submit class="">
                        <SearchIcon/>
                    </submit>
                </div>
                <input type="text" id="search" placeholder="Search Twitter" class="bg-inherit h-full border-none focus:outline-0">
            </form>
        </div>

        <div><!--you might like-->
            <SidebarPreviewCard title="You might like">
            
            <SidebarItem v-for="SidebarItem in youMight">
            
                <h2>{{ SidebarItem.title }}</h2>

                <h1>{{ SidebarItem.count }}</h1>
            
            </SidebarItem>


            </SidebarPreviewCard>
        </div>    

        <div class=""><!--Trends for you-->
            <SidebarPreviewCard title="Trends for you"/>
        </div>
    </div>
</template>

<script setup>

import {SearchIcon} from "@heroicons/vue/solid";
const {Transition} = useTailwindConfig();

const youMight = ref([
    {
        title: '#cummy',
        count:  '2137',
    },
    {
        title: '#MummyMilkies',
        count:   '2001',
    },
    {
        title: '#Manko_wo_pero_pero',
        count:   '911',
    },
    {
        title: '#Metamorphosis',
        count:   '177013',
    },
]);


</script>