<template>
    <MainLayout>
        <div id="ItemPage" class="max-w-[1200px] mt-4 mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[40%]">
                    <img v-if="currentImage" :src="currentImage" class="rounded-lg object-fill">
                    <div v-if="images[0] !== ''" class="flex justify-center items-center mt-2">
                        <div v-for="image in images">
                            <img @mouseover="currentImage = image" @click="currentImage = image" width="70"
                                class="rounded-md object-fill border-[3px] cursor-pointer"
                                :class="currentImage == image ? 'border-[#ff5353]' : ''" :src="image">
                        </div>
                    </div>
                </div>
                <div class="md:w-[60%] bg-white p-3 rounded-lg">
                    <div v-if="true" >
                        <h2 class="mb-2">This is Title!!</h2>
                        <h4 class="text-[12px] font-light mb-2">My Description</h4>
                    </div>
                    <div class="flex items-center gap-1 pt-1.5">
                        <span class="flex items-center justify-center bg-[#ffd000] p-1 rounded-full">
                            <Icon name="material-symbols:star-rate"  size="12" />
                        </span>
                        <p class="text-[#ff5353]">Extra 5% off</p>
                    </div>
                    <div class="flex items-center justify-start my-2">
                        <Icon name="material-symbols:star-rate" color="#ff5353" v-for="i in 5" :key="i">
                        </Icon>
                        <p class="text-[13px] font-light ml-2">5 256 Reviews 5,000+ orders</p>
                    </div>
                    <div class="border-b"/>

                    <div class="flex gap-1 py-2">
                        <h1 class="text-2xl font-bold">${{ priceComputed }}</h1>
                        <span class="py-1 px-2 bg-red-500/15 rounded-md text-[9px] h-fit">70% off</span>
                    </div>
                    <div class="py-2 flex flex-col">
                        <span class="text-[#009a66] font-semibold text-sm">Free 11-day delivery of $8.28</span>
                        <span class="text-[#009a66] font-semibold text-sm">Free Shipping</span>
                    </div>
                    <button 
                            @click="addToCart()"
                            :disabled="isInCart"
                            class="py-2 px-4 mx-1 my-2 bg-orange-400 text-white rounded-md font-semibold  shadow-md">
                            {{ isInCart ? 'it was added': 'add to cart' }}
                        </button>
                </div>
            </div>
        </div>
    </MainLayout>
</template>
<script setup>
import { onMounted } from 'vue';
import MainLayout from '~/layouts/MainLayout.vue';
import {useUserStore} from '@/stores/user.js';
const route = useRoute();
const userStore = useUserStore();
const isInCart = computed(()=> {
    let decide = false; 
    userStore.cart.forEach((prod)=> {
        if(route.params.id == prod.id){
            decide = true;
        }
    });
    return decide;
})
let currentImage = ref(null);
onMounted(() => {
    watchEffect(() => {
        currentImage.value = 'https://picsum.photos/id/78/800/800';
        images.value[0] = 'https://picsum.photos/id/78/800/800'
    });
})
let images = ref([
    'https://picsum.photos/id/78/800/800',
    'https://picsum.photos/id/81/800/800',
    'https://picsum.photos/id/82/800/800',
    'https://picsum.photos/id/83/800/800',
    'https://picsum.photos/id/84/800/800'
]);

let priceComputed = computed(()=> {
    return 29.99;
})

function addToCart(){
    alert('ADDED');
}
</script>