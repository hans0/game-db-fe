import axios from "axios";

const getBoxOfItem = (itemBarcode, setterFunction) => {
  // console.log(itemBarcode);
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

const transferItem = async (objectBarcode, boxBarcode, statusSetter) => {
  // console.log(objectBarcode);
  const transferRequest = {
    objectBarcode: objectBarcode,
    boxBarcode: boxBarcode,
  };
  await axios
    .post(`http://localhost:5000/api/transfer`, transferRequest)
    .then((res) => {
      console.log(res);
      statusSetter(
        res.data.object_barcode + " was moved to box " + res.data.barcode
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

const isBarcodeTaken = async (barcode, takenSetter) => {
  await axios
    .get(`http://localhost:5000/api/barcode/${barcode}/taken`)
    .then((res) => {
      console.log(res);
      takenSetter(res.data.taken);
    });
};

const createBarcode = async (barcode, createdSetter) => {
  console.log("Creating " + barcode);
  await axios
    .post(`http://localhost:5000/api/barcode/create/${barcode}`)
    .then((res) => {
      console.log(res);
      createdSetter(res.status);
    });
};

export { getBoxOfItem, transferItem, isBarcodeTaken, createBarcode };
