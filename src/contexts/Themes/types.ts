// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface ThemeContextInterface {
  toggleTheme: (str?: string) => void;
  toggleCard: (c: string) => void;
  mode: string;
  card: string;
}
