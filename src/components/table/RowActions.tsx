"use client";

import * as Popover from "@radix-ui/react-popover";

interface Props {
  onView: () => void;
  onCopy: () => void;
}

export default function RowActions({ onView, onCopy }: Props) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="px-2 py-1 text-gray-400 hover:text-white">
          ⋯
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="end"
          className="rounded-md bg-black p-2 text-sm text-white shadow-md"
        >
          <button
            onClick={onView}
            className="block w-full rounded px-2 py-1 text-left hover:bg-white/10"
          >
            View Details
          </button>

          <button
            onClick={onCopy}
            className="block w-full rounded px-2 py-1 text-left hover:bg-white/10"
          >
            Copy Symbol
          </button>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
