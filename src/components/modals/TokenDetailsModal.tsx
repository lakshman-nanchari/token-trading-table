"use client";

import { Token } from "@/types/token";

interface Props {
    token:Token | null;
    onClose: () => void;
}

export default function TokenDetailsModal({token, onClose}: Props) {
    if (!token) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="w-full max-w-md rounded-lg bg-[#0b0f41] p-6 text-white">
                <h2 className="text-lg font-semibold mb-4">
                    {token.name} ({token.symbol})
                </h2>

                <div className="space-y-2 text-sm">
                    <div>Price: ${token.price.toFixed(2)}</div>
                    <div>24h Change: {token.change24h}%</div>
                    <div>Volume: ${token.volume.toLocaleString()}</div>
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 w-full rounded-md bg-white/10 px-4 py-2 hover:bg-white/20"
                >
                    Close 
                </button>
            </div>
        </div>
    );
}