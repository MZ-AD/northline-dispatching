import { cn } from "@/lib/utils";

type ResponsiveImageProps = {
  base: string;
  alt: string;
  className?: string;
  sizes: string;
  widths: number[];
  priority?: boolean;
};

export function ResponsiveImage({
  base,
  alt,
  className,
  sizes,
  widths,
  priority = false,
}: ResponsiveImageProps) {
  const sortedWidths = [...widths].sort((a, b) => a - b);
  const srcSet = sortedWidths
    .map((width) => `/${base}-${width}.webp ${width}w`)
    .join(", ");
  const fallback = `/${base}-${sortedWidths[sortedWidths.length - 1]}.webp`;

  return (
    <picture className="absolute inset-0 block">
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        sizes={sizes}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        className={cn("h-full w-full object-cover", className)}
      />
    </picture>
  );
}
