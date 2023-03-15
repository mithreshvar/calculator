import RelatedCalculatorElement from "@/Components/RelatedCalculatorElement.js";

export default function RelatedCalculators({ contents }) {

    function addRelatedCalculatorElement(element, index) {

        return (
            <RelatedCalculatorElement
                key={`relatedCalculator${index}`}
                name={element[0]}
                path={element[1]}
                first={(index === 0) ? true : false}
            />
        );
    }

    return (
        <div className={"mt-[30px] "}>
            <div className={"font-bold mb-[14px] text-[#464143] text-[16px] [@media(min-width:1920px)]:text-[20px]"}>
                Related Calculators
            </div>

            <div className={"overflow-x-scroll flex -mx-20  "}>
                {contents.map(addRelatedCalculatorElement)}
            </div>
        </div>
    );
}