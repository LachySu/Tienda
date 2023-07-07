<template>
  <div class="header">
    <router-link 
      class="header__logo"
      :to="{name: 'home'}">
      Mi Catalogo
    </router-link>
    <ul class="header__menu">
      <li class="header__menu__item">
        <router-link 
          class="header__menu__item__link" 
          :to="{name: 'productos'}">
          Productos
        </router-link>
      </li>
      <li class="header__menu__item">
        <router-link 
          class="header__menu__item__link" 
          :to="{name: 'categorias', params:{'category': ' '}}"> 
          Categorias
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import styles from '@/scss/styles.scss';

export default {
    name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
@import "../../scss/_config.scss";
 .header{
  background: $color-3;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  &__logo{
    color: $color-2;
    font-family: $ff-1;
    font-size: 30px;
    text-decoration: none;
    padding-left: 5px;
  }
  &__menu{
    display: flex;
    list-style: none;
    &__item{
      margin: 5px;
      &__link{
        display: block;
        text-decoration: none;
        color: $color-2;
        font-family: $ff-1;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
 }
</style>