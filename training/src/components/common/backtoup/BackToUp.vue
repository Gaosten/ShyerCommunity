<template>
    <div class="top">
        <div @click="onClick" class="back-to-top" v-show="isOpened"><lottie :options="defaultOptions" :height="80" :width="80" v-on:animCreated="handleAnimation" /></div>
    </div>
</template>

<script>
import up from "../../../assets/lottie/up.json";
export default {
    data() {
        return {
            isOpened: false,
            isScrolling: false,
            timer: null,
            defaultOptions: { animationData: up},
            animationSpeed: 1,
            anim: {},
            
        };
    },

    methods: {
        getScrollTop() {
            // 兼容不同的浏览器

            return (
                document.documentElement.scrollTop ||
                window.pageYOffset ||
                document.body.scrollTop
            );
        },

        setScrollTop(val) {
            document.documentElement.scrollTop &&
                (document.documentElement.scrollTop = val);
            window.pageYOffset && (window.pageYOffset = val);
            document.body.scrollTop && (document.body.scrollTop = val);
        },

        onScroll() {
            const scrollTop = this.getScrollTop();
            this.isOpened = scrollTop > 2600;
        },

        onClick() {
            if (this.isScrolling) {
                return;
            }

            this.isScrolling = true;

            // 50px/17ms速度实现滚动
            this.timer = setInterval(() => {
                let scrollTop = this.getScrollTop();
                scrollTop = scrollTop - 120;

                this.setScrollTop(scrollTop > 0 ? scrollTop : 0);

                if (scrollTop <= 0) {
                    clearInterval(this.timer);
                    this.isScrolling = false;
                }
            }, 17);
        }
    },

    mounted() {
        window.addEventListener("scroll", this.onScroll);
    }
};
</script>

<style scoped>




.back-to-top {
    position: fixed;
    z-index: 9999;
    right: 2.5%;
    bottom: 2.5%;
    cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 50%;
 
}

.back-to-top:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
</style>