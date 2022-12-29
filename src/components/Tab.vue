<template>
    <div v-show="isActive">
        <slot/>
    </div>
</template>

<script setup>
import { ref, inject, watch } from 'vue';
const props = defineProps(['label', 'active', 'id'])
const add_tab = inject('add_tab')
const tab_active = inject('tab_get_active')

let isActive = ref(typeof props.active == 'string');
let tabIndex = ref(add_tab(props.label, isActive));

// Para observar los cambios de una variable
watch(() => tab_active.value, (tab_id) => {
    isActive.value = (tab_id+1) == tabIndex.value
})
</script>