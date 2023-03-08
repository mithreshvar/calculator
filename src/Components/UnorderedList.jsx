import { VscCircleFilled } from "react-icons/vsc";

export default function UnorderedList({ content }) {

    function addList(text) {
        return (
            <li className=" flex flex-row ">
                <VscCircleFilled className="text-[#00DD6F] mt-[6px] ml-[4.5px] mr-[4px] w-[15px] h-[15px] shrink-0 " />
                {text}
            </li>
        )
    }

    return (
        <ul className="space-y-2">
            {content.map(addList)}
        </ul>
    );
}