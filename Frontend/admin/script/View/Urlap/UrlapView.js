import { adatLeiro } from "../adatLeiro.js";
import LabelView from "./LabelView.js";
import SorView from "../Tablazat/SorView.js";


export default class UrlapView {
  #list = [];
  #inputElemObjektumokLista = {};
    #formAdat = {};
  constructor(list, szuloElem) {
    this.#list = list;
    console.log(this.#list);
    this.formElem = szuloElem.find("form");
    this.tbodyElem = szuloElem.find("tbody");
    this.submitElem = this.formElem.find("#button");
    szuloElem.append("<form class='urlap'><fieldset disabled><legend>Ürlap</legend></fieldset></form>");
    this.formElem = szuloElem.find("form");
     this.sorMegjelenit();
     $('#myForm').on('submit', (e) => {
      e.preventDefault();
      const updatedData = {
        id: $('#id').value,
        name: $('#name').value,
        country_from:('#country_from').value,
        country:('#country').value,
        ind_datum:('#ind_datum').value,
        erk_datum:('#erk_datum').value, 
        szabad_hely:('#szabad_hely').value,
      };
      this.dataService.putData(updatedData, "airlines", (response) => {
        console.log('Adat frissítve:', response);
      }, updatedData.id);
    });
    szuloElem.append('<div class="col-md-12 text-center"><button type="submit" id="button" class="btn btn-primary">Küldés</button></div>');
  }

  sorMegjelenit() {
      const labelView = new LabelView(adatLeiro, this.formElem);
      this.frissitTablazat();
}

frissitTablazat() {
  this.#list.forEach((elem,index)=>{
    new SorView(index, elem, this.tbodyElem);
}) 

  
}

trigger(esemenyNev) {
  const e = new CustomEvent(esemenyNev, { detail: this.#formAdat });
  window.dispatchEvent(e);
}
}


