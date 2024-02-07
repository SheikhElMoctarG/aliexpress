<template>
    <MainLayout>
        <div class="max-w-[500px] mx-auto px-2 mt-4" id="AddressPage">
            <div class="mx-auto bg-white rounded-lg p-3">
                <h1 class="text-xl font-bold mb-2 capitalize">address details</h1>
                <form @submit.prevent="submit()" class="flex flex-col gap-2">
                    <TextInput class="w-full" placeholder="Contact Name" v-model:input="contactName" inputType="text"
                        :error="error && error.type == 'contactName' ? error.message : ''" />
                    <TextInput class="w-full" placeholder="Address" v-model:input="address" inputType="text"
                        :error="error && error.type == 'address' ? error.message : ''" />
                    <TextInput class="w-full" placeholder="Zip Code" v-model:input="zipCode" inputType="text"
                        :error="error && error.type == 'zipCode' ? error.message : ''" />
                    <TextInput class="w-full" placeholder="City" v-model:input="city" inputType="text"
                        :error="error && error.type == 'city' ? error.message : ''" />
                    <TextInput class="w-full" placeholder="Country" v-model:input="country" inputType="text"
                        :error="error && error.type == 'country' ? error.message : ''" />

                    <button :disabled="isWorking" type="submit" class="
                        w-full text-white text-[21px] p-1.5 rounded-full bg-gradient-to-r from-[#fe630c] to-[#ff3200] font-semibold
                    ">
                        <div v-if="!isWorking">update address</div>
                        <Icon v-else name="eos-icons:loading" size="25" />
                    </button>
                </form>
            </div>
        </div>
    </MainLayout>
</template>
<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const user = useSupabaseUser()
let contactName = ref(null)
let address = ref(null)
let zipCode = ref(null)
let city = ref(null)
let country = ref(null)

let currentAddress = ref(null)
let isUpdate = ref(false)
let isWorking = ref(false)
let error = ref(null)


watch(async () => {
    currentAddress.value = await useFetch(`/api/prisma/get-address-by-user/${user.value.id}`);
    console.log(currentAddress.value)
    if (currentAddress.value && currentAddress.value.data != null) {
        contactName.value = currentAddress.value.data.name;
        address.value = currentAddress.value.data.address;
        zipCode.value = currentAddress.value.data.zipcode;
        city.value = currentAddress.value.data.city;
        country.value = currentAddress.value.data.country;
        isUpdate.value = true;
    }
    userStore.isLoading = false;
});

const submit = async () => {
    isWorking.value = true;
    error.value = null
    if (!contactName.value) {
        error.value = {
            type: 'contactName',
            message: 'a contact name is required!'
        };
    } else if (!address.value) {
        error.value = {
            type: 'address',
            message: 'an address is required!'
        }
    } else if (!zipCode.value) {
        error.value = {
            type: 'zipCode',
            message: 'a zipCode is required!'
        }
    } else if (!city.value) {
        error.value = {
            type: 'city',
            message: 'a city is required!'
        }
    } else if (!country.value) {
        error.value = {
            type: 'country',
            message: 'a country is required!'
        }
    }

    if (error.value) {
        isWorking.value = false;
        return;
    }

    if (isUpdate.value) {
        await useFetch(`/api/prisma/update-address/${currentAddress.value.data.userId}`, {
            method: 'PATCH',
            body: {
                id: currentAddress.value.id,
                name: contactName.value,
                address: address.value,
                zipcode: zipCode.value,
                city: city.value,
                country: country.value
            }
        });
        isWorking.value = false;
        return navigateTo('/checkout');
    }

    await useFetch(`/api/prisma/add-address`, {
            method: 'POST',
            body: {
                userId: user.value.id,
                name: contactName.value,
                address: address.value,
                zipcode: zipCode.value,
                city: city.value,
                country: country.value
            }
        });
        isWorking.value = false;
        return navigateTo('/checkout');
}
</script>