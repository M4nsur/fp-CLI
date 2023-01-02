<template>
    <div v-if="imgUrl" class="cardWraper">
            <img :src="imgUrl" alt="1">
            <div><slot></slot></div> 
        <router-link v-if="link" :to="link">
            Почитать биографию
        </router-link>
    </div>
</template>

<script>
        export default {
        props: {
            imgUrl: {
                type: String
            },
            link: {
                type: String
            }
        }
    };
</script>