<template>
    <div v-for="item in items" :key="item.id">
        <Card :imgUrl="item.img" :link="item.alies">
            {{ item.name }}
            {{ item.role }}
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