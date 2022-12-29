<template>
    <div class="headerWraper">
    <router-link to="/">Header</router-link>
    <div class="headerLinks">
        <div v-for="link in links" :key ="link.alt">
            <router-link :to="link.url">{{ link.title }}</router-link>
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