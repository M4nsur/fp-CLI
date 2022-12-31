<template>
    <div v-for="item in items" :key="item.id">
        <Card :name="item.name" :role="item.role"/> 
        <Card>
            <template #someTwo>{{item.name}}</template>
            <template #someOne>{{item.name}}</template>
        </Card>
    </div>

</template>

<script>
    import Card from '@/components/UI/CardComp.vue';
    export default {
        components: { Card },
        data() {
            return {
                items: [
                {
                    id: 1,
                    name: "Kai", 
                    role: "sup"
                },
                {
                    id: 2,
                    name: "Kayle",
                    role: "sin"
                }, 
                {
                    id: 3,
                    name: "Viktor",
                    role: "cast"
                }
                ]
            }
        }
    }
</script>