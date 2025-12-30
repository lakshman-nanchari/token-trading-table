export default function TableHeader() {
    return (
        <thead className="bg-white/5 text-xs uppercase text-gray-400">
            <tr>
                <th className="px-4 py-3 text-left">Token</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">24h %</th>
                <th className="px-4 py-3 text-left">Volume</th>
            </tr>
        </thead>
    );
}