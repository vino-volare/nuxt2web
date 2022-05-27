<template>
    <nav>
        <div>
            <NuxtLink to="/about" class="menu">about</NuxtLink>
            <NuxtLink to="/contact" class="menu">contact</NuxtLink>
        </div>
        <NuxtLink class="home" to="/">
            <img height="100px" width="auto" src="~/assets/img/TokinoVino_white.svg" loading="lazy" />
        </NuxtLink>
    </nav>
</template>

<script>

</script>

<style scoped>
    .home{
        height: 100%;
        padding-left: 8px;
        max-width: 20vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav{
        position: absolute;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 100vw;
    }
    img{
        max-height: 100%;
        max-width: 100%;
    }
    .menu{
        color: inherit;
        text-decoration: none;
        margin: 1rem;
        font-family: 'F1Regular';
    }
    h1{
        size: 3rem;
    }
</style>