<template>
  <a-spin :spinning="loading">
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header>
        <h1>Coins</h1>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <div
          :style="{
            padding: '24px',
            minHeight: '280px',
            marginTop: '16px'
          }"
        >
          <SelectedCoin v-if="selectedCoin"></SelectedCoin>
          <CoinsList
            :style="{
              marginTop: '16px'
            }"
          ></CoinsList>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Vue Stative Example App ©2019 Created by Alan Castro
      </a-layout-footer>
    </a-layout>
  </a-spin>
</template>

<script>
import CoinsList from './components/CoinsList.vue';
import SelectedCoin from './components/SelectedCoin.vue';

export default {
  subscribeTo: ['selectedCoin', 'loading'],
  name: 'App',
  components: {
    CoinsList,
    SelectedCoin
  }
};
</script>

<style scoped>
h1 {
  color: white;
}

#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
