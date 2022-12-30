<template>
    <div class="menuitem">
        <li>
            <slot></slot>
        </li>
    </div>
</template>

<style scoped>
.menuitem {
    padding: 5px;
    margin: 5px;
    margin-right: 10px;
    cursor: pointer;
}

.menuitem:hover {
    background-color: #202020;
    border-radius: 5px;
}
</style>