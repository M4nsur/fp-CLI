<template>
    <div class="headerWraper">
    <span>Header</span>
    <div class="headerLinks">
        <div v-for="link in links" :key ="link.alt">
            <a :href="link.url">{{ link.title }}</a>
        </div>
    </div>
    </div>


</template>

<script>
    import {headerContent} from "./_config"
    export default {
        data() {
            return {
                links: headerContent
            }
        }
    }
</script>