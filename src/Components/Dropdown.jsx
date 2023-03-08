
export default function Dropdown({ heading, value, setValue }) {



    return (
        <div className="flex justify-between mt-3">
            <div className="sm:w-[58%] self-center ">{heading}</div>

            <div className="sm:w-[39%]">
                <select value={value} onChange={(e) => { setValue(e.target.value) }} className={'h-[45px] w-full bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center font-semibold backdrop-blur-[30px] bg-blue'} >
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                </select>
            </div>
        </div>

    );
}