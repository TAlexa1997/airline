import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();

    this.dataService.getData("airlines", this.megjelenit);
    $(window).on("sorTorles", (e) => {
      console.log(e.detail);
      this.dataService.deleteData(
        "adatok.json",
        e.detail,
        this.megjelenit,
        this.hibaCallback
      );
    });

    $(window).on("sorSzerkeszt", (e) => {
      const sorIndex = e.detail;
      const szerkesztendoElem = this.dataService.getList()[sorIndex]; 
  this.dataService.setSzerkesztendoElem(szerkesztendoElem);
    });
  }
  


  hibaCallback() {
    console.log(err);
    // példányosíthatom a HibaCallbackView osztályt
  }

  megjelenit(list) {
    console.log(list);
    //példányosítjuk a view-t Táblázatot
    new TablaView(list, $(".adatok"));
  }
};
