<template>
  <div>
    <img v-if="logoIsUrl" :src="logoUrl" alt="Logo" class="image-logo" :class="logoClass" />
    <img v-if="darkLogoIsUrl" :src="logoUrlDark" alt="Logo" class="image-logo-dark" :class="logoClass" />
    <NovaAppLogo v-if="!logoIsUrl && !darkLogoIsUrl" v-bind="$props" :class="logoClass" />
  </div>
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

        darkLogoIsUrl() {
            return (Nova.appConfig.logoUrlDark) ? true : false;
        },

        logoHasLink() {
            return (Nova.appConfig.logoLink) ? true : false;
        },

        logoUrl() {
            return this.logoIsUrl ? Nova.appConfig.logoUrl : "";
        },

        logoUrlDark() {
            return this.darkLogoIsUrl ? Nova.appConfig.logoUrlDark :"";
        },

        logoLink() {
            return this.logoHasLink ? Nova.appConfig.logoLink : "";
        },

        logoClass() {
            let classes = this.$attrs.class;

            if (Nova.appConfig.logoClass) {
                classes = Nova.appConfig.logoClass;
            }
            
            if (this.darkLogoIsUrl) {
                classes += " theme-switch";
            }

            return classes;

        },
    }

}
</script>

<style scoped>

    .image-logo-dark.theme-switch {
        display: none;
    }

    html.dark .image-logo.theme-switch {
        display: none;
    }

    html.dark .image-logo-dark.theme-switch {
        display: block;
    }

</style>
