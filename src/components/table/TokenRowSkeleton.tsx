export default function TokenRowSkeleton() {
  return (
    <tr className="h-[44px] animate-pulse">
      <td className="px-6 w-[38%]">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded-full bg-white/[0.08]" />
          <div className="space-y-1">
            <div className="h-3 w-20 rounded bg-white/[0.08]" />
            <div className="h-3 w-14 rounded bg-white/[0.05]" />
          </div>
        </div>
      </td>

      <td className="px-6 w-[18%]">
        <div className="h-3 w-16 rounded bg-white/[0.08] ml-auto" />
      </td>

      <td className="px-6 w-[14%]">
        <div className="h-3 w-12 rounded bg-white/[0.08] ml-auto" />
      </td>

      <td className="px-6 w-[20%]">
        <div className="h-3 w-16 rounded bg-white/[0.08] ml-auto" />
      </td>

      <td className="px-6 w-[10%]" />
    </tr>
  );
}
