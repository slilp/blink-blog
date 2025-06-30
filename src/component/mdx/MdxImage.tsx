import Image from "next/image";

interface MdxImageProps {
  src: string;
  alt: string;
}

function MdxImage({ src, alt }: MdxImageProps) {
  return <img src={src} alt={alt} className="rounded-xl" />;
}

export default MdxImage;
