<template>
    <div class="banner">
       <img class="banner__img" src="../../assets/fondo.jpg" alt="">
       <h1 class="banner__title">Bienvendo a mi tienda</h1>
       <div class="banner__copy">
        <p class="banner__copy__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus est tempora rerum quidem non rem. Fuga nobis veniam dicta! Est esse, doloremque labore voluptatem consectetur blanditiis veritatis laudantium eligendi iusto.
        </p>
       </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style lang="scss" scoped>
@import "../../scss/_config.scss";

.banner{
    text-align: center;
    &__img{
        width: 100%;
        height: 200px;
        @media screen and (min-width: 720px) {
            height: 400px;
        }
    }
    &__title{
        font-family: $ff-1;
        color: $color-3;
    }
    &__copy{
        padding: 1em;
        background: $color-3;
        @media screen and (min-width: 720px) {
            margin: 2em;
        }
        &__text{
            font-size: 12px;
            font-family: $ff-3;
            color: $color-4;
        }
    }
}
</style>