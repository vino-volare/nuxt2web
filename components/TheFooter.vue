<template>
    <footer>
        <NuxtLink class="link" to="/">
            <small>&copy; 2022 TokinoVino</small>
        </NuxtLink>
    </footer>
</template>

<script>

</script>

<style scoped>
    small{
        padding-top: 20px;
        display: block;
        text-align: center;
        width: 100%;
        font-family: 'F1Regular';
    }
    footer{
        color: white;
        border-top: 1px rgb(219, 219, 219) solid;
        background-color: black;
        height: 100px;
    }
    .link{
        color: inherit;
        text-decoration: none;
    }
</style>