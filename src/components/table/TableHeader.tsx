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
          Price {sortKey === "price" && (sortOrder === "asc" ? "↑" : "↓")}
        </th>

        <th
          className="px-4 py-3 text-right font-normal w-[20%] cursor-pointer select-none"
          onClick={() => onSort("change24h")}
        >
          24h % {sortKey === "change24h" && (sortOrder === "asc" ? "↑" : "↓")}
        </th>

        <th
          className="px-4 py-3 text-right font-normal w-[20%] cursor-pointer select-none"
          onClick={() => onSort("volume")}
        >
          Volume {sortKey === "volume" && (sortOrder === "asc" ? "↑" : "↓")}
        </th>
      </tr>
    </thead>
  );
}
