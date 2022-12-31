<template>
    <div>
    <slot name="someOne"></slot>
        {{ name }}
        {{ role }}
    <slot name="someTwo"></slot>
    </div>
    
</template>

<script>
        export default {
        props: {
            name: {
                type: String,
            }, 
            role: {
                type: String,
            }
        }
    };
</script>