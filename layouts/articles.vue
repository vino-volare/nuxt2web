<template>
    <div>
        <header>
            <TheHeader />
        </header>
        <Nuxt />
        <TheFooter />
    </div>
</template>
<script>
</script>
<style scoped>
    div{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    header{
        height: 100px;
        background-color: rgb(0, 0, 0);
    }
</style>