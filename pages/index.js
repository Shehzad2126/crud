import Head from "next/head";
import { useRouter } from "next/router";
import { app, database } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
export default function Home() {
  const router = useRouter();
  function insertRecord() {
    router.push("/insert");
  }
  function updateRecord() {
    router.push("/update");
  }
  const [studentsData, setStudentsData] = useState([]);

  const getData = async () => {
    await getDocs(collection(database, "Students")).then((response) => {
      setStudentsData(response.docs);
    });
  };
  console.log(studentsData);
  useEffect(() => {
    
    getData();
  }, []);

  return (
    <div className="bg-gray-300 h-screen p-10">
      <button
        onClick={insertRecord}
        type="button"
        class="py-2 px-3 mx-1 text-center text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      >
        Insert
      </button>

      <div class="flex flex-col">
        <div class="py-1 inline-block min-w-full ">
          <table class="min-w-full border text-center">
            <thead class="border-b bg-gray-500">
              <tr className="">
                <th class="text-sm font-medium text-gray-900 px-6 py-2 border-r">
                  Name
                </th>
                <th class="text-sm font-medium text-gray-900 px-6 py-2 border-r">
                  Marks
                </th>
                <th class="text-sm font-medium text-gray-900 px-6 py-2 border-r">
                  Action
                </th>
              </tr>
            </thead>

            {/* <div>
        
            <div className="flex bg-red-500 w-screen max-w-[400px] p-2 px-6 gap-4 items-center justify-center">
              <h2>{data.name}</h2>
              <h3>{data.age}</h3>
            </div>
          );
        })}
      </div> */}

            <tbody className="bg-white">
              {studentsData.map((data) => {
                <tr class="border-b">
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {data.name}
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap border-r">
                    {data.marks}
                  </td>
                  <td class=" px-6 py-2 whitespace-nowrap border-r">
                    <button
                      type="button"
                      onClick={updateRecord}
                      class="py-2 px-3 mx-1 text-center text-white bg-green-500 rounded-lg hover:bg-green-700"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      class="py-2 px-3 mx-1 text-center text-white bg-red-500 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
