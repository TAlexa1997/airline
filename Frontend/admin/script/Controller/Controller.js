import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("airlines", this.megjelenit);
    const self = this;
    $(window).on("sorSzerkeszt", (e) => {
      const sorIndex = e.detail;
      self.dataService.getData("airlines", (adatok) => {
        if (adatok && adatok.length > sorIndex) {
          const szerkesztendoElem = adatok[sorIndex];
          self.setSzerkesztendoElem(szerkesztendoElem); 
        } else {
          console.log("Hiba: Az adott indexű elem nem létezik.");
        }
      }); 
    });
  }

  setSzerkesztendoElem(elem) {
    this.szerkesztendoElem = elem;
    document.getElementById('id').value = elem.id || ''; 
    document.getElementById('name').value = elem.name || ''; 
    document.getElementById('country_from').value = elem.from_country || ''; 
    document.getElementById('country').value = elem.country || ''; 
    document.getElementById('ind_datum').value = elem.ind_datum || ''; 
    document.getElementById('erk_datum').value = elem.erk_datum || ''; 
    document.getElementById('szabad_hely').value = elem.szabad_hely || ''; 
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
}
