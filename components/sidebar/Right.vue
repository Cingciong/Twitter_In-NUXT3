<template>
    <div class=" xl:col-span-4  md:bloc flex flex-col mdLcol-span-3 mt-2">

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
            
                <h2 class="font-bold">{{ SidebarItem.title }}</h2>

                <h1>{{ SidebarItem.count }}</h1>
            
            </SidebarItem>


            </SidebarPreviewCard>
        </div>    

        <div class=""><!--Trends for you-->
            <SidebarPreviewCard title="Trends for you">
                <SidebarTrend v-for="SidebarTrend in trends">
                    <div class="flex flex-row items-center">
                            <img class="w-10 h-10 rounded-full" :src="SidebarTrend.img">
                        <div class="ml-4 flex flex-col gap-1">
                            <h1 class="font-semibold"> {{ SidebarTrend.name }}</h1>
                            <h1 class="font-thin"> {{ SidebarTrend.handle }}</h1>
                        </div>
                    </div>
                </SidebarTrend>
            </SidebarPreviewCard>
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

const trends = ref([
    {
        img: "https://picsum.photos/200/200",
        name: "Joe Bidon",
        handle: "#RCM",
    },
    {
        img: "https://picsum.photos/200/200",
        name: "fhfh",
        handle: "fgg",
    },
    {
        img: "https://picsum.photos/200/200",
        name: "gssgg",
        handle: "dsgsd",
    },
]);

</script>