export default function ChartFooterElement({ id, label, value, last = false }) {

    const style = `flex justify-between text-[14px] [@media(min-width:1920px)]:text-[18px] font-medium ${(last) ? '' : 'mb-3'}`;

    return (
        <div className={style}>
            <div id={id}>{label}</div>
            <div className={"font-semibold"}>{value}</div>
        </div>
    );
}