import { downloadAllFile, downloadOneFile } from "@/pages/manage/[room]/file";
import { useState } from "react";

export const GenerateCscFile = ({data}) => {
    const [selectedDirectory, setSelectedDirectory] = useState(null);


    return (
        <ul>
            {data && 
                <button onClick={ () => downloadAllFile(data) }>Télécharger tout les fichiers.</button>
            }
        </ul>
    );
}