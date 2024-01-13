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
      const setValue = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
          element.value = value;
        } else {
          console.warn(`Element not found: ${id}`);
        }
      };
      
      setValue('id', elem.id || '');
      setValue('name', elem.name || '');
  setValue('from_country', elem.from_country || '');
  setValue('country', elem.country || '');
  setValue('ind_datum', elem.ind_datum || '');
  setValue('erk_datum', elem.erk_datum || '');
  setValue('szabad_hely', elem.szabad_hely || '');
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
