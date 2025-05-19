import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>.</h1>
      <h1 className="mt-20">.</h1>
      <div className="lg:ml-[130px]">
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome Rakesh Biswas 
          </h1>
          <h1 className="text-4xl text-center mt-10 mb-10">
            Personal Email : rbiswas01999@gmail.com
          </h1>

          <Image
            // src="https://i.postimg.cc/jjGLxfHz/nafis.jpg"
            // src="https://i.postimg.cc/wMbTWVF0/rakesh1-Copy.jpg"
            // src="https://i.postimg.cc/wM6PZY3k/Untitled-design-2-1.jpg"
            src="https://i.postimg.cc/wTRczbJ5/rakesh-png.png"
            width={200}
            // height={200}
            height={200}
            alt="image"
            // className="mx-auto rounded-full object-cover aspect-square"
            className="mx-auto object-cover"
            // className="mx-auto"
          />
        </>
      </div>
    </div>
  );
};

export default DashboardPage;
