export default function InputBoxWrapper({ children }) {

    return (
        <div
            className={
                "flex-col justify-evenly font-medium max-sm:space-y-[12px]  xl:space-y-[20px] sm:space-y-[15px]"
            }
        >
            {children}
        </div>
    );
}