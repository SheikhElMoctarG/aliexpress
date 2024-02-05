<template> 
    <div class="flex justify-start my-2 gap-2">
        <div class="my-auto">
            <div class="flex items-center p-0.5 justify-start cursor-pointer" @mouseenter="isHover = true"
                @mouseleave="isHover = false">
                <div @click="isSelected = !isSelected" class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mt-5 ml-2"
                        :class="[isHover ? 'border-[#fd374f]' : 'border-gray-300', isSelected ? 'bg-[#fd374f]' : '']">
                        <div class="bg-white h-[8px] w-[8px] rounded-full"/>
                    </div>
            </div>
        </div>
        <img class="rounded-md md:w-[150px] w-[90px]" :src="product.url">
        <div class="overflow-hidden pl-2 w-full">
            <div class="flex items-center justify-between w-full">
                <div class="flex justify-between items-center truncate">
                    <span class="hidden sm:block px-1.5 bg-[#fd374f] text-white text-[9px] rounded-sm min-w-[80px] font-semibold text-center">Welcome Deal</span>
                    <h1 class="truncate sm:pl-2">{{ product.title }}</h1>
                </div>
                <button
                    @click="removeFromCart()"
                    class="mx-3 hidden sm:block -mt-0.5 hover:text-red-500">
                    <Icon name="material-symbols:delete-outline" size="20"/>
                </button>
            </div>
            <div class="text-xl font-semibold">
                $ <span class="font-bold">{{ product.price / 100 }}</span>
            </div>
            <p class="text-[#009A66] text-xs font-semibold pt-1">
                Free 11-day delivery over ￡8.28
            </p>
            <p class="text-[#009A66] text-xs font-semibold pt-1">
                Free Shipping
            </p>
            <div class="flex items-center justify-end">
                <button 
                    @click="removeFromCart()"
                    class="sm:hidden block -mt-0.5 hover:text-red-500"
                >
                    <Icon name="material-symbols:delete-outline" size="20" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useUserStore} from '@/stores/user.js';
const userStore = useUserStore();
const props = defineProps(['product', 'selectedArray']);
const {product, selectedArray} = toRefs(props);

const emit = defineEmits(['selectedRadio']);
let isHover = ref(false);
let isSelected = ref(false);

const removeFromCart = ()=> {
    userStore.cart.forEach((prod, index)=> {
        if(prod.id  == product.value.id){
            userStore.cart.slice(index, 1)
        }
    })
};

watch(()=> isSelected.value, (val)=> {
    emit("selectedRadio", {id: product.value.id, val: val});
}) 
</script>

