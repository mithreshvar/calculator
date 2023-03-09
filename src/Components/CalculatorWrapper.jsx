export default function CalculatorWrapper({ children }) {


    return (
        <div
            className={
                "lg:flex max-md:flex-col p-[30px] [@media(max-width:400px)]:p-[15px] xl:w-[75%]  max-lg:space-y-7  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]"
            }
        >
            {children[0]}
            {/* vertical line */}
            <div
                className={
                    " -my-4 mx-5 w-0  max-lg:h-0 max-lg:w-auto max-lg:-mx-2   rounded-[50px] border-2 border-solid border-[#7070701A]"
                }
            ></div>
            {children[1]}
        </div>
    );

}