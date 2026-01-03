import { Token } from "@/types/token";

export const mockTokens: Token[] = [
  // NEW
  { id: "1", name: "Ethereum", symbol: "ETH", price: 2452.88, change24h: 2.11, volume: 12400000, status: "NEW" },
  { id: "2", name: "Solana", symbol: "SOL", price: 98.06, change24h: -2.18, volume: 8400000, status: "NEW" },
  { id: "3", name: "Avalanche", symbol: "AVAX", price: 35.49, change24h: 3.11, volume: 5100000, status: "NEW" },
  { id: "4", name: "Sui", symbol: "SUI", price: 1.9, change24h: 5.07, volume: 3900000, status: "NEW" },
  { id: "5", name: "Celestia", symbol: "TIA", price: 14.82, change24h: -1.04, volume: 2200000, status: "NEW" },
  { id: "6", name: "Injective", symbol: "INJ", price: 38.12, change24h: 4.66, volume: 6400000, status: "NEW" },

  // FINAL
  { id: "7", name: "Arbitrum", symbol: "ARB", price: 1.23, change24h: 4.78, volume: 12500000, status: "FINAL" },
  { id: "8", name: "Optimism", symbol: "OP", price: 2.41, change24h: -1.32, volume: 6800000, status: "FINAL" },
  { id: "9", name: "Aptos", symbol: "APT", price: 8.92, change24h: 0.64, volume: 4700000, status: "FINAL" },
  { id: "10", name: "Near Protocol", symbol: "NEAR", price: 6.15, change24h: -0.87, volume: 5300000, status: "FINAL" },
  { id: "11", name: "Sei", symbol: "SEI", price: 0.68, change24h: 3.92, volume: 2600000, status: "FINAL" },
  { id: "12", name: "Mantle", symbol: "MNT", price: 0.61, change24h: -0.42, volume: 3100000, status: "FINAL" },

  // MIGRATED
  { id: "13", name: "Polygon", symbol: "MATIC", price: 0.72, change24h: -1.02, volume: 4300000, status: "MIGRATED" },
  { id: "14", name: "Fantom", symbol: "FTM", price: 0.54, change24h: 2.11, volume: 2800000, status: "MIGRATED" },
  { id: "15", name: "Celo", symbol: "CELO", price: 0.63, change24h: 1.26, volume: 1900000, status: "MIGRATED" },
  { id: "16", name: "Harmony", symbol: "ONE", price: 0.019, change24h: -0.45, volume: 1700000, status: "MIGRATED" },
  { id: "17", name: "Zilliqa", symbol: "ZIL", price: 0.028, change24h: 0.88, volume: 1500000, status: "MIGRATED" },
  { id: "18", name: "Qtum", symbol: "QTUM", price: 3.12, change24h: -1.94, volume: 1200000, status: "MIGRATED" },
];
