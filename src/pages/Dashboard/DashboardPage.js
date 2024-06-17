import React from "react";
import { Icon } from "@iconify/react";
import home from "@iconify-icons/mdi-light/home";

function DashboardPage() {
  return (
    <>
      <div className="mb-20 sm:mb-0 mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative group  py-4  px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-purple-100 hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon icon="carbon:view" width={32} height={32} />
          </div>

          <div>
            <p className="text-black text-xl font-bold capitalize">
              Total Users
            </p>
            <p className="text-black/60 font-bold capitalize">80.5k</p>
          </div>
        </div>

        <div className="relative group  py-4  px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-purple-100 hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon icon="mdi:like" width={32} height={32} />
          </div>

          <div>
            <p className="text-black text-xl font-bold capitalize">Likes</p>
            <p className="text-black/60 font-bold capitalize">70.5k</p>
          </div>
        </div>

        <div className="relative group  py-4  px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-purple-100 hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon icon="mdi:comments" width={32} height={32} />
          </div>

          <div>
            <p className="text-black text-xl font-bold capitalize">Comments</p>
            <p className="text-black/60 font-bold capitalize">40.5k</p>
          </div>
        </div>

        <div className="relative group  py-4  px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-purple-100 hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon
              icon="material-symbols:published-with-changes"
              width={32}
              height={32}
            />
          </div>

          <div>
            <p className="text-black text-xl font-bold capitalize">Published</p>
            <p className="text-black/60 font-bold capitalize">20.5k</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
