export default function Table({ heading, content }) {

    function addRow(value) {
        return (
            <tr>{value.map(addData)}</tr>
        );
    }

    function addHeading(value) {
        return (
            <th className=" border-2 border-black ">{value}</th>
        );
    }

    function addData(value) {
        return (
            <td className=" border-2 border-black text-center">{value}</td>
        );
    }

    return (
        <table className=" border-2 border-black ">
            <tr>
                {heading.map(addHeading)}
            </tr>
            {content.map(addRow)}
        </table>
    );
}