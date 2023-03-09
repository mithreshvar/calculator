export default function Subheading({ children }) {


    return (
        <p
            className={
                "text-[#464143] mt-3 text-lg text-center  [@media(max-width:300px)]:text-sm lg:text-lg"
            }
        >
            {children}
        </p>
    )
}