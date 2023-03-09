import styles from '@/styles/Input.module.css'
import { useEffect, useState } from 'react';
export default function Input({ id, type = '', min = 0, max, step = 1, value, setValue }) {


    const [textValue, setTextValue] = useState(((type === 'rupees') ? '\u20B9' : '') + Number(value).toLocaleString("en-In"));


    const addSymbol = (event) => {
        if (!(event.target.value.charAt(0) == '\u20B9')) {
            event.target.value = ((type === 'rupees') ? '\u20B9' : '') + Number(event.target.value).toLocaleString("en-In");
        }
    }

    const removeSymbol = (event) => {
        event.target.value = Number(event.target.value.replace(/,|\u20B9|%/g, ''));
    }


    const handleSliderValue = (event) => {
        setValue(event.target.value);
        setTextValue(((type === 'rupees') ? '\u20B9' : '') + Number(event.target.value).toLocaleString("en-In"));
    }

    const handleTextValue = (event) => {

        if ((!(isNaN(event.target.value)) && event.target.value > 0 && event.target.value <= max) || event.target.value == '' || event.target.value == '0') {
            if (event.target.value == "") {
                setTextValue(0);
            }
            else if (event.target.value.length == 2 && event.target.value.charAt(0) == '0') {
                setTextValue(Number(event.target.value.charAt(1)));
            }
            else {
                setTextValue(Number(event.target.value));
            }
        }

        setValue(textValue);

    };

    // useEffect(() => {
    //     setTextValue(((type === 'rupees') ? '\u20B9' : '') + Number(value).toLocaleString("en-In"));
    // }, [value]);

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
                        onBlur={addSymbol}
                        onFocus={removeSymbol}
                        className={'h-[45px] w-full bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center font-semibold '}
                        onChange={handleTextValue}
                    />
                </div>
            </div>
        </div>
    )
}