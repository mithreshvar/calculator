export default function Heading({ blue }) {


    return (
        <div
            className={
                "text-[#000000] text-5xl font-semibold text-center leading-tight  [@media(max-width:300px)]:text-3xl"
            }
        >
            <span className={"text-[#0161FF]"}>{blue}</span> Calculator
        </div>
    )
}