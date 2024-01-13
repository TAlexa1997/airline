import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("airlines", this.megjelenit);
    $(window).on("sorSzerkeszt", (e) => {
      const sorIndex = e.detail;
      this.dataService.getData("airlines", (adatok) => {
        if (adatok && adatok.length > sorIndex) {
          const szerkesztendoElem = adatok[sorIndex];
          this.setSzerkesztendoElem(szerkesztendoElem); 
        } else {
          console.log("Hiba: Az adott indexű elem nem létezik.");
        }
      }.bind(this)); 
    }); 
  }
}



  setSzerkesztendoElem(elem) {
    this.szerkesztendoElem = elem;
    document.getElementById('input-id').value = elem.id || ''; 
    document.getElementById('input-name').value = elem.name || ''; 
    document.getElementById('input-country-from').value = elem.from_country || ''; 
    document.getElementById('input-country-to').value = elem.to_country || ''; 
    document.getElementById('input-departure-date').value = elem.ind_datum || ''; 
    document.getElementById('input-arrival-date').value = elem.erk_datum || ''; 
    document.getElementById('input-available-seats').value = elem.szabad_hely || ''; 
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
