<template>
    <div id="AuthPage" class="w-full h-[100vh] bg-white">
        <div class="flex items-center w-full justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/AliExpress-logo.png">
            </NuxtLink>
        </div>
        <div class="max-w-[400px] mx-auto px-2">
            {{ user }}
            <h1 class="text-center my-6">Login / register</h1>
            <button 
                @click="login('google')"
                class="
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    p-1.5
                    w-full 
                    border 
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
            <img src="/google-logo.png" class="w-full max-w-[20px]">
            <p>Google</p>
        </button>
        <button 
                @click="login('github')"
                class="
                my-2
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    p-1.5
                    w-full 
                    border 
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
            <img src="/github-logo.png" class="w-full max-w-[20px]">
            <p>Github</p>
        </button>
        </div>
    </div>
</template>
<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
watchEffect(()=> {
    if(user.value){
        return navigateTo('/')
    }
});
const login = async (prov)=> {
    const {data, error } = await client.auth.signInWithOAuth({
        provider: prov
    })
}
</script>