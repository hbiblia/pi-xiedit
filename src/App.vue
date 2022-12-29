<template>
    <Tabs>
        <Tab label="Viewport - Default" active><CanvasViewport/></Tab>
        <Tab label="Code - Main.js"></Tab>
        <Tab label="SpritesEditor"></Tab>
    </Tabs>
    <!-- <Toolbar />
    <CanvasViewport/> -->
</template>

<script setup>
    import Tabs from './components/Tabs.vue'
    import Tab from './components/Tab.vue'
    import Toolbar from './components/Toolbar.vue'
    import CanvasViewport from './components/CanvasViewport.vue'
</script>
