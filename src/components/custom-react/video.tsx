export function Video({
  src,
  type,
  controls = true,
  preload = "auto",
  width,
  muted = true,
  loop = false,
  height,
  className,
}: {
  src: string;
  className?: string;
  type?: string;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
  width: number;
  height: number;
}) {
  return (
    <video
      className={className}
      src={src}
      height={height || "600"}
      width={width || "480"}
      controls={controls}
      muted={muted}
      preload={preload}
      loop={loop}
    >
      <source src={src as string} type={type || "video/mp4"} />
      Не работает
    </video>
  );
}
