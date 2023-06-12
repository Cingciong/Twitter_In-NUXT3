<template>
    <div class="h-screen flex flex-col   mt-2 ml-5">
        <div class="rounded-full w-12 h-12 p-1 hover:bg-blue-50 dark:hover:bg-dim-200 dark:text-white"  :class='Transition'>
            <nuxt-link to="/">
            <div class="w-full flex items-center">
                <LogoTwitter />
            </div>
            </nuxt-link>  
        </div> 

        <div>
            <SidebarTab>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:description>
                    Home
                </template>
            </SidebarTab>

            <SidebarTab>
                <template v-slot:icon>
                    <HashtagIcon />
                </template>
                <template v-slot:description>
                    Explore
                </template>
            </SidebarTab>

            <SidebarTab>
                <template v-slot:icon>
                    <BellIcon />
                </template>
                <template v-slot:description>
                    Notifications
                </template>
            </SidebarTab>

            <SidebarTab>
                <template v-slot:icon>
                    <InboxIcon />
                </template>
                <template v-slot:description>
                    Messages
                </template>
            </SidebarTab>

            <SidebarTab>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:description>
                    Lists
                </template>
            </SidebarTab>

            <SidebarTab>
                <template v-slot:icon>
                    <DocumentTextIcon />
                </template>
                <template v-slot:description>
                    Bookmarks
                </template>
            </SidebarTab>

            <SidebarTab>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:description>
                    Profile
                </template>
            </SidebarTab>

            <SidebarTab>
                <template v-slot:icon>
                    <DotsCircleHorizontalIcon />
                </template>
                <template v-slot:description>
                    More
                </template>
            </SidebarTab>
        </div>

        
    </div>    
</template>

<script setup>
import {HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon} from "@heroicons/vue/solid"

const {Transition} = useTailwindConfig()

</script>