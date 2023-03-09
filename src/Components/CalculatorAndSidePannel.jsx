export default function CalculatorAndSidePannel({ children, height }) {

    let style = ` xl:flex max-xl:flex-col flex-wrap w-full xl:max-h-[${height}px]  mt-[50px] [@media(max-width:400px)]:mt-[20px] justify-between `;

    return (
        <div
            className={style}
        >
            {children}
        </div>
    );

}