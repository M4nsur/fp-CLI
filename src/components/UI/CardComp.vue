<template>
    <div v-if="img">
        <img src="img" alt="1">
    </div>
    <slot></slot>
</template>

<script>
        export default {
        props: {
            img: {
                type: String
            }
        }
    };
</script>