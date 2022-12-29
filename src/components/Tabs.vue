<template>
    <div class="tabs w-full h-full">
        <div class="tabs-child-content flex pt-2">
            <!-- Tab -->
            <div class="tab flex justify-center content-center p-2 relative" v-for="(tab, tabIndex) in tabs"
                :key="tabIndex" :class="{ active: tab.active }" @click="active_tab(tabIndex)">
                <label for="">{{ tab.label }}</label>
                <button class="button-x right-0 flex items-baseline justify-center rounded"
                    @click="on_tab_close(tabIndex)">x</button>
            </div>
        </div>
        <div class="content-active w-full h-full">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
// TODO:
// [] Cuando borramos un tab no se borra su elemento content.

import { ref, provide } from 'vue';

let tabs = ref([]);
let activeTabIndex = ref(0);

provide('add_tab', (label, active = false) => {
    return tabs.value.push({ label: label, active: active })
})

provide('tab_get_active', activeTabIndex)

function active_tab(i) {
    tabs.value.forEach(e => e.active = false);
    tabs.value[i].active = true
    activeTabIndex.value = i
}

function on_tab_close(i) {
    tabs.value.splice(i, 1)
    const index = (i - 1)
    active_tab( index.max(index, 0) )
}

</script>

<style>
.tabs {}

.tabs .content-active {
    background-color: #242424;
}

.tab {
    color: white;
    height: 40px;
    background-color: #151515;
    color: #828282;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    min-width: fit-content;
}

.tab label {
    pointer-events: none;
    user-select: none;
}

.tab.active {
    background-color: #242424;
    color: #d4d4d4;
}

.tab .button-x {
    margin-left: 7px;
    width: 25px;
    height: 25px;
    border-radius: 8px;
    outline: none;
}

.tab.active .button-x {
    color: rgb(214, 214, 214);
    background-color: transparent;
}

.tab .button-x:hover {
    background-color: #424141;
}
</style>