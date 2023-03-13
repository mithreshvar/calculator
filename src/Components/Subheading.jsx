export default function Subheading({ children }) {


    return (
        <p
            className={
                "text-[#464143] mt-[10px] text-center  [@media(max-width:300px)]:text-sm text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal "
            }
        >
            {children}
        </p>
    )
}