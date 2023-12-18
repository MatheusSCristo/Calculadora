import { useSumContext } from '../../context/sumContext.tsx'
import { useDisplayContext } from '../../context/DisplayContext.tsx'

const Result = () => {
    const context=useSumContext()
    const {sum}=context || {}
    const contextD = useDisplayContext()
    const { display } = contextD || {}
    return (
        <div className='mt-8 mr-12 ml-12 '>
            <div className='flex flex-row-reverse'>
            <span className='text-2xl text-fontGrey right-0 text-right relative'>{sum}</span>
            </div>
            <div className='flex justify-between items-baseline mt-5'>
                <span className='text-3xl text-fontGrey '>=</span>
                <span className='text-3xl text-white'>{display}</span>
            </div>

        </div>
    )
}

export default Result