export default function Heading({ blue }) {


    return (
        <div
            className={
                "text-[#000000] text-[40px] font-semibold text-center leading-tight  [@media(max-width:300px)]:text-3xl [@media(max-width:1366px)]:text-[36px]  [@media(min-width:1920px)]:text-[60px] "
            }
        >
            <span className={"text-[#0161FF]"}>{blue}</span> Calculator
        </div>
    )
}