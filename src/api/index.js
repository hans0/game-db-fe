import axios from "axios";

// There's a more elegant place for this, but this will have to do for now
const herokuUrl = "https://retro-game-db.herokuapp.com";

const getBoxOfItem = (itemBarcode, setterFunction) => {
  // console.log(itemBarcode);
  axios
    .get(`${herokuUrl}/api/objects/${itemBarcode}`)
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
    .post(`${herokuUrl}/api/transfer`, transferRequest)
    .then((res) => {
      console.log(res);
      statusSetter(
        res.data.object_barcode + " was moved to box " + res.data.barcode
      );
    })
    .catch((err) => {
      console.log(err);
      statusSetter(
        "ERROR: " + objectBarcode + " was NOT moved to " + boxBarcode
      );
    });
};

const isBarcodeTaken = async (barcode, takenSetter) => {
  await axios.get(`${herokuUrl}/api/barcode/${barcode}/taken`).then((res) => {
    console.log(res);
    takenSetter(res.data.taken);
  });
};

const createBarcode = async (barcode, createdSetter) => {
  console.log("Creating " + barcode);
  await axios.post(`${herokuUrl}/api/barcode/create/${barcode}`).then((res) => {
    console.log(res);
    createdSetter(res.status);
  });
};

export { getBoxOfItem, transferItem, isBarcodeTaken, createBarcode };
