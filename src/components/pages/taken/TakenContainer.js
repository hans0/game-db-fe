import React, { useState } from "react";

import { isBarcodeTaken, createBarcode } from "../../../api";

function TakenContainer() {
  const [barcode, setBarcode] = useState("");
  const [taken, setTaken] = useState("");
  const [created, setCreated] = useState("");

  const handleScanObject = async (event) => {
    if (event.key === "Enter") {
      setBarcode(event.target.value);
      isBarcodeTaken(event.target.value, setTaken);
      document.getElementsByName("scan-barcode-input")[0].value = "";
      document.getElementsByName("scan-barcode-input")[0].focus();
    }
  };

  const handleCreate = (event) => {
    console.log("handleCreate " + barcode);
    createBarcode(barcode, setCreated);
  };

  return (
    <div>
      Taken
      <div>
        <input
          type="text"
          name="scan-barcode-input"
          onKeyDown={handleScanObject}
        />
      </div>
      <div>
        Barcode {barcode} is{" "}
        {taken === `False` || taken === "" ? `Not taken` : `Taken`}
      </div>
      {taken === `False` ? <button onClick={handleCreate}>Create?</button> : ""}
      {created === `False` || created === ``
        ? ""
        : `${barcode} created in database`}
    </div>
  );
}

export default TakenContainer;
