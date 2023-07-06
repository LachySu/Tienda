<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
        <h1 class="cell title">Lista de Productos</h1>
        <productos-populares />
    </div>
  </div>
</template>

<script>
import ProductosPopulares from '@/components/productos/ProductosPopulares.vue';

export default {
    name: 'ProductosPage',
    components: {
        ProductosPopulares
    }
}
</script>

<style lang="scss" scoped>
@import "../../scss/_config.scss";

 .title{
    font-family: $ff-2;
    text-align: center;
 }
</style>