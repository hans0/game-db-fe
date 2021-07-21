/*

*/

import React, { useState } from "react";

import { getBoxOfItem, transferItem } from "../../../api";

import "../../../styles/Transfer.css";

function TransferContainer(props) {
  const [currentBox, setCurrentBox] = useState("empty");

  const handleScanItem = (event) => {
    if (event.key === "Enter") {
      getBoxOfItem(event.target.value, setCurrentBox);
    }
  };

  return (
    <div className="transfer">
      <div class="header">Move item</div>
      <div class="scan-item">
        Scan item:
        <input type="text" name="scan-item-input" onKeyDown={handleScanItem} />
      </div>
      <div class="current-box">
        Current box:
        <br />
        {currentBox}
      </div>
      <div class="move-to-box">
        Move to box:
        <input type="text" name="move-to-box-input" />
      </div>
      <div class="status-message"></div>
    </div>
  );
}

export default TransferContainer;
