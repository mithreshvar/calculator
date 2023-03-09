import { FaChartPie, FaChartLine } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";

export default function ChartToggle({ isLineChart, setCheck }) {


    return (
        <div
            className={
                " absolute flex flex-wrap z-10 place-content-center  w-[61px] h-[33px]  rounded-[30px] border-2 border-solid border-white bg-[#505C6227] shadow-md shadow-[#505C6227] backdrop-blur-[30px] m-0"
            }
        >
            <button
                className={
                    isLineChart
                        ? " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px]"
                        : " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                }
                onClick={() => {
                    setCheck(true);
                }}
            >
                <MdOutlineShowChart className=" -ml-[0.5px] " />
            </button>
            <button
                className={
                    isLineChart
                        ? " w-[23px] h-[23px] rounded-[50px] p-[2px] text-[#909090] mx-[1px]"
                        : " w-[23px] h-[23px] rounded-[50px] text-white bg-[#0161FF] border-2 border-solid border-white p-[2px] mx-[1px] "
                }
                onClick={() => {
                    setCheck(false);
                }}
            >
                <FaChartPie className=" -mt-[0.7px] " />
            </button>
        </div>
    );

}