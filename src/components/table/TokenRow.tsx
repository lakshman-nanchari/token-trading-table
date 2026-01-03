import { useEffect, useState } from "react";
import { Token } from "@/types/token";
import RowActions from "./RowActions";
import { formatVolume } from "@/lib/format";
import TokenIcon from "./TokenIcon";

interface Props {
  token: Token;
  onView: (token: Token) => void;
}

export default function TokenRow({ token, onView }: Props) {
  const isPositive = token.change24h >= 0;
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    setFlash(token.change24h >= 0 ? "up" : "down");

    const timeout = setTimeout(() => setFlash(null), 300);
    return () => clearTimeout(timeout);
  }, [token.price]);

  return (
    <tr className="h-[44px] text-[12px] leading-[14px] hover:bg-white/[0.025] transition-colors">
      {/* TOKEN */}
      <td className="px-6 text-left w-[38%]">
        <div className="flex items-center gap-3">
          <TokenIcon src={token.icon} alt={token.symbol} />

          <div className="flex flex-col">
            <div className="text-[12px] font-medium text-white">
              {token.symbol} / USDT
            </div>
            <div className="text-[11px] text-gray-400">
              {token.name}
            </div>
          </div>
        </div>
      </td>

      {/* PRICE */}
      <td
        className={`px-6 text-right w-[18%] transition-colors ${
          flash === "up"
            ? "bg-green-500/20"
            : flash === "down"
            ? "bg-red-500/20"
            : ""
        }`}
      >
        ${token.price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 4,
        })}
      </td>

      {/* 24H CHANGE */}
      <td
        className={`px-6 text-right w-[14%] ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}
      >
        {isPositive ? "+" : ""}
        {token.change24h.toFixed(2)}%
      </td>

      {/* VOLUME */}
      <td className="px-6 text-right w-[20%] text-white">
        {formatVolume(token.volume)}
      </td>

      {/* ACTIONS */}
      <td className="px-6 text-right w-[10%]">
        <RowActions
          onView={() => onView(token)}
          onCopy={() => navigator.clipboard.writeText(token.symbol)}
        />
      </td>
    </tr>
  );
}
