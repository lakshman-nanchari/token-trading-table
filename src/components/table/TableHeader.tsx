export default function TableHeader() {
    return (
        <thead className="bg-white/5 text-xs uppercase text-gray-400">
            <tr>
                <th className="px-4 py-3 text-left font-normal w-[40%]">
                Token
                </th>
                <th className="px-4 py-3 text-right font-normal w-[20%]">
                Price
                </th>
                <th className="px-4 py-3 text-right font-normal w-[20%]">
                24h %
                </th>
                <th className="px-4 py-3 text-right font-normal w-[20%]">
                Volume
                </th>
            </tr>
        </thead>
    );
}