export const PopupConfirm = ({ data, changepopup, showPop, action }) => {
  const approve = () => {
    action();
    changepopup(false);
  };

  const cancel = () => {
    changepopup(false);
  };

  return (
    <div className={`confirm-remove  ${!showPop ? "hide" : ""}`}>
      <div className="overlay" onClick={cancel}></div>
      <div className="contents">
        <p>{`${data.length} ${
          data.length > 1 ? "fichiers" : "fichier"
        }  seront exportés`}</p>
        <div className="buttons">
          <button className="btn btn-success" onClick={approve}>
            Yes
          </button>
          <button className="btn btn-danger" onClick={cancel}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};
