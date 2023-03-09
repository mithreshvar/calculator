export default function Heading({ blue }) {


    return (
        <div
            className={
                "text-zinc-900 text-5xl font-semibold text-center leading-tight  [@media(max-width:300px)]:text-3xl"
            }
        >
            <span className={"text-blue-600"}>{blue}</span> Calculator
        </div>
    )
}