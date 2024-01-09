
import DataService from "../Model/DataService.js";
import UrlapView from "../View/Urlap/UrlapView.js";


class UrlapController {
  constructor() {
    this.dataService=new DataService();
    this.dataService.getData("airlines",this.megjelenit.bind(this))
  }

    megjelenit(list){
        console.log(list);
        //példányosítjuk a view-t az Ürlapot
        new UrlapView(list,$(".urlap"))
    }


  };


export default UrlapController;
