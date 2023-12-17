import React from 'react'

const Column3 = () => {

    interface Button {
        button: string;
        display: string;
    }

    const Buttons: Button[] = [{
        button: "Rest",
        display: "%"
    }, {
        button: "9",
        display: "9"
    }, {
        button: "6",
        display: "6"
    }, {
        button: "3",
        display: "3"
    }, {
        button: ",",
        display: ","
    }]



    return (
        <div className='col-start-3 flex flex-col items-center'>
            {Buttons.map((item) =>
                <div className='w-[60px] h-[60px] bg-background rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#2b2738]' key={item.button}>
                    <span className='text-2xl text-white'>{item.display}</span>
                </div>
            )
            }
        </div>
    )
}

export default Column3