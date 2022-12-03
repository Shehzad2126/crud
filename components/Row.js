import React from 'react'

function Row(props) {
  return (
    <div>
        <tr class="border-b">
                  <td class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    {props.name}
                  </td>
                  <td class="px-6 py-2 whitespace-nowrap border-r">
                    {props.marks}
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
    </div>
  )
}

export default Row