import Image from "next/image";
import type { ImageAsset } from "@/data/services";
import { cn } from "@/lib/utils";

type MediaProps = {
  image: ImageAsset;
  /** Tailwind aspect utility, e.g. "aspect-[4/3]" */
  aspect?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

/**
 * Responsive image inside a fixed aspect box.
 * Photographs fill the box; renders and product cut-outs sit on white without cropping.
 */
export function Media({ image, aspect = "aspect-[4/3]", sizes, priority, className, imgClassName }: MediaProps) {
  const contain = image.fit === "contain";
  return (
    <div className={cn("relative w-full overflow-hidden", aspect, contain ? "bg-white" : "bg-surface", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(contain ? "object-contain p-3" : "object-cover", imgClassName)}
      />
    </div>
  );
}
