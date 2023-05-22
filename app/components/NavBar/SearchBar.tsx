'use client';

import {BiSearch} from "react-icons/bi";

const SearchBar: React.FC<{}> = () => {
  return (
    <div className="w-full md:w-auto py-2 border-[1px] rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row justify-between items-center">
        <div className="text-sm font-semibold px-6">
          Anywhere
        </div>
        <div className="hidden sm:block text-sm font-semibold px-6 text-center flex-1 border-x-[1px]">
          Any Week
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add Guest</div>
          <div className="bg-rose-500 rounded-full text-white p-2">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
