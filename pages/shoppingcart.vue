<template>
    <MainLayout>
        <div class="max-w-[1200px] mx-auto mt-4 px-2">
            <div v-if="false" class="flex flex-col gap-2 items-center justify-center py-6">
                <img src="/cart-empty.png" width="250">
                <p class="text-xl text-center">No items yet?</p>
                <NuxtLink to="/auth" class="px-[50px] py-2 bg-gradient-to-r from-red-800 to-red-600 text-white font-semibold my-2 rounded-full">
                    Sign in
                </NuxtLink>
            </div>
            <div class="flex justify-between w-full">
                <div class="md:w-[65%] flex flex-col gap-y-2">
                    <div class="bg-white p-4 rounded-sm">
                        <h1 class="text-2xl font-bold capitalize mb-2">shopping cart (0)</h1>
                    </div>
                    <span class="font-bold text-red-600 p-2 bg-red-300/15 rounded-sm my-2">Welcome deal applicable on 1 item only</span>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
</script>