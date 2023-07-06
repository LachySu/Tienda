<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 medium-2 large-3">
                <the-lista-categorias /> 
            </div>
            <div class="cell small-12 medium-10 large-9">
                <the-lista-colores />
                <producto-por-categoria-page />
            </div>
        </div>
    </div>
</template>

<script>
import TheListaCategorias from '@/components/categorias/TheListaCategorias.vue';
import TheListaColores from '@/components/categorias/TheListaColores.vue';
import ProductoPorCategoriaPage from '../productos/ProductoPorCategoriaPage.vue';

    export default {
        name: 'CategoriasPage',
        components: {
            TheListaCategorias,
            TheListaColores,
                ProductoPorCategoriaPage
        }
    }
</script>

<style lang="scss" scoped>

</style>