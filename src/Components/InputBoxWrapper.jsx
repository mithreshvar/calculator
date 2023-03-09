export default function InputBoxWrapper({ children }) {

    return (
        <div
            className={
                "flex-col justify-evenly font-medium max-sm:space-y-3  xl:space-y-[20px] lg:space-y-[15px]"
            }
        >
            {children}
        </div>
    );
}