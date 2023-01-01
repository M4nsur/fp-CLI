<template>
    <div class="cardWraper" v-for="item in items" :key="item.id">
        <Card :urlImg="items.img">
            {{ item.name }}
            {{ item.role }}
            <img :src="item.img" alt="">
        </Card> 
    </div>

</template>

<script>
    import Card from '@/components/UI/CardComp';
    import dataItems from "@/seeders/item"
    export default {
        components: { Card },
        data() {
            return {
                items: dataItems
            }
        }
    }
</script>