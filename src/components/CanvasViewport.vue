<template>
    <div class="canvas-viewport w-full h-full" id="canvas-viewport">
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as PIXI from 'pixi.js'
import logo from './../assets/logo.png'

onMounted(async () => {
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application({ background: '#1099bb', resizeTo:window});

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    document.getElementById('canvas-viewport').appendChild(app.view);

    const container = new PIXI.Container();

    app.stage.addChild(container);

    // Create a new texture
    const texture = PIXI.Texture.from(logo);

    // // Create a 5x5 grid of bunnies
    // for (let i = 0; i < 25; i++) {
        const bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
    //     bunny.x = (i % 5) * 40;
    //     bunny.y = Math.floor(i / 5) * 40;
        container.addChild(bunny);
    // }

    // // Move container to the center
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;

    // // Center bunny sprite in local container coordinates
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;

    // Listen for animate update
    app.ticker.add((delta) => {
        // rotate the container!
        // use delta to create frame-independent transform
        container.rotation -= 0.01 * delta;
    });
})
</script>