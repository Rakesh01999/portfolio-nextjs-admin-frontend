import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex flex-col mt-10 items-center justify-center px-4 py-10 text-center bg-[--bg-color] text-[--text-color]">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-cyan-500 bg-clip-text text-transparent">
        Welcome, Rakesh Biswas
      </h1>

      <p className="text-sm md:text-xl mb-8 text-gray-500 dark:text-gray-300">
        Personal Email:
        <span className="font-medium">rbiswas01999@gmail.com</span>
      </p>

      <div className="w-[350px] h-[350px] md:w-[300px] md:h-[500px] relative mb-6">
      {/* <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative mb-6"> */}
        <Image
          src="https://i.postimg.cc/wTRczbJ5/rakesh-png.png"
          fill
          alt="Rakesh Biswas"
          className="rounded-full object-cover shadow-cyan-500/20"
          // className="rounded-b-xl shadow-cyan-500/20"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
