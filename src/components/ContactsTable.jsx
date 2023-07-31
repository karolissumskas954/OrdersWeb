import { contactsLT } from "../constants"

const ContactsTable = () => {
    return (
            <div className={`flex flex-col max-w-[95%]`}>
                <h1 className="text-center font-poppins text-[20px] sm:text-[30px] mb-4">Kontaktai</h1>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="">
                            <table className="min-w-full border text-left text-sm font-light bg-white ">
                                <tbody className="border-b">
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[0].title}</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[1].title}</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[2].title}</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[3].title}</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[4].title}</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[5].title}</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[6].title}</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[7].title}</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[8].title}</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[9].title}</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[10].title}</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[11].title}</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">{contactsLT[12].title}</td>
                                        <td className='whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4'>{contactsLT[13].title.split('\n').map((item, key) => { return <><span>{item}</span><br/></>})}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactsTable
