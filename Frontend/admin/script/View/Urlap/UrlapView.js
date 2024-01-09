import LabelView from "./LabelView.js";

export default class UrlapView {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    console.log(this.#list);
    szuloElem.append("<form class='urlap'><fieldset disabled><legend>Ürlap</legend></fieldset></form>");
    this.formElem = szuloElem.find("form");
    this.sorMegjelenit();
    szuloElem.append("<button type='submit' class='btn btn-primary'>Küldés</button>");
  }

  sorMegjelenit() {
    const labelView = new LabelView({
        nev: this.#list[0].nev,
        country: this.#list[0].country,
        from_country: this.#list[0].from_country,
        ind_datum: this.#list[0].ind_datum,
        erk_datum: this.#list[0].erk_datum,
        szabad_hely: this.#list[0].szabad_hely
    }, this.formElem);
}
}


