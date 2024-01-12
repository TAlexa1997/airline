import { adatLeiras, adatLeiro } from "../adatLeiro.js";

export default class InputView {
    #obj = {};

    constructor(obj, szuloElem) {
      this.#obj = obj;
      this.szuloElem = szuloElem;
      console.log(this.#obj);
      this.htmlOsszerak();
     
      
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
  

   
  }