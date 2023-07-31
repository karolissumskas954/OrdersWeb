import React, { useState } from 'react'

const ModalTable = ({ data }) => {

    const [priceWithoutPVM, setPriceWithoutPVM] = useState(data.reduce((total, currentValue) => total = total + currentValue.totalPrice, 0))

    function modalTableRow(numberIndex) {
        var totalPrice = 0;
        var diameter = "";
        var depth = "";
        var amount = "";
        var service1 = '-';
        var service2 = '';
        var type = "";
        data.map(array => {
            if (array.id == numberIndex) {
                totalPrice = array.totalPrice;
                diameter = array.diameter;
                depth = array.depth;
                amount = array.amount;

                if (array.type == 0) {
                    type = 'Plytos, Mūras, Tinkas'
                } else if (array.type == 1) {
                    type = 'Abrazyvinis betonas, Gelžbetonis'
                } else if (array.type == 2) {
                    type = 'Stipriai armuotas betonas, Akmuo'
                }

                if (array.service1 != 0) {
                    if (array.service1 == 10) {
                        service1 = 'Gręžimas virš 2 metrų horizontaliai'
                    }
                    else if (array.service1 == 30) {
                        service1 = 'Gręžimas su purvo nusiurbimu'
                    }
                    else if (array.service1 == 40) {
                        service1 = 'Plytų, mūro, tinko gręžimas sausai'
                    }
                    else if (array.service1 == 100) {
                        service1 = 'Monolito gręžimas sausai'
                    }
                }
                if (array.service2 != 0) {
                    if (array.service2 == 10) {
                        service2 = 'Gręžimas virš 2 metrų horizontaliai'
                    }
                    else if (array.service2 == 30) {
                        service2 = 'Gręžimas su purvo nusiurbimu'
                    }
                    else if (array.service2 == 40) {
                        service2 = 'Plytų, mūro, tinko gręžimas sausai'
                    }
                    else if (array.service2 == 100) {
                        service1 = 'Monolito gręžimas sausai'
                    }
                }
            }
        })

        if (totalPrice == 0) {
            return
        } else {
            return (
                <tr >
                    <td className='border-y-2'>{type}</td>
                    <td className='border-y-2'>{service1} <br /> {service2}</td>
                    <td className='border-y-2'>{diameter}</td>
                    <td className='border-y-2'>{depth}</td>
                    <td className='border-y-2'>{amount}</td>
                    <td className='border-y-2'>{totalPrice.toFixed(2)} €</td>
                </tr>
            )
        }
    }
    return (
        <div className="w-full flex flex-col">
            <div className=" flex  mt-20 w-full ">
                <div className="overflow-x-auto mb-10 w-full">
                    <table className="table table-xl border-2 w-full">
                        <thead>
                            <tr className='font-bold text-sm bg-white1-100'>
                                <th>Medžiaga</th>
                                <th>Paslaugos</th>
                                <th>Diametras (mm)</th>
                                <th>Gręžimo gylis (cm)</th>
                                <th>Kiaurymių skaičius (kiekis)</th>
                                <th>Suma</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white1-50'>
                            {modalTableRow(0)}
                            {modalTableRow(1)}
                            {modalTableRow(2)}
                            {modalTableRow(3)}
                            {modalTableRow(4)}
                            {modalTableRow(5)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex justify-end'>
                <p className=''>Suma be PVM: {priceWithoutPVM.toFixed(2)} €</p>

            </div>
            <div className='flex justify-end'>
                <p>Suma su PVM: {(priceWithoutPVM + ((priceWithoutPVM) / 100) * 21).toFixed(2)} €</p>
            </div>
            <p className="text-[16px] text-gray-700 mt-4">
                * Į šią sumą nėra iskaičiuotas transportavimas ir darbo vietos paruošimas.
            </p>
        </div>
    )
}

export default ModalTable