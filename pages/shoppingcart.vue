<template>
    <MainLayout>
        <div class="max-w-[1200px] mx-auto mt-4 px-2">
            <div v-if="!userStore.cart.length" class="flex flex-col gap-2 items-center justify-center py-6">
                <img src="/cart-empty.png" width="250">
                <p class="text-xl text-center">No items yet?</p>
                <NuxtLink v-if="!user" to="/username" class="px-[50px] py-2 bg-gradient-to-r from-red-800 to-red-600 text-white font-semibold my-2 rounded-full">
                    Sign in
                </NuxtLink>
            </div>
            <div v-else class="flex justify-between w-full">
                <div class="md:w-[65%] flex flex-col gap-y-2">
                    <div class="bg-white p-4 rounded-lg">
                        <h1 class="text-2xl font-bold capitalize mb-2">shopping cart ({{userStore.cart.length}})</h1>
                    </div>
                    <span class="font-bold text-red-600 p-2 bg-red-300/15 rounded-sm my-2">Welcome deal applicable on {{userStore.cart.length}} item only</span>

                    <div id="item" class="bg-white rounded-lg p-4 mt-4">
                        <div v-for="product of userStore.cart" :key="product">
                            <CartItem :product="product" :selectedArray="selectedArray" @selectedRadio="selectedRadioFunc"/>
                        </div>
                        
                    </div>
                </div>
                <div class="md:hidden block my-4"/>
                        <div class="md:w-[35%] ml-3">
                            <div id="Summary" class="bg-white rounded-lg p-4">
                                <div class="text-2xl font-extrabold mb-2">Summary</div>
                                <div class="flex justify-between items-center my-4">
                                    <div class="font-semibold">Total</div>
                                    <div class="text-2xl font-semibold">
                                        $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
                                    </div>
                                </div>
                                <button @click="goToCheckout" class="
                                font-semibold py-2 w-full rounded-full bg-red-500 text-white
                                ">Checkout</button>
                            </div>
                            <div id="paymentProtection" class="my-2 p-4 bg-white rounded-lg">
                                <h1 class="text-xl font-medium">Payment Methods</h1>
                                <div class="flex items-center justify-start gap-8 my-4">
                                    <img v-for="card in cards" :src="card" class="h-6">
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </MainLayout>
</template>
<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import {useUserStore} from '~/stores/user.js';
const userStore = useUserStore();
const user = useSupabaseUser();
let selectedArray = ref([]);
onMounted(()=> {
    setTimeout(()=> userStore.isLoading = false, 200);
});

const products = [
  {id: 1, title: 'Title 1', description: 'this is description', url: 'https://picsum.photos/id/70/800/800', price: 999},
  {id: 2, title: 'Title 2', description: 'this is description', url: 'https://picsum.photos/id/71/800/800', price: 999}
];
const cards = ref([
    '/visa.png',
    '/mastercard.png',
    '/paypal.png',
    '/applepay.png'
])
let totalPriceComputed = computed(()=> {
    let price = 0; 
    userStore.cart.forEach((prod)=> {
        price += prod.price;
    });
    return price / 100;
});

const selectedRadioFunc = (e)=> {
    if(!selectedArray.value.length){
        selectedArray.value.push(e);
        return;
    }
    selectedArray.value.forEach((item, index)=> {
        if(e.id != item.id){
            selectedArray.value.push(e);
        }else {
            selectedArray.value.slice(index, 1);
        }
    })
};

const goToCheckout = ()=> {
    let ids = [];
    userStore.checkout = [];
    selectedArray.value.forEach(item => ids.push(item.id));
    let res = userStore.cart.filter(item=> ids.indexOf(item.id) != -1);
    res.forEach((item)=> userStore.checkout.push(toRaw(item)))
    return navigateTo('/checkout');
}
</script>