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
      for (const key in this.#obj) {
        urlap += `<label for="${key}" class="form-label">${key}</label>`;
        urlap += `<input type="text" id="${key}" class="form-control" placeholder="${key}"></input>`;
      }
      urlap += "</div>"
      this.szuloElem.append(urlap);
    }
  }