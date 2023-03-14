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
                    " border-[1px] border-dashed gap-3 border-[#00D382] p-[4px] rounded-[35px] w-[250px] h-[56px] [@media(min-width:1920px)]:w-[350px]  [@media(min-width:1920px)]:h-[66px] flex justify-center items-center  "
                }
            >
                <div
                    className={
                        "flex justify-center items-center text-[18px] text-white font-semibold rounded-[30px]  w-[242px] h-[48px]  [@media(min-width:1920px)]:w-[342px]  [@media(min-width:1920px)]:h-[58px]  shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                    }
                    onClick={calculate}
                >
                    Calculate
                </div>
            </div>
        </div>
    );
}