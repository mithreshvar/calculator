import styles from '@/styles/Input.module.css'
import { useState } from 'react';
export default function Input({ id, type = '', min = 0, max, step = 1, value, setValue }) {


    const [textValue, setTextValue] = useState(((type === 'rupees') ? '\u20B9' : '') + Number(value).toLocaleString("en-In"));


    const handleSliderValue = (event) => {
        let tempValue = event.target.value;
        setValue(Number(tempValue));
        setTextValue(((type === 'rupees') ? '\u20B9' : '') + tempValue.toLocaleString("en-In"));
        //console.log(value, textValue);
    }


    const addSymbol = (event) => {
        if (!(String(textValue).charAt(0) == '\u20B9')) {
            setTextValue(((type === 'rupees') ? '\u20B9' : '') + Number(event.target.value).toLocaleString("en-In"));
        }
    }

    const removeSymbol = (event) => {
        setTextValue(event.target.value.replace(/,|\u20B9|%/g, ''));
    }




    const handleTextValue = (event) => {

        let tempValue = event.target.value;
        if ((!(isNaN(tempValue)) && tempValue > 0 && tempValue <= max) || tempValue == '' || tempValue == '0') {

            if (tempValue == "") {
                tempValue = '0';
            }
            else if (tempValue.length == 2 && tempValue.charAt(0) == '0') {
                tempValue = tempValue.charAt(1);
            }
            setTextValue(tempValue);
            setValue(Number(tempValue));
        }

    };


    return (
        <div className={styles.inputBox}>
            <div className={' flex justify-between flex-warp '}>
                <div className=' w-[58%]    '>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        id={id}
                        onChange={handleSliderValue}
                        className={'my-4 accent-[#00D382] bg-transparent '}
                    />
                </div>
                <div className=' w-[39%]   '>
                    <input
                        type="text"
                        value={textValue}
                        id={`${id}Label`}
                        min={min}
                        max={max}
                        onBlur={(type === '') ? null : addSymbol}
                        onFocus={(type === '') ? null : removeSymbol}
                        className={'h-[45px] w-full bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center font-semibold '}
                        onChange={handleTextValue}
                    />
                </div>
            </div>
        </div>
    )
}