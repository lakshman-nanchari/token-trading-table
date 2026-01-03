import Tooltip from "@/components/ui/Tooltip";
import { ChevronDown } from "lucide-react";

interface Props {
  sortKey: "price" | "change24h" | "volume";
  sortOrder: "asc" | "desc";
  onSort: (key: "price" | "change24h" | "volume") => void;
}

export default function TableHeader({
  sortKey,
  sortOrder,
  onSort,
}: Props) {
  return (
    <thead className="sticky top-0 z-10 bg-[#0b0f14] text-[11px] uppercase text-gray-500">
      <tr className="h-[40px] border-b border-white/[0.06]">
        <th className="px-4 py-3 text-left font-normal w-[38%]">
          Token
        </th>

        <th
        className="px-6 py-3 text-right font-normal w-[18%] cursor-pointer select-none"
        onClick={() => onSort("price")}
        >
        <Tooltip content="Current token price">
            <span className="inline-flex items-center gap-1">
              Price
              {sortKey === "price" && (
                <ChevronDown
                  className={`w-3 h-3 opacity-60 transition-transform ${
                    sortOrder === "asc" ? "rotate-180" : ""
                  }`}
                />
              )}
            </span>

        </Tooltip>
        </th>

        <th
        className="px-6 py-3 text-right font-normal w-[14%] cursor-pointer select-none"
        onClick={() => onSort("change24h")}
        >
        <Tooltip content="Percentage change in last 24 hours">
          <span className="inline-flex items-center gap-1">
            24h %
            {sortKey === "change24h" && (
              <ChevronDown
                className={`w-3 h-3 opacity-60 transition-transform ${
                  sortOrder === "asc" ? "rotate-180" : ""
                }`}
              />
            )}
          </span>

        </Tooltip>
        </th>

        <th
        className="px-6 py-3 text-right font-normal w-[20%] cursor-pointer select-none"
        onClick={() => onSort("volume")}
        >
        <Tooltip content="24h trading volume">
          <span className="inline-flex items-center gap-1">
            Volume
            {sortKey === "volume" && (
              <ChevronDown
                className={`w-3 h-3 opacity-60 transition-transform ${
                  sortOrder === "asc" ? "rotate-180" : ""
                }`}
              />
            )}
          </span>

        </Tooltip>
        </th>

        <th className="px-6 py-3 w-[10%]"></th>

      </tr>
    </thead>
  );
}
