<template>
    <Menubar>
        <MenuItem>File</MenuItem>
        <MenuItem>Help</MenuItem>
    </Menubar>

    <Tabs>
        <Tab v-for="(c,i) in TabComponents" :key="i"
        :label="c.label" :active="c.active" :component="c.component" :buttonClosedHide="c.buttonClosedHide"></Tab>
    </Tabs>
</template>

<script setup>
    import Tabs from './components/ui/Tabs.vue'
    import Tab from './components/ui/Tab.vue'
    import Menubar from './components/ui/Menubar.vue'
    import MenuItem from './components/ui/MenuItem.vue'
    import CanvasViewport from './components/CanvasViewport.vue'

    let TabComponents = [
        {label:"Viewport", active:true, buttonClosedHide:true, component:CanvasViewport},
        {label:"Sprites Editor", active:false, component:CanvasViewport},
        {label:"None", active:false, component:CanvasViewport},
    ]
</script>
