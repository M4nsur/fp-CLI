<template>
    <div class="cardWraper" v-if="item">
            <div><img :src="item.img" alt=""></div>
            <div>
                {{ item.name }}
                {{ item.role }}
            </div>
        <div><router-link to="/">Назад</router-link></div>
    </div>
    
</template>

<script>
    import items from "@/seeders/item"
    export default {
        data() {
            return {
                item: null
            }
    },
    created() {
        const alies = this.$route.params.itemAlias
        const item = items.find(el => el.alies === alies)
        this.item = item
    }
    }
</script>