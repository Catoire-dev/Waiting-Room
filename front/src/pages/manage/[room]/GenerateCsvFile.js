import { downloadAllFile } from "@/pages/manage/[room]/file";
import { useState } from "react";
import { PopupConfirm } from "./PopupConfirm";

export const GenerateCscFile = ({ data }) => {
  const [togglePopup, setTogglePopup] = useState(false);

  const exportToCsv = () => {
    downloadAllFile(data);
  };

  const toglePopup = () => {
    setTogglePopup(true);
  };

  return (
    <>
      <button
        className="btn btn-success"
        onClick={toglePopup}
        disabled={!(data && (data.length > 0))}
      >
        Télécharger tout les fichiers.
      </button>

      <PopupConfirm
        action={exportToCsv}
        data={data}
        changepopup={setTogglePopup}
        showPop={togglePopup}
      />
    </>
  );
};
