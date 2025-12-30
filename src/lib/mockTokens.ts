import { Token } from "@/types/token";

export const mockTokens: Token[] = [
    {
        id: "1",
        name: "Ethereum",
        symbol: "ETH",
        price: 2450.32,
        chnage24h: 1.8,
        volume: 1200000,
        status: "NEW",
    },
    {
        id: "2",
        name: "Solana",
        symbol: "SOL",
        price: 98.46,
        chnage24h: -0.9,
        volume: 980000,
        status: "FINAL",
    },
    {
        id: "3",
        name: "Polygon",
        symbol: "MATIC",
        price: 0.85,
        chnage24h: 12.5,
        volume: 450000,
        status: "MIGRATED",
    }
];