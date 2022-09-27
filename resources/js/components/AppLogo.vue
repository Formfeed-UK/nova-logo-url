<template>
  <img v-if="logoIsUrl" :src="logoUrl" alt="Logo" :class="logoClass" />
  <NovaAppLogo v-else v-bind="$props" :class="logoClass" />
</template>

<script>

import NovaAppLogo from "@/components/AppLogo";

export default {

    components: {
        NovaAppLogo: NovaAppLogo,
    },
    extends: NovaAppLogo,

    mounted() {
        if (this.logoHasLink) {
            let parent = this.$el.parentElement;
            if (parent.nodeName == "A") {
                parent.setAttribute("href", this.logoLink);
                parent.parentNode.replaceChild(parent.cloneNode(true), parent);
            }
        }
    },

    computed: {
        logoIsUrl() {
            return (Nova.appConfig.logoUrl) ? true : false;
        },

        logoHasLink() {
            return (Nova.appConfig.logoLink) ? true : false;
        },

        logoUrl() {
            if (this.logoIsUrl) {
                return Nova.appConfig.logoUrl;
            }
        },

        logoLink() {
            if (this.logoHasLink) {
                return Nova.appConfig.logoLink;
            }
        },

        logoClass() {
            if (Nova.appConfig.logoClass) {
                return Nova.appConfig.logoClass;
            }
            return this.$attrs.class;
        },
    }

}
</script>
