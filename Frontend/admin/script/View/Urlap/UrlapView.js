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
     this.submitElem.on("click", (event) => {
        event.preventDefault();
        this.#inputElemObjektumokLista.forEach((elem) => {
          console.log(elem)
          console.log(elem.key)
          this.#formAdat[elem.key]=elem.getValue()
        });
        this.trigger("ujAdatHozzaAdasa");
        this.trigger("torol");
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


