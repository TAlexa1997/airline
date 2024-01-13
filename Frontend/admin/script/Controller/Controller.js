
import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("airlines", this.megjelenit);
    $(window).on("sorTorles", (e) => {
      const idToDelete = e.detail;
      this.dataService.deleteData(
        "airlines", 
        idToDelete,
        () => {
          alert("Sor sikeresen törölve!");
          this.dataService.getData("airlines", this.megjelenit);
        },
        this.hibaCallback
      );
    });
    
    $(window).on("sorSzerkeszt", (e) => {
      const sorIndex = e.detail;
      const szerkesztendoElem = this.dataService.getData()[sorIndex]; 
  this.dataService.setSzerkesztendoElem(szerkesztendoElem);
    });
  }

  hibaCallback(err) {
    console.log(err);
    // példányosíthatom a HibaCallbackView osztályt
  }

  megjelenit(list) {
    console.log(list);
    //példányosítjuk a view-t Táblázatot
    new TablaView(list, $(".adatok"));
  }
};
