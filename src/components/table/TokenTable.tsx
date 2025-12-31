"use client";

import { useState } from "react";
import { mockTokens } from "@/lib/mockTokens";
import TableHeader from "./TableHeader";
import TokenRow from "./TokenRow";
import { TokenStatus } from "@/types/token";


const tabs: {label: string; value:TokenStatus} [] = [
    {label: "New Pairs", value: "NEW"},
    {label: "Final Stretch", value: "FINAL"},
    {label: "Migrated", value: "MIGRATED"},
];

export default function TokenTable() {
    const [activeTab, setActiveTab] = useState<TokenStatus>("NEW");

    const filteredTokens = mockTokens.filter(
        (token) => token.status === activeTab
    );

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
                    <TableHeader/>
                    <tbody>
                        {filteredTokens.map((token) => (
                            <TokenRow key={token.id} token={token}/>
                        ))}
                    </tbody>
                </table>
            </div>   
        </div>
    );
}