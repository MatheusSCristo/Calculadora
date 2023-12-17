import React from 'react'

const Column2
 = () => {
    interface Button {
        button: string;
        display: string;
    }

    const Buttons: Button[] = [{
        button: "ClearAll",
        display: "C"
    }, {
        button: "8",
        display: "8"
    }, {
        button: "5",
        display: "5"
    }, {
        button: "2",
        display: "2"
    }, {
        button: "0",
        display: "0"
    }]



    return (
        <div className='col-start-2 flex flex-col items-center'>
            {Buttons.map((item) =>
                <div className='w-[60px] h-[60px] bg-background rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#2b2738]' key={item.button}>
                    <span className='text-2xl text-white'>{item.display}</span>
                </div>
            )
            }
        </div>
    )
}


export default Column2
