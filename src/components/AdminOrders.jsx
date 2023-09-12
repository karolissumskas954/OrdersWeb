
const AdminOrders = () => {
  return (
    <div className="h-[45px] m-4 rounded-xl">
    <h1 className="text-2xl font-semibold font-poppins text-center my-1 mt-10 text-black">Užsakymai</h1>
    <div className="h-full w-full mt-10 rounded  ">
      <div className="overflow-x-auto border-2 border-black rounded-xl shadow-2xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-sm text-white border bg-blue1-600 border-black font-poppins">
              <th >
                {/* <label>
                  <input type="checkbox" className="checkbox border-2 border-black" />
                </label> */}
              </th>
              <th>Informacija</th>
              <th>Job</th>
              <th>Telefono numeris</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="border border-white1-300 hover:bg-white1-200">
              <th >
                <label>
                  <input type="checkbox" className="checkbox border-2 border-white1-400" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  {/* <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div> */}
                  <div>
                    <div className="font-bold text-black">Hart Hagerty</div>
                    <div className="text-sm opacity-50 text-black">Vilnius, zaibo g. 52 A</div>
                  </div>
                </div>
              </td>
              <td className="text-black">
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm text-black">Desktop Support Technician</span>
              </td>
              <td className="text-black">+96585123123</td>
              <td className="text-black">2002-02-25</td>
              <th>
                <button className="btn btn-ghost btn-xs text-black">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                    
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                    
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default AdminOrders
