export default function ControlBox({ calculate }) {

    return (

        <div
            className={
                "flex flex-warp justify-center mt-[30px] cursor-pointer "
            }
        >{/* Control Box Wrapper */}

            {/* Control boxes */}
            <div
                className={
                    " border-[1px] border-dashed border-[#00D382] p-[4px] rounded-[35px] w-[250px] h-[56px] "
                }
            >
                <div
                    className={
                        "flex justify-center items-center text-white font-semibold rounded-[35px]  w-full h-full   shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                >
                    Calculate
                </div>
            </div>
        </div>
    );
}