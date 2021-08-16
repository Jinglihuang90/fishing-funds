import { SYNC_COINS_CONFIG, SYNC_COINS, SET_COINS_LOADING } from '@/actions/coin';
import { Reducer } from '@/reducers/types';
import * as Helpers from '@/helpers';

export interface CoinState {
  coins: (Coin.ResponseItem & Coin.ExtraRow)[];
  coinsLoading: boolean;
  config: {
    coinConfig: Coin.SettingItem[];
    codeMap: Helpers.Coin.CodeCoinMap;
  };
}

const coin: Reducer<CoinState> = (
  state = {
    coins: [],
    coinsLoading: false,
    config: Helpers.Coin.GetCoinConfig(),
  },
  action
) => {
  switch (action.type) {
    case SET_COINS_LOADING:
      return {
        ...state,
        coinsLoading: action.payload,
      };
    case SYNC_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    case SYNC_COINS_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
};
export default coin;