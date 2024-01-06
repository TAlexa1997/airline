export default class DataService {
    constructor() {
      console.log("DataServise");
      axios.defaults.baseURL="http://127.0.0.1:8000/api/"
    }
    getData(vegpont, callback) {
      axios 
        .get(vegpont)
        .then(function (response) {
          // handle success
          console.log(response);
          console.log(response.data);
          console.log(response.data.irok);
          callback(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    }
  
    postData() {}
  
    putData() {}
  
    deleteData(vegpont,id,hibaCallback) {
      axios
        .delete(vegpont+"/"+id)
        .then(function (response) {
          callback(response.data);
        })
        .catch(function (error) {
          hibaCallback(error)
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }
  