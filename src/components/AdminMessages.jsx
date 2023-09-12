
const AdminMessages = () => {




    return (
        <div className="h-[45px] m-4 rounded-xl mx-10">
            <h1 className="text-2xl font-semibold font-poppins text-center my-1 mt-10 text-black">Pranešimai</h1>
            <div className="h-full w-full mt-10 rounded  ">
                <div className="overflow-x-auto border-2 border-black rounded-xl shadow-2xl">
                    <table className="table w-full border-collapse border">
                        <thead>
                            <tr className="bg-blue-600 text-white text-sm border border-black text-center">
                                <th className="w-1/12 "></th>
                                <th className="w-1/12 ">Informacija</th>
                                <th className="w-6/12">Pranešimas</th>
                                <th className="w-2/12">Statusas</th>
                                <th className="w-1/12"></th>
                                <th className="w-2/12"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border border-gray-300 text-center">
                                <th className="w-1/12 ">
                                </th>
                                <td className="w-1/12">
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold text-black">Hart Hagerty</div>
                                            <div className="text-sm font-medium  text-gray-600">HartHagerty@email.eu</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="w-4/12 text-black">
                                    This is a real message
                                    <br />
                                </td>
                                <td className="w-1/12 text-black">
                                <span className="bg-salem-100 text-salem-800 text-sm font-medium px-2.5 py-0.5 rounded ">Atsakytas</span>
                                    {/* <div className="text-sm text-black ">Atsakymas</div> */}
                                </td>
                                <th className="w-1/12">
                                    <button className="btn btn-xs font-medium text-black">Plačiau</button>
                                </th>
                                <th className="w-1/12">
                                    
                                </th>
                            </tr>
                        </tbody>
                    </table>

                </div>



            </div>
        </div>
    )
}

export default AdminMessages
