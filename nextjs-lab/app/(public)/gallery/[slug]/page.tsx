import Image from "next/image";
import { Photo } from "../components/GalleryPhotos";

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
    <div>
      <h1>Photo Num: {photo.id} </h1>
      <Image
        src={photo.thumbnailUrl}
        width={500}
        height={500}
        alt="Thumbnails"
      />
    </div>
  );
};

export default page;
