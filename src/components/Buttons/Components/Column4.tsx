import React from 'react'

const Column4 = () => {

    interface Operator {
        operator: string;
        display: string;
    }

    const operators: Operator[] = [{
        operator: "Divide",
        display: "src/assets/Divide.svg"
    }, {
        operator: "Multiply",
        display: "src/assets/X.svg"
    }, {
        operator: "Minus",
        display: "src/assets/Minus.svg"
    }, {
        operator: "Plus",
        display: "src/assets/Plus.svg"
    }, {
        operator: "Equals",
        display: "src/assets/Equals.svg"
    }]



    return (
        <div className='col-start-4 flex flex-col items-center '>
            {operators.map((item) => {
                if (item.operator === "Equals") {
                    return (
                        <div className='w-[60px] h-[60px] bg-lightPurple rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black hover:bg-[#7B2FFF]' key={item.operator}>
                            <img src={item.display} className='w-50%' />
                        </div>
                    )}
                else {
                    return (
                        <div className='w-[60px] h-[60px] bg-darkPurple rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#6339A7]' key={item.operator}>
                            <img src={item.display} className='w-50%' />
                        </div>
                    )
                }
            })
            }
        </div>
    )
}

export default Column4