import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const Playfilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="w-full bg-white rounded-md my-3 py-1 px-2 flex justify-between items-center">
            <div>
              <Disclosure.Button className=" py-2 flex items-center gap-3">
                {open ? <BiChevronUp /> : <BiChevronDown />}
                <span className={open ? "text-red-600 " : "text-gray-700 "}>
                  {props.title}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <div className="flex items-center flex-wrap gap-3">
                  {props.tag.map((each, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 px-3 py-1 rounded"
                    >
                      <span className="text-red-600">{each}</span>
                    </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
            <div>
              <span className="text-xs text-gray-500 hover:text-red-600 cursor-pointer">Clear</span>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Playfilter;
