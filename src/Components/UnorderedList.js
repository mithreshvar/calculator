import { VscCircleFilled } from "react-icons/vsc";

export default function UnorderedList({ content }) {

    function addList(text, index) {
        return (
            <li className=" flex flex-row text-[14px] [@media(min-width:1920px)]:text-[18px]" key={`list${index}`}>
                <VscCircleFilled className="text-[#00DD6F] mt-[2px] -ml-[3px] mr-[2px] w-[15px] h-[15px] shrink-0 " />
                {text}
            </li>
        )
    }

    return (
        <ul >
            {content.map(addList)}
        </ul>
    );
}