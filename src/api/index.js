import axios from "axios";

const getBoxOfItem = (itemBarcode, setterFunction) => {
  console.log(itemBarcode);
  axios
    .get(`http://localhost:5000/api/objects/${itemBarcode}`)
    .then((res) => {
      console.log(res.data);
      setterFunction(res.data.box_barcode);
    })
    .catch((err) => {
      console.log(err);
    });
};

const transferItem = (objectBarcode, boxBarcode) => {
  console.log(objectBarcode);
  const transferRequest = {
    objectBarcode: objectBarcode,
    boxBarcode: boxBarcode,
  };
  axios
    .post(`http://localhost:5000/api/transfer`, transferRequest)
    .then((res) => {
      console.log(res);
    });
};

export { getBoxOfItem, transferItem };
