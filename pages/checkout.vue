<template>
    <MainLayout>
        <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-4">
                        <h1 class="text-xl font-bold mb-2">Shipping Address</h1>
                        <div v-if="false">
                            <NuxtLink to="/address" class="flex items-center pb-2 text-blue-500 hover:text-red-400 gap-1 capitalize">
                                <Icon name="mdi:plus" size="18"/>
                                update address
                            </NuxtLink>
                            <div class="pt-2 border-t">
                                <h2 class="underline pb-1 capitalize">delivery address </h2>
                                <ul class="text-xs">
                                    
                                    <li class="flex items-center gap-2">
                                        <p>Contact name: </p>
                                        <p class="font-bold uppercase">Test</p>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <p>Zip code: </p>
                                        <p class="font-bold uppercase">Test</p>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <p>Address: </p>
                                        <p class="font-bold uppercase">Test</p>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <p>City: </p>
                                        <p class="font-bold uppercase">Test</p>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <p>Country: </p>
                                        <p class="font-bold uppercase">Test</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <NuxtLink v-else to="/address" class="
                            flex items-center text-blue-500 hover:text-red-500 gap-2
                        ">
                        <Icon name="mdi:plus" size="18"/>
                                Add new address
                    </NuxtLink>
                    </div>

                    <div id="Items" class="bg-white rounded-lg p-4 mt-4">
                        <div v-for="product in products">
                            <CheckoutItem :product="product"/>
                        </div>
                    </div>
                </div>

                <div class="md:hidden block my-4"/>

                <div class="md:w-[35%]">
                    <div id="PlaceOrder" class="bg-white rounded-lg p-4">
                        <div class="text-2xl font-extrabold mb-2">Summary</div>
                        <div class="flex justify-between items-center my-4">
                            <p>Total Shipping</p>
                            <p>FREE</p>
                        </div>
                        <div class="flex justify-between items-center py-4 border-t">
                            <div class="font-semibold">Total</div>
                                    <div class="text-2xl font-semibold">
                                        $ <span class="font-extrabold">{{ total /100 }}</span>
                                    </div>
                        </div>
                        
                        <form @submit.prevent="pay()">
                            <div id="card-element" class="border border-gray-500 p-2 rounded-sm"/>
                            <p id="card-error" role="alert" class="text-red-700 text-center font-semibold"/>
                            <button :disabled="isProssesing" type="submit" class="mt-4 bg-gradient-to-r from-[#fe630c] to-[#ff6300] w-full text-white text-[21px]
                            p-1.5 rounded-full font-semibold"
                            :class="isProssesing ? 'opacity-70' : 'opacity-100'">
                            <Icon v-if="isProssesing" name="eos-icons:loading"/>
                            <div v-else>Place order </div>
                        </button>
                        </form>
                    </div>

                    <div class="bg-white rounded-lg p-4 mt-4">
                        <div class="text-lg font-semibold my-2">AliExpress</div>
                        <p>AliExpress keeps your information and payment safe</p>
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
const route = useRoute();
let stripe = null;
let elements = null;
let card = null;
let form = null;
let total = ref(0);
let clientSecret = null;
let currentAddress = ref(null);
let isProssesing = ref(false);

onMounted(()=> {
    isProssesing.value = true;
    userStore.cart.forEach((item)=> {
        total.value += item.price;
    });
});

watch(()=> total.value, ()=> {
    if(total.value > 0){
        stripeInit();
    }
});

const stripeInit = async()=> {

}
const pay = async()=> {

}
const createOrder = async(stripeId)=> {

}
const showError = (errorMsgText)=> {

}
const products = [
  {id: 8, title: 'this is title', description: 'this is description', url: 'https://picsum.photos/id/73/800/800', price: 999},
  {id: 9, title: 'this is title', description: 'this is description', url: 'https://picsum.photos/id/73/800/800', price: 999},
  {id: 10, title: 'this is title', description: 'this is description', url: 'https://picsum.photos/id/73/800/800', price: 999},
]
</script>