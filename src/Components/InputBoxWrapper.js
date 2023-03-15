export default function InputBoxWrapper({ children }) {

    return (
        <div
            className={
                "flex-col justify-evenly font-medium text-[14px] [@media(min-width:1920px)]:text-[18px] max-sm:space-y-[12px]  xl:space-y-[20px] sm:space-y-[15px]"
            }
        >
            {children}
        </div>
    );
}