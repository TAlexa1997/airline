export default class DataService {
  constructor() {
    console.log("DataService");
    axios.defaults.baseURL="http://127.0.0.1:8000/api/"
  }
  getData(vegpont, callback) {
    axios
      .get(vegpont) 
      .then(function (response) {
        console.log(response);
        if (callback && typeof callback === 'function') {
          callback(response.data); 
        }
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

  postData(data, callback,vegpont) {
    console.log(vegpont, JSON.stringify(data));
    axios
      .post(vegpont, data)
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  
    // putData(adatok, callback, vegpont) {
    //   axios.put(`api/${vegpont}`, adatok)
    //     .then(response => {
    //       if (callback) callback(response.data);
    //     })
    //     .catch(error => console.error(error));
    // }
  

  deleteData(vegpont, id, callback) {
    axios
      .delete(`${vegpont}/${id}`) 
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.error('Törlési kérés hibája:', error.response || error.message);
      })      
      .finally(function () {
      });
  }
  

}
