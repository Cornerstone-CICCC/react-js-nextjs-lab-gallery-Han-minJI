import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import GalleryPhotos from "./components/GalleryPhotos";
import { Suspense } from "react";

const page = async () => {
  const cookieStore = await cookies();
  const user = cookieStore.get("gallery-user");

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Gallery</h1>
      <p className="mb-3">This is {user.value} gallery page</p>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
        <GalleryPhotos />
      </Suspense>
    </div>
  );
};

export default page;
