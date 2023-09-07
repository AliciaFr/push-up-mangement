import Image from "next/image";

const ParagraphImage = ({
  alt,
  src,
  className,
  size,
}: {
  alt: string;
  src: string;
  className?: string;
  size?: string;
}) => {
  return (
    <div className={`image-container ${className}`}>
      <Image
        alt={alt}
        src={src}
        layout="responsive"
        width={600}
        height={600}
        quality={70}
        sizes={size}
      />
    </div>
  );
};

export default ParagraphImage;
