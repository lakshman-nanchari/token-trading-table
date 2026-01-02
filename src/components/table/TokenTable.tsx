"use client";

import { useEffect, useState } from "react";
import { mockTokens } from "@/lib/mockTokens";
import TableHeader from "./TableHeader";
import TokenRow from "./TokenRow";
import TokenDetailsModal from "@/components/modals/TokenDetailsModal";
import { Token } from "@/types/token";
import { TokenStatus } from "@/types/token";

type SortKey = "price" | "change24h" | "volume";
type SortOrder = "asc" | "desc";


const tabs: {label: string; value:TokenStatus} [] = [
    {label: "New Pairs", value: "NEW"},
    {label: "Final Stretch", value: "FINAL"},
    {label: "Migrated", value: "MIGRATED"},
];

export default function TokenTable() {
    const [activeTab, setActiveTab] = useState<TokenStatus>("NEW");
    const [sortKey, setSortKey] = useState<SortKey>("price");
    const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
    const [tokens, setTokens] = useState(mockTokens);

    const [selectedToken, setSelectedToken] = useState<Token | null>(null);
    

    useEffect(() => {
    const interval = setInterval(() => {
    setTokens((prev) =>
        prev.map((token) => {
        const change = (Math.random() - 0.5) * 5;
        const newPrice = +(token.price + change).toFixed(2);

        return {
            ...token,
            price: newPrice,
            change24h: +(token.change24h + change / 10).toFixed(2),
            };
         })
        );
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const filteredTokens = tokens
        .filter((token) => token.status === activeTab)
        .sort((a, b) => {
            const valueA = a[sortKey];
            const valueB = b[sortKey];

            if (sortOrder === "asc"){
                return valueA - valueB;
            }
            return valueB - valueA;
        });
    return(
        <div>
            {/*Tabs*/}
            <div className="flex gap-2 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={`px-4 py-2 rounded-md text-sm ${
                            activeTab === tab.value
                                ? "bg-white/10 text-white"
                                : "text-gray-400 hover:text-white"
                        }`}
                        >
                            {tab.label}
                        </button>
                ))}
            </div>

            {/*Table*/}
            <div className="rounded-lg border border-white/10 overflow-hidden">
                <table className="w-full text-sm">
                    <TableHeader
                        sortKey={sortKey}
                        sortOrder={sortOrder}
                        onSort={(key) => {
                            if (sortKey === key){
                                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            }else {
                                setSortKey(key);
                                setSortOrder("desc")
                            }
                        }}
                    />
                    <tbody>
                        {filteredTokens.map((token) => (
                            <TokenRow 
                                key={token.id} 
                                token={token} 
                                onView={(token) => setSelectedToken(token)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>   

            {/*Modal*/}
            <TokenDetailsModal 
                token={selectedToken}
                onClose={() => setSelectedToken(null)}
            />
        </div>
    );
}