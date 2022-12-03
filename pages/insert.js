import React, { useState } from "react";
import { useRouter } from 'next/router'
import { app, database } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
export default function Insert() {

  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
    const router = useRouter()

    function nameChange(e){
      setName(e.target.value);
    }
    function marksChange(e){
      setMarks(e.target.value);
    }

    function goBack(){
        router.push("../")
    }
    const databaseRef = collection(database, 'Students');
    function addData() {
      addDoc(databaseRef, {
        name: name,
        marks: marks
      })
      .then(() => {
        alert('Data Saved');
        setName('');
        setMarks('');
      })
      .catch((err) => {
        console.log(err);
      })
   }
  return (
    <div className="bg-gray-300 h-screen flex flex-col justify-center items-center">
      <div class="w-full  max-w-xs">
        <form class="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="text-lg text-center my-3">Add Details</p>

          <input
            class=" w-full py-1 px-2 my-1"
            type="text"
            placeholder="Enter Name"
            value={name} 
            onChange= {nameChange}
          />

          <input
            class="w-full py-1 px-1 mb-3 my-1"
            type="text"
            placeholder="Enter Marks"
            value={marks}
            onChange= {marksChange}
          />

          <button
            class="bg-blue-500 hover:bg-blue-700  text-white py-1  w-full px-2 rounded-full"
            type="button"
            onClick={addData}
          >
            Insert
          </button>
        </form>
      </div>
      <a onClick={goBack} className="text-blue-400 hover:text-blue-500 cursor-pointer underline">Back</a>
    </div>
  );
}
