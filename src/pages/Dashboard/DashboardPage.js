import React from "react";
import { Icon } from "@iconify/react";
import home from '@iconify-icons/mdi-light/home';


function DashboardPage() {
  return (
    <>
      <div className="mb-20 sm:mb-0 mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="relative group bg-white py-2  px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white-900/80 hover:smooth-hover">
          
          
          <h4 className="text-black text-4xl font-bold capitalize text-center">
            80.5k
          </h4>
          <p className="text-black/70 font-bold capitalize text-center">
           Views
          </p>
          <Icon icon="icon-park-outline:recent-views-sort"  width={32} height={32}/>
         
        </div>

        <div className="relative group bg-blue-900 py-2  px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-900/80 hover:smooth-hover">
          <h4 className="text-black text-4xl font-bold capitalize text-center">
            70.5k
          </h4>
          <p className="text-black/70 font-bold capitalize text-cente">likes</p>
            <Icon icon='mdi:like'  width={32} height={32} />
               </div>

        <div className="relative group bg-white py-2  px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-white-900/80 hover:smooth-hover">
          <h4 className="text-black text-4xl font-bold capitalize text-center">
            80.5k
          </h4>
          <p className="text-black/70 font-bold capitalize text-center">
            comments
          </p>
          <Icon icon="mdi:comments"  width={32} height={32}/>
         
        </div>

        <div className="relative group bg-blue-900 py-2  px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-blue-900/80 hover:smooth-hover">
          <h4 className="text-black text-4xl font-bold capitalize text-center">
            60
          </h4>
          <p className="text-black/70 font-bold capitalize text-cente">
            published
          </p>
          <Icon icon="material-symbols:published-with-changes" width={32} height={32}/>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
