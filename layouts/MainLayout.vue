<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <div id="TopMenu" class="w-full bg-[#fafafa] border-b md:block hidden">
            <ul 
            class="flex items-center justify-end text-xs text-[#333333] font-light px-2 h-10 bg-[#fafafa] max-w-[1200px]">
            <li class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer ">Sell on AliExpress</li>
            <li class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer">Cookie Preferences</li>
            <li class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer">Help</li>
            <li class="border-r border-r-gray-400 px-3 hover:text-[#ff4646] cursor-pointer">Buyer Protection</li>
            <li class="px-3 hover:text-[#ff4646] cursor-pointer ">
                <Icon name="ic:sharp-install-mobile" size="17"/>
                App
            </li>
            <li @mouseenter="isAccountMenu = true" @mouseleave="isAccountMenu = false"
                class="relative flex items-center px-2.5 hover:text-[#ff4646] h-full cursor-pointer"
                :class="isAccountMenu ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]' : 'border border-[#fafafa]'">
                <Icon name="ph:user-thin" size="17"/>
                Account 
                <Icon name="mdi:chevron-down" size="15" class="ml-5"/>
                <div id="AccountMenu" v-if="isAccountMenu" class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b">
                    <div v-if="true">
                        <div class="font-semibold text-[15px] my-4 px-3">Welcome to AliExpress!</div>
                        <div class="flex items-center gap-1 px-3 mb-3">
                            <NuxtLink to="/auth" class="bg-[#ff4646] text-center rounded-sm text-white w-full py-2">
                                Login / Register
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
let isAccountMenu = ref(false);
</script>