export type TokenStatus = "NEW" | "FINAL" | "MIGRATED";

export interface Token {
    id: string;
    name: string;
    symbol: string;
    price: number;
    chnage24h: number;
    volume: number;
    status: TokenStatus;
}