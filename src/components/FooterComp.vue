<template>
    <div  class="footerWraper" >
        <div>Footer</div>
        <div class="iconsWrap">
            <div class="footerIcons" v-for="icon in icons" :key="icon.alt">
            {{ icon.title }}
        </div>
        </div>
    </div>
</template>

<script>
    import {footerContent} from "./_config"
    export default {
        data() {
            return {
                icons: footerContent
            }
        }
    }
</script>