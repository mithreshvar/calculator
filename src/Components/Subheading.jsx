export default function Subheading({ children }) {


    return (
        <p
            className={
                "text-[#464143] mt-3 text-center  [@media(max-width:300px)]:text-sm text-[14px] "
            }
        >
            {children}
        </p>
    )
}