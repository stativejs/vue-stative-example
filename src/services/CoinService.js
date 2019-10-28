import state from 'stative';
import axios from 'axios';

class CoinService {
  async getCoins() {
    state.set('loading', true);
    const coins = (await axios.get('https://api.coinpaprika.com/v1/coins'))
      .data;
    state.set('coins', coins.slice(0, 500));
    state.set('loading', false);
  }

  async getCoin(coinId) {
    state.set('loading', true);
    const coins = state.get('coins');
    const selectedCoin = coins.find(c => c.id === coinId);
    const coinOhlc = (await axios.get(
      `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/latest/`
    )).data[0];
    state.set('selectedCoin', { ...selectedCoin, ...coinOhlc });
    state.set('loading', false);
  }
}

export default new CoinService();
