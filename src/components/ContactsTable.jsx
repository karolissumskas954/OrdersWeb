import styles from "../style"

const ContactsTable = () => {
    return (
        <>
            {/* <div className="border">
                <table className="table-fixed">
                    <tbody>
                        <tr>
                            <td className="bg-white border border-black "><p className="mx-1">Firmos pavadinimas</p></td>
                            <td className="bg-white border border-black">UAB "Deimantinis gręžimas"</td>
                        </tr>
                        <tr>
                            <td className="bg-white border border-black">Adresas</td>
                            <td className="bg-white border border-black">Vilniaus g. 15a 24 ,Trakai</td>
                        </tr>
                        <tr>
                            <td className="bg-white border border-black">Mob. telefonas</td>
                            <td className="bg-white border border-black">+370 61585683</td>
                        </tr>
                        <tr>
                            <td className="bg-white border border-black">El.​paštas</td>
                            <td className="bg-white border border-black">d.​grezimas@​inbox.​lt</td>
                        </tr>
                        <tr>
                            <td className="bg-white border border-black">Įmonės kodas</td>
                            <td className="bg-white border border-black">302046597</td>
                        </tr>
                        <tr>
                            <td className="bg-white border border-black">PVM kodas</td>
                            <td className="bg-white border border-black">LT100004395010</td>
                        </tr>
                        <tr>
                            <td className="bg-white border border-black">Atsiskait. sąskaitos</td>
                            <td className="bg-white border border-black">AB SEB "Vilniaus bankas" <br /> LT36 7044 0600 0656 1403</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}


            <div className={`flex flex-col ${styles.paddingY} max-w-[95%]`}>
                <h1 className="text-center font-poppins text-[20px] sm:text-[30px]">Kontaktai</h1>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="">
                            <table className="min-w-full border text-left text-sm font-light bg-white ">
                                <tbody className="border-b">
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">Firmos pavadinimas</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">Deimantinis gręžimas</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">Adresas</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">Vilniaus g. 15a 24 ,Trakai</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">Mob. telefonas</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">+370 61585683</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">El.​paštas</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">d.​grezimas@​inbox.​lt</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">Įmonės kodas</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">302046597</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">PVM kodas</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">LT100004395010</td>
                                    </tr>
                                    <tr
                                        className="border-b">
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">Atsiskait. sąskaitos</td>
                                        <td className="whitespace-nowrap border-r font-poppins text-[14px] sm:text-[20px] px-2 py-1 sm:px-6 sm:py-4">AB SEB "Vilniaus bankas" <br /> LT36 7044 0600 0656 1403</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default ContactsTable
