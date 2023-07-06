<template>
    <div v-if="producto" class="producto grid-x grid-margin-x">
        <div class="small-12 medium-7">
            <img class="producto__img" :src="producto.main_image">
            <div class="producto__imgs">
                <img class="producto__imgs__img" :src="producto.second_image">
                <img class="producto__imgs__img" :src="producto.third_image">
            </div>
        </div>
        <div class="small-12 medium-5">
            <h3 class="producto__title">{{producto.name}}</h3>   
            <p class="producto__categorias">
                <span
                    class="producto__categorias__categoria"
                    v-for="categoria in producto.category"
                    :key="categoria.id">
                    {{categoria.name}}
                </span>
            </p>
            <p class="producto__colores">
                <span 
                    class="producto__colores__color"
                    v-for="color in producto.colors"
                    :key="color.id"
                    :style="{background: color.value}">
                </span>
            </p>
            <p class="producto__price">
                $ {{ producto.price }}
            </p>
            <p class="producto__price__visits">
                 Visitas: {{ producto.visits }}
            </p>
        </div>
        <div class="small-6 medium-4 large-3">
            <p class="producto__description" v-html="producto.description"></p>
        </div>
    </div>
</template>

<script>
import apiProductos from '@/api/productos'

    export default {
        name: 'ProductoDetail',
        data() {
            return {
                producto: null
            }
        },
        methods: {
            recuperarProducto: function(){
                apiProductos.recuperarProducto(this.$route.params.id).then(
                    (response) => {
                        this.producto = response.data
                    }
                )
            }
        },
        beforeMount(){
            this.recuperarProducto()
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/_config.scss";
.producto{
    &__img{
        width: 100%;
        height: 300px;
        margin-bottom: 10px;
        padding: 25px;
    }
    &__imgs{
        display: flex;
        justify-content: center;
        align-items: center;
        &__img{
            width: 100px;
            height: 100px;
            margin: 5px;
        }
    }
    &__title{
        font-family: $ff-1;
        font-size: 20px;
        color: $color-2;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    &__categorias{
        border: 1px solid;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 1em;
        &__categoria{
            color: $color-3;
            display: block;
            margin: 5px;
        }
    }
    &__colores{
        border: 1px solid $color-1;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 1em;
        display: flex;
        &__color{
            width: 30px;
            height: 30px;
            border: 1px solid $color-3;
            margin: 5px;
        }
    }
    &__price{
        font-size: 26px;
        color: $color-2;
        font-weight: bold;
        font-family: $ff-2;        
    }
    &__description{
        border: 1px solid;
        margin-top: 1em;
        margin: 50px;
    }
}
</style>