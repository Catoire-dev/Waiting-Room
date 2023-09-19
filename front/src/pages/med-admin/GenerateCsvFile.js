export const GenerateCscFile = ({data}) => {
    

    return (
        <ul>
            {data && 
            data.map(d => <li>{d}</li>)}
        </ul>
    );
}