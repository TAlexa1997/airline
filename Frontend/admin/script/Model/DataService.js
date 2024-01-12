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
        
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  submitForm() {
    this.formModel = formModel;
    axios.post('/api/submit', this.formModel)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Hiba történt az adatküldés során:', error);
      });
  }

  postData(data, callback) {
    axios.post('/api/saveData', data)
      .then(response => {
        console.log(response.data);
        callback(response.data); 
      })
      .catch(error => {
        console.error('Hiba történt az adatküldés során:', error);
      });
  }

  putData(data, callback) {
    axios.put('/api/saveData', data)
      .then(response => {
        console.log(response.data);
        callback(response.data); 
      })
      .catch(error => {
        console.error('Hiba történt az adatküldés során:', error);
      });
  }

  deleteData(vegpont, id, callback, hibaCallback) {
    axios
      .delete(vegpont + "/" + id)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        hibaCallback(error);
        console.log(error);
      });
  }

}
