import { useState } from "react";

export default function Content() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div class="flex items-center bg-gray-100 dark:bg-gray-900  ">
        <h1 class="text-4xl font-normal md:font-bold mt-5 mx-2 text-[#0f172a]">
          Hardware Log
        </h1>
      </div>
      <div class="flex items-center bg-gray-100 dark:bg-gray-900  ">
        <div class="mx-2 w-8">
          <h1 class="text-2xl  font-bold text-[#0f172a]">Stats</h1>
        </div>

        <div class="container max-w-6xl px-10 mx-0 my-10 ">
          <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-gray-500 dark:text-gray-300">
                Total Devices
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  67
                </div>
              </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-green-400 dark:text-gray-300">
                Available Devices
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  3,728
                </div>
              </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-yellow-500 dark:text-gray-300">
                Devices Taken
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  1442
                </div>
              </div>
            </div>
            <div class="p-5 bg-white rounded shadow-sm dark:bg-gray-800">
              <div class="text-base text-red-400 dark:text-gray-300">
                Due Date Devices
              </div>
              <div class="flex items-center pt-1">
                <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  982
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
