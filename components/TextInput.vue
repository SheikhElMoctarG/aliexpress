<template>
    <div>
        <ClientOnly>
            <input type="text"
                class="w-full bg-white border text-sm border-[#eff0eb] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
                :placeholder="placeholder" :maxlength="max" @focus="isFocused = true" @blur="isFocused = false"
                :class="{ 'border-gray-900': isFocused }, { 'border-red-500': error }" :type="inputType" v-model="inputComputed"
                autocomplete="off">
        </ClientOnly>
        <span v-if="error" class="text-red-500 font-semibold text-sm">
            {{ error }}
        </span>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:input'])
const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error'])
const { input, placeholder, max, inputType, error } = toRefs(props)
let isFocused = ref(false)
const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})
</script>