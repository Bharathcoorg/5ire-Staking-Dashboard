// SPDX-License-Identifier: Apache-2.0
import { Networks } from 'types';
import { DEFAULT_PARAMS } from 'consts';
import { ReactComponent as CereLogoSvg } from 'img/cere_logo.svg';
import { ReactComponent as CereIconSvg } from 'img/cere_icon.svg';

const cereMainnet = {
  name: 'Thunder Testnet',
  colors: {
    primary: {
      light: '#1D1B20',
      dark: 'rgb(183, 174, 255)',
    },
    secondary: {
      light: '#Ec8f6e',
      dark: '#Ec8f6e',
    },
    transparent: {
      light: 'rgb(236,110,121,0.05)',
      dark: 'rgb(236,110,121, 0.05)',
    },
  },
  endpoint: 'wss://wss-testnet.5ire.network/',
  subscanEndpoint: '',
  cereStatsEndpoint: 'ws://localhost:8082/v1/graphql',
  unit: '5IRE',
  units: 18,
  ss58: 42,
  // It's a draft icons set
  brand: {
    icon: CereIconSvg,
    logo: {
      svg: CereLogoSvg,
      width: '8.5rem',
    },
    inline: {
      svg: CereIconSvg,
      size: '1.15rem',
    },
  },
  api: {
    unit: '5IRE',
    priceTicker: '5IREUSDT',
  },
  features: {
    pools: false,
  },
  params: DEFAULT_PARAMS,
};

// Determine if the testnet should be included based on the REACT_APP_INCLUDE_TESTNET environment variable
// By default, includeTestnet is true or undefined unless REACT_APP_INCLUDE_TESTNET is explicitly set to 'false'
const includeTestnet = process.env.REACT_APP_INCLUDE_TESTNET !== 'true';

/*
 * Network Configuration
 */
export const NETWORKS: Networks = {
  cereMainnet,
};
