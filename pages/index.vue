<template>
    <main>
        <p>アマチュアイラストレーター</p>
        <nav>
            <h2>SOCIAL</h2>
            <div class="list">
                <a class="link" href="https://twitter.com/VinoVolare" target="_blank">
                    <img src="~/assets/img/Twitter social icons - square - blue.svg" loading="lazy">
                </a>
                <a class="link" href="https://www.pixiv.net/users/24802125" target="_blank">
                    <img :src="pixivSrc"
                    loading="lazy">
                </a>
                <a class="link" href="https://www.youtube.com/channel/UCP-bXu2xtY2GqDdAKk_ys4w" target="_blank">
                    <img :src="youtubeSrc"
                    loading="lazy">
                </a>
                <a class="link" href="https://www.twitch.tv/tokino_ch" target="_blank">
                    <img src="~/assets/img/TwitchGlitchPurple.svg" loading="lazy">
                </a>
            </div>
        </nav>
    </main>
</template>

<script>
export default {
  layout: 'home',
    data(){
      return{
          pixivSrc: this.$cloudinary.image.url(
              'website/static/logo_icon_euqxh2.png',
              {
                  quality: 'auto',
                  width: '150',
              }
          ),
          youtubeSrc: this.$cloudinary.image.url(
            'website/static/youtube_social_square_red_fn8a06.png',
            {
              quality: 'auto',
              width: '150',
            }
          )
      }
  }
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