import { useSumContext } from '../../../context/sumContext'
import { useDisplayContext } from '../../../context/DisplayContext'

const Column2 = () => {
    const context = useSumContext()
    const { sum, setSum } = context || {}
    const contextD = useDisplayContext()
    const {display, setDisplay } = contextD || {}


        type Button =  {
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

        const handleOnClickButton = (item:Button) => {
            if (setSum && sum && setDisplay)
                switch (item.button) {
                    case "ClearAll":
                        setSum("0")
                        setDisplay(0)

                        break;
                    default:
                        if ((sum[0] === "0" && sum[1]!==".") || display !== 0) {
                            setSum(item.button)
                            setDisplay(0)
                        }
                        else{
                            setSum((prev) => prev + item.button)
                        }
                        break;
                }
        }
    



        return (
            <div className='col-start-2 flex flex-col items-center'>
                {Buttons.map((item) =>
                    <div className='w-[60px] h-[60px] bg-background rounded-full flex justify-center items-center mt-2 shadow-sm shadow-black cursor-pointer hover:bg-[#2b2738]' 
                    key={item.button}
                    onClick={() => handleOnClickButton(item)}>
                        <span className='text-2xl text-white'>{item.display}</span>
                    </div>
                )
                }
            </div>
        )
    }


export default Column2
