interface Props {
  src?: string;
  alt: string;
}

export default function TokenIcon({ src, alt }: Props) {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08]">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-4 w-4 rounded-full"
        />
      ) : (
        <span className="text-[10px] font-medium text-white">
          {alt[0]}
        </span>
      )}
    </div>
  );
}
