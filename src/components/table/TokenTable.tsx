import { mockTokens } from "@/lib/mockTokens";
import TableHeader from "./TableHeader";
import TokenRow from "./TokenRow";

export default function TokenTable() {
    return(
        <div className="rounded-lg border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
                <TableHeader/>
                <tbody>
                    {mockTokens.map((token) => (
                        <TokenRow key={token.id} token={token}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}