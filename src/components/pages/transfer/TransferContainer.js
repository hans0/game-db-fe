/*

*/

import React, { useState } from "react";

import { getBoxOfItem, transferItem } from "../../../api";

import "../../../styles/Transfer.css";

function TransferContainer() {
  const [currentBox, setCurrentBox] = useState("empty");
  const [currentObjectBarcode, setCurrentObjectBarcode] = useState("");

  const [status, setStatus] = useState("All good");

  const handleScanItem = (event) => {
    if (event.key === "Enter") {
      setCurrentObjectBarcode(event.target.value);
      getBoxOfItem(event.target.value, setCurrentBox);
      //console.log(document.getElementsByName("scan-item-input")[0]);
      document.getElementsByName("move-to-box-input")[0].focus();
    }
  };

  const handleScanBox = async (e) => {
    if (e.key === "Enter") {
      await transferItem(currentObjectBarcode, e.target.value, setStatus);
      document.getElementsByName("move-to-box-input")[0].value = "";
      document.getElementsByName("scan-item-input")[0].value = "";
      document.getElementsByName("scan-item-input")[0].focus();
      setCurrentBox("empty");
    }
  };

  return (
    <div className="transfer">
      <div className="header">Move item</div>
      <div className="scan-item">
        Scan item:
        <input type="text" name="scan-item-input" onKeyDown={handleScanItem} />
      </div>
      <div className="current-box">
        Current box:
        <br />
        {currentBox}
      </div>
      <div className="move-to-box">
        Move to box:
        <input type="text" name="move-to-box-input" onKeyDown={handleScanBox} />
      </div>
      <div className="status-message">{status}</div>
    </div>
  );
}

export default TransferContainer;
