import { downloadAllFile, downloadOneFile } from "@/utils/file";
import { useState } from "react";

export const GenerateCscFile = ({data}) => {
    const [selectedDirectory, setSelectedDirectory] = useState(null);


    return (
        <ul>
            {/* {data && 
            data.map(d => <li>{d}</li>)} */}
            {data && 
                <button onClick={ () => downloadAllFile(data) }>Télécharger tout les fichiers.</button>
            }
            {/* <a href={blobUrl} download={"ffdp.csv"}>Download</a> */}
        </ul>
    );
}