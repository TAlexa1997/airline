import { adatLeiras} from "../adatLeiro.js";

export default class InputView {
    #obj = {};

    constructor(obj, szuloElem) {
      this.#obj = obj;
    this.szuloElem = szuloElem;
    console.log(this.#obj);
    this.htmlOsszerak();
    this.formElem = szuloElem.find("form"); 
    this.submitElem = this.formElem.find("#submit");
    this.collForm();
    }
    
    htmlOsszerak() {
      let urlap = "<div class='divek'>";
      for (const key in adatLeiras) {
          if (key !== "id") {
              const leiras = adatLeiras[key];
              urlap += `<label for="${key}" class="form-label">${leiras.megjelenes}</label>`;
              urlap += `<input type="${leiras.tipus}" id="${key}" class="form-control" placeholder="${leiras.megjelenes}"></input>`;
          }
      }
      urlap += "</div>";
      this.szuloElem.append(urlap);
  }

  collForm() {
    this.idElem = this.formElem.find("#id");
    this.submitElem = this.formElem.find("#submit");
    this.nameElem = this.formElem.find("#name");
    this.countryElem = this.formElem.find("#country");
    this.from_countryElem = this.formElem.find("#from_country");
    this.ind_datumElem = this.formElem.find("#ind_datum");
    this.erk_datumElem = this.formElem.find("#erk_datum");
    this.szabad_helyElem = this.formElem.find("#szabad_hely");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#obj.id = this.idElem.val();
      this.#obj.name = this.nameElem.val();
      this.#obj.country = this.countryElem.val();
      this.#obj.from_country = this.from_countryElem.val();
      this.#obj.ind_datum = this.ind_datumElem.val();
      this.#obj.erk_datum = this.erk_datumElem.val();
      this.#obj.szabad_hely = this.szabad_helyElem.val();
      if (this.#obj.id) {
        console.log("put");
        this.trigger("putSubmit");
      } else {
        console.log("post");
        this.trigger("postSubmit");
      }
    });
  }
  }