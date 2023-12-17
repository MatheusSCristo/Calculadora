import React from 'react'

const Column1 = () => {
    interface Button {
        button: string;
        display: string;
    }

    const Buttons: Button[] = [{
        button: "ClearLast",
        display: "CE"
    }, {
        button: "7",
        display: "7"
    }, {
        button: "4",
        display: "4"
    }, {
        button: "1",
        display: "1"
    }, {
        button: "PlusMinus",
        display: "src/Assets/PlusMinus.svg"
    }]



    return (
        <div className='col-start-1 flex flex-col items-center'>
            {Buttons.map((item) =>
                <div className='w-[60px] h-[60px] bg-background rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#2b2738]' key={item.button}>
                    {item.button!=="PlusMinus"?<span className='text-2xl text-white'>{item.display}</span>:<img src={item.display}/>}
                </div>
            )
            }
        </div>
    )
}


export default Column1