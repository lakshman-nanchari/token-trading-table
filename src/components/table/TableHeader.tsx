import Tooltip from "@/components/ui/Tooltip";

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
    <thead className="bg-white/5 text-xs uppercase text-gray-400">
      <tr>
        <th className="px-4 py-3 text-left font-normal w-[40%]">
          Token
        </th>

        <th
        className="px-4 py-3 text-right font-normal w-[20%] cursor-pointer select-none"
        onClick={() => onSort("price")}
        >
        <Tooltip content="Current token price">
            <span>
            Price {sortKey === "price" && (sortOrder === "asc" ? "↑" : "↓")}
            </span>
        </Tooltip>
        </th>

        <th
        className="px-4 py-3 text-right font-normal w-[20%] cursor-pointer select-none"
        onClick={() => onSort("change24h")}
        >
        <Tooltip content="Percentage change in last 24 hours">
            <span>
            24h % {sortKey === "change24h" && (sortOrder === "asc" ? "↑" : "↓")}
            </span>
        </Tooltip>
        </th>

        <th
        className="px-4 py-3 text-right font-normal w-[20%] cursor-pointer select-none"
        onClick={() => onSort("volume")}
        >
        <Tooltip content="24h trading volume">
            <span>
            Volume {sortKey === "volume" && (sortOrder === "asc" ? "↑" : "↓")}
            </span>
        </Tooltip>
        </th>

        <th className="px-4 py-3 w-[5%]"></th>

      </tr>
    </thead>
  );
}
