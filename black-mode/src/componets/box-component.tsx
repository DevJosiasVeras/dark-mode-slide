import { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';

export function Box() {
    let valor
    const [valueDark, setValue] = useState<Number>()
    return (
        <div className="flex justify-center items-center min-h-[100vh]" style={{ backgroundColor: `rgb(${valueDark},${valueDark},${valueDark})` }}>
            <ul className="h-[320px] w-[320px] bg-slate-600 flex items-center justify-center rounded shadow-myshadow">
                <li className='flex flex-col justify-center items-center'>
                    <label htmlFor="#" className="text-white uppercase tracking-wider font-ubuntu font-bold">DarkMode Slide</label>
                    <form action="" className='pt-4'>
                        <Slider.Root
                            defaultValue={[235]}
                            max={235}
                            min={15}
                            step={1}
                            aria-label="Volume"
                            className='relative flex items-center select-none touch-none w-[200px] h-5'
                            onValueChange={(value: number[]) => {
                                valor = value[0]
                                setValue(valor)
                            }}
                        >
                            <Slider.Track className='bg-slate-800 relative grow rounded h-1 w-1'>
                                <Slider.Range className='absolute bg-white rounded h-full' />
                            </Slider.Track>
                            <Slider.Thumb className='block w-5 h-5 bg-white shadow-lg rounded-xl hover:bg-slate-700 focus:shadow-3xl' />
                        </Slider.Root>
                    </form>
                </li>
            </ul >
        </div>

    )

}