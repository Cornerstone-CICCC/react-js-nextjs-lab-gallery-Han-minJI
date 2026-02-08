import Image from "next/image";
import Link from "next/link";

export interface Photo {
  id: number;
  url: string;
  thumbnailUrl: string;
}

const GalleryPhotos = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=10",
  );
  const data: Photo[] = await res.json();

  const photos = data.map((p) => ({
    ...p,
    url: "https://placehold.co/600.png",
    thumbnailUrl: "https://placehold.co/150.png",
  }));

  return (
    <div>
      <h1>Gallery Photos</h1>
      <ul>
        {photos.map((p) => (
          <li key={p.id}>
            <Link href={`/gallery/${p.id}`}>
              <Image
                src={p.thumbnailUrl}
                width={150}
                height={150}
                alt="Thumbnails"
              />
            </Link>
            <p>{p.id} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryPhotos;
