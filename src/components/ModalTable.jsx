import { services, types } from "../constants";

const ModalTable = ({ data }) => {

    const priceWithoutPVM = data.reduce((total, currentValue) => total = total + currentValue.totalPrice, 0)

    const typeLookup = {
        0: types[0].title,
        1: types[1].title,
        2: types[2].title,
    };

    const serviceLookup = {
        10: services[0].title,
        30: services[1].title,
        40: services[2].title,
        100: services[3].title,
    };

    function modalTableRow(numberIndex, props) {

        function getType(array) {
            return typeLookup[array.type];
        }

        function getService1(array) {
            return serviceLookup[array.service1] || '-';
        }

        function getService2(array) {
            return serviceLookup[array.service2] || '';
        }

        const item = data.find(array => array.id === numberIndex);
        if (!item) return null;
        const { totalPrice, diameter, depth, amount } = item;
        const type = getType(item);
        const service1 = getService1(item);
        const service2 = getService2(item);
        if (totalPrice == 0) return;
        return (
            <tr {...props}>
                <td className='border-y-2'>{type}</td>
                <td className='border-y-2'>{service1} <br /> {service2}</td>
                <td className='border-y-2'>{diameter}</td>
                <td className='border-y-2'>{depth}</td>
                <td className='border-y-2'>{amount}</td>
                <td className='border-y-2'>{totalPrice.toFixed(2)} €</td>
            </tr>
        )
    }
    return (
        <div className="w-full flex flex-col">
            <div className=" flex  mt-20 w-full ">
                <div className="overflow-x-auto mb-10 w-full border-2 rounded-xl">
                    <table className="table table-xl border-2 w-full ">
                        <thead>
                            <tr  className='font-bold text-sm bg-white1-100'>
                                <th>Medžiaga</th>
                                <th>Paslaugos</th>
                                <th>Diametras (mm)</th>
                                <th>Gręžimo gylis (cm)</th>
                                <th>Kiaurymių skaičius (kiekis)</th>
                                <th>Suma</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white1-50'>
                            {data.map((item) => modalTableRow(item.id, {key:item.id}))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex justify-end my-1 mr-2'>
                <p className='text-md font-poppins text-black'>Suma be PVM: {priceWithoutPVM.toFixed(2)} €</p>
            </div>
            <div className='flex justify-end mr-2'>
                <p className='text-md font-poppins text-black'>Suma su PVM: {(priceWithoutPVM + ((priceWithoutPVM) / 100) * 21).toFixed(2)} €</p>
            </div>
            <p className="text-[16px] text-gray-700 mt-4">
                * Į šią sumą nėra įskaičiuotas transportavimas ir darbo vietos paruošimas.
            </p>
        </div>
    )
}

export default ModalTable