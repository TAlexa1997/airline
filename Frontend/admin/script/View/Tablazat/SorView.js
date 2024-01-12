export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;
    this.htmlOsszerak();
    //megfogjuk a törlés gombot
    this.torlesElem = this.szuloElem.find(".torles:last");
    this.szerkesztElem = this.szuloElem.find(".szerkesztes:last");
    console.log(this.torlesElem);
    this.torlesElem.on("click", () => {
      console.log("törlés");
      this.trigger("sorTorles");
    });
    this.szerkesztElem.on("click", () => {
      this.trigger("sorSzerkeszt");
    });
  }

  trigger(e) {
    const esemenyem = new CustomEvent(e, { detail: this.index });
    window.dispatchEvent(esemenyem);
  }

  htmlOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      console.log(this.#obj[key]);
      txt += `<td>${this.#obj[key]}</td>`;
    }
    txt += "<td><button class='szerkesztes'> Szerkesztés </button></td>";
    txt += "<td><button class='torles'> Törlés </button></td>";
    txt += "</tr>";
    this.szuloElem.append(txt);
  }
}
