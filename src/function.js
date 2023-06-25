// const id = useParams();

const showDetail = (id, data) => {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      //   console.log("for data", data[i]);
      return data[i];
    }
  }
};
export default showDetail;
