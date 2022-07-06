const Language = ({ elem, index }) => {
    return <tr>
        <td>{index + 1}</td>
        <td>{elem.name}</td>
        <td>
            <img src={elem.logo} width="100" height="100" />
        </td>
    </tr>
};

export default Language;
