<template>
    <component v-if="isActive" :is="component"></component>
</template>

<script setup>
import { ref, inject, watch, onActivated, onMounted } from 'vue';
const props = defineProps(['label', 'active', 'id','component','buttonClosedHide'])
const add_tab = inject('add_tab')
const tab_active = inject('tab_get_active')

let isActive = ref(props.active);
let tabIndex = ref(add_tab(props.label, isActive, props.closed));

// Para observar los cambios de una variable
watch(() => tab_active.value, (tab_id) => {
    isActive.value = (tab_id + 1) == tabIndex.value
})
</script>