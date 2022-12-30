<template>
    <div class="menubar">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<style scoped>
.menubar {
    background-color: #151515;
    color: #828282;
    height: 35px;
    z-index: 9;
    position: relative;
}

.menubar ul {
    display: flex;
}
</style>