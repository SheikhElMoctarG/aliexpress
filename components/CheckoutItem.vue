<template>
    <div class="flex justify-start my-2 gap-2">
        <img class="rounded-md md:w-[150px] w-[90px]" :src="product.url">
        <div class="overflow-hidden pl-2 w-full">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center">
                    <span class="hidden sm:block px-1.5 bg-[#fd374f] text-white text-[9px] rounded-sm min-w-[80px] font-semibold text-center">Welcome Deal</span>
                    <h1 class="truncate sm:pl-2">{{ product.title }}</h1>
                </div>
            </div>
            <div class="text-lg font-semibold">
                $ <span class="font-bold">{{ product.price / 100 }}</span>
            </div>
            
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['product']);
const {product} = toRaw(props);
</script>