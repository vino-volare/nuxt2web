<template>
    <div>
        <header>
            <img class="bg" :src="src" loading="lazy">
            <h1 class="title">Tokino Vino<img src="~/assets/img/TokinoVino_word_only.svg" loading="lazy"></h1>
            <TheHeader />
        </header>
        <Nuxt />
        <TheFooter />
    </div>
</template>
<script>
export default {
    data(){
        return{
            src: this.$cloudinary.image.url(
                'website/static/%E3%81%B0%E3%81%A3%E3%81%A6%E3%82%93%E6%98%9F%E5%B7%9D_%E5%AE%8C%E6%88%90%E5%93%81_%E8%89%B2%E5%8F%8E%E5%B7%AEver_wgxmcn.png',
                {
                    quality: 'auto',
                }
            )
        }
    }
}
</script>
<style scoped>
    div{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    header{
        width: 100%;
        height: 300px;
        position: relative;
        overflow: hidden;
    }
    header::before{
        content: "";
        position: absolute;
        top: 0;
        height: 300px;
        width: 100vw;
        background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgb(0, 0, 0) 100%);
        backdrop-filter: blur(6px);
    }
    header .bg{
        width: 100%;
        height: auto;
        max-width: inherit;
        position: absolute;
        top: -30%;
        left: 0;
        z-index: -1;
    }
    header .title{
        text-align: center;
        font-family: 'F1Wide';
        font-size: 20px;
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        color: black;
        white-space: pre;
        padding-left: 32px;
        padding-right: 32px;
    }
    header .title img{
        padding-bottom: 48px;
        width: 100%;
        max-width: 400px;
    }
</style>