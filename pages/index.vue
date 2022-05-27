<template>
    <main>
        <p>アマチュアイラストレーター</p>
        <nav>
            <h2>SOCIAL</h2>
            <div class="list">
                <a class="link" href="https://twitter.com/VinoVolare" target="_blank">
                    <img src="~/assets/img/Twitter social icons - square - white.svg" loading="lazy">
                </a>
                <a class="link" href="https://www.pixiv.net/users/24802125" target="_blank">
                    <nuxt-img 
                    src="v1653036064/website/static/logo_icon_euqxh2.png"
                    sizes="xs:100px sm:150px"
                    format="webp"
                    provider="cloudinary"
                    />
                </a>
                <a class="link" href="https://www.youtube.com/channel/UCP-bXu2xtY2GqDdAKk_ys4w" target="_blank">
                    <nuxt-img 
                    src="v1653602193/website/static/youtube_social_square_dark_geudg8.png"
                    sizes="xs:100px sm:150px"
                    format="webp"
                    provider="cloudinary"
                    />
                </a>
                <a class="link" href="https://www.twitch.tv/tokino_ch" target="_blank">
                    <img src="~/assets/img/TwitchGlitchWhite.svg" loading="lazy">
                </a>
            </div>
        </nav>
    </main>
</template>

<script>
export default {
  layout: 'home',
}
</script>

<style scoped>
  main{
      flex: 1;
      background-color: rgb(32, 32, 32);
  }
img{
    max-width: 100%;
}
nav{
    padding-top: 16px;
}
.link{
    display: block;
    width: 100%;
    height: fit-content;
}
.list{
    display: flex;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
}
h2{
    font-family: 'F1Bold';
    width: 100vw;
    text-align: center;
}
p{
    width: 100vw;
    text-align: center;
    padding: 8px;
}
@media screen and (min-width:600px) {
    .list{
        padding-left: calc((100vw - 600px) / 2);
        padding-right: calc((100vw - 600px) / 2);
    }
}
</style>