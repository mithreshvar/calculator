export default function ControlBox({ calculate }) {

    return (

        <div
            className={
                "flex flex-warp justify-center mt-[40px] cursor-pointer "
            }
        >{/* Control Box Wrapper */}

            {/* Control boxes */}
            <div
                className={
                    " border-[0.1rem] border-dashed border-[#36b366] p-[4px] rounded-[35px] w-[65%]"
                }
            >
                <div
                    className={
                        "text-center text-white font-semibold rounded-[35px] p-[0.4rem]   shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                >
                    Calculate
                </div>
            </div>
        </div>
    );
}