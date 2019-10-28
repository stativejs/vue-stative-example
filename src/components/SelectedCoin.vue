<template>
  <div v-if="selectedCoin">
    <a-row>
      <a-col>
        <a-card :bordered="false">
          <h1 :style="{ margin: 0 }">{{ selectedCoin.name }}</h1>
          <a-divider type="vertical"></a-divider>
          <h1 :style="{ marginBottom: 0, marginLeft: '15px' }">
            ${{ selectedCoin.close.toFixed(2) }}
          </h1>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  subscribeTo: ['selectedCoin']
};
</script>
<style scoped>
h1 {
  float: left;
}
</style>
