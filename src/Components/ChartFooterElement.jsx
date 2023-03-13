export default function ChartFooterElement({ id, label, value, last = false }) {

    const style = `flex justify-between text-[14px] font-medium ${(last) ? '' : 'mb-3'}`;//[@media(min-width:1920px)]:text-[18px]

    return (
        <div className={style}>
            <div id={id}>{label}</div>
            <div className={"font-semibold text-[16px]"}>{value}</div>
        </div>
    );
}