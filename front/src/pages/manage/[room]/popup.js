import { useState } from "react";

export const RemoveFavPop = ({ data,changepopup ,showPop }) => {
  const [togglePopup, setTogglePopup] = useState(true);

  const removeFromFavorites = () => {
    console.log("yes");
    changepopup(false);
  };

  const cancel = () => {
    console.log("no");
    changepopup(false);
  };

  return (
    <div className={`confirm-remove  ${!showPop ? "hide" : ""}`}>
      <div className="overlay" onClick={cancel}></div>
      <div className="contents">
        <p>{`${data} will be exported`}</p>
        <div className="buttons">
          <button className="head-btn" onClick={removeFromFavorites}>
            Yes
          </button>
          <button className="head-btn" onClick={cancel}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};
