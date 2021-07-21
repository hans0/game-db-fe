import axios from "axios";

const getBoxOfItem = (itemBarcode, setterFunction) => {
  console.log(itemBarcode);
  axios
    .get(`http://localhost:5000/api/objects/${itemBarcode}`)
    .then((res) => {
      console.log(res.data);
      setterFunction(res.data.box_barcode)
    })
    .catch((err) => {
      console.log(err);
    });
};

const transferItem = (item) => {};

export { getBoxOfItem, transferItem };
