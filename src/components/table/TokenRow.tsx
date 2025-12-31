import { Token } from "@/types/token";

interface Props {
    token: Token;
}

export default function TokenRow({token}: Props) {
    const isPositive = token.chnage24h >= 0;

    return (
        <tr className="border-t border-white/10 hover:bg-white/5 transition">
            <td className="px-4 py-3 text-left w-[40%]">
                <div className="font-medium">{token.name}</div>
                <div className="text-ts text-gray-400">{token.symbol}</div>
            </td>

            <td className="px-4 py-3 text-right w-[20%]">
                ${token.price.toFixed(2)}
            </td>

            <td
                className={`px-4 py-3 text-right w-[20%] ${
                    isPositive ? "text-green-400" : "text-red-400"
                }`}
            >
                {isPositive ? "+" : "" }
                {token.chnage24h}%
            </td>

            <td className="px-4 py-3 text-right w-[20%]">
                ${token.volume.toLocaleString()}
            </td>
        </tr>
    );
}