<template>
    <p>Header</p>
    <div class={Header.headerLinksWraper} v-for="link in links" :key ="link.alt">
        <a :href="link.url">{{ link.title }}</a>

    </div>
</template>

<script>
    import {headerLinks} from "./_config"
    import style from "../../assets/scss/Header.css"
    console.log(headerLinks)
    export default {
        data() {
            return {
                links: headerLinks
            }
        }
    }
</script>