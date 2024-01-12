import { adatLeiro } from "../adatLeiro.js";
import LabelView from "./LabelView.js";

export default class UrlapView {
  #list = [];
    #formAdat = {};
  constructor(list, szuloElem) {
    this.#list = list;
    console.log(this.#list);
    szuloElem.append("<form class='urlap'><fieldset disabled><legend>Ürlap</legend></fieldset></form>");
    this.formElem = szuloElem.find("form");
     this.sorMegjelenit();
    //  this.submitElem.on("click", (event) => {
    //     event.preventDefault();
    //     this.#inputElemObjektumokLista.forEach((elem) => {
    //       console.log(elem)
    //       console.log(elem.key)
    //       this.#formAdat[elem.key]=elem.getValue()
    //     });
    //     this.trigger("ujAdatHozzaAdasa");
    //     this.trigger("torol");
    //   });
    szuloElem.append('<div class="col-md-12 text-center"><button type="submit" id="button" class="btn btn-primary">Küldés</button></div>');
  }

  sorMegjelenit() {
    
    if (!adatLeiro) {
      console.error("adatLeiro nincs definiálva");
      return;
      const labelView = new LabelView(adatLeiro, this.formElem);
  }
}

trigger(esemenyNev) {
  const e = new CustomEvent(esemenyNev, { detail: this.#formAdat });
  window.dispatchEvent(e);
}
}


