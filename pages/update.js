import React from 'react'
import { useRouter } from 'next/router'
export default function Update() {
  const router = useRouter()
  function goBack(){
      router.push("../")
  }
  return (
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
      <div class="w-full  max-w-xs">
        <form class="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-lg text-center my-3">Edit Details</p>

          <input
            class=" w-full py-1 px-2 my-1"
            type="text"
            placeholder="Enter Name"
          />

          <input
            class="w-full py-1 px-1 mb-3 my-1"
            type="password"
            placeholder="Enter Marks"
          />

          <button
            class="bg-blue-500 hover:bg-blue-700  text-white py-1  w-full px-2 rounded-full"
            type="button"
          >
            Update
          </button>
        </form>
      </div>
      <a onClick={goBack} className="text-blue-400 hover:text-blue-500 cursor-pointer underline">Back</a>
    </div>
  )
}
