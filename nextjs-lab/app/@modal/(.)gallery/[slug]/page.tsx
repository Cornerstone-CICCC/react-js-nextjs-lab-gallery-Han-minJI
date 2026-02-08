import { Photo } from "@/app/(public)/gallery/components/GalleryPhotos";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  let photo: Photo;

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${slug}`,
    );
    const data = await res.json();
    photo = {
      ...data,
      url: "https://placehold.co/600.png",
      thumbnailUrl: "https://placehold.co/150.png",
    };
  } catch (err) {
    console.error(err);
    throw new Error("Unable to show photo");
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6">
        <h1 className="font-bold text-2xl">{photo.id}</h1>
        <Image
          src={photo.thumbnailUrl}
          width={500}
          height={500}
          alt="Thumbnails"
        />
      </div>
    </div>
  );
};

export default page;
