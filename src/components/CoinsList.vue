<template>
  <div>
    <a-row :gutter="8">
      <a-col
        v-for="coin in coins"
        :key="coin.id"
        :span="4"
        :style="{ padding: '4px' }"
      >
        <a-card hoverable :bordered="false" @click="selectCoin(coin.id)">
          {{ coin.name }}
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import coinService from '@/services/CoinService';

export default {
  subscribeTo: ['coins'],
  async created() {
    coinService.getCoins();
  },
  methods: {
    selectCoin(coinId) {
      coinService.getCoin(coinId);
    }
  }
};
</script>
