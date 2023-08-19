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
      <img
        alt={alt}
        src={src}
        className={"image"}
      />
    </div>
  );
};

export default ParagraphImage;
