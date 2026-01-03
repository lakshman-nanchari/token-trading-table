interface Props {
  src?: string;
  alt: string;
}

export default function TokenIcon({ src, alt }: Props) {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.08]">
      {src ? (
        <img src={src} alt={alt} className="h-3.5 w-3.5 rounded-full" />
      ) : (
        <span className="text-[10px] font-semibold text-white">
          {alt[0]}
        </span>
      )}
    </div>
  );
}
