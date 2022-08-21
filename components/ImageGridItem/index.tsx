import Image from 'next/image';

export const ImageGridItem: React.FC<{ url: string }> = ({ url }) => {
    return <Image src={url} alt="" className="rounded-lg" width={300} height={350} />;
};
