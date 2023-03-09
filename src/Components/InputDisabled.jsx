export default function InputDisabled({ heading, value }) {


    return (
        <div className={' flex justify-between flex-warp'}>
            <div className=' w-[58%] self-center'>{heading}</div>
            <div className=" flex items-center justify-center bg-[#CCCCCC] w-[39%] h-[45px] bg-opacity-[0.39] rounded-[100px] font-semibold  ">{value}</div>
        </div>
    );
}