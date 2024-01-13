
export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;
    this.id = this.#obj.id;
    this.htmlOsszerak();
    //megfogjuk a törlés gombot
    this.torlesElem = this.szuloElem.find(".torles:last");
    this.szerkesztElem = this.szuloElem.find(".szerkesztes:last");
    console.log(this.torlesElem);
    $(".torles").click(function() {
      $(this).closest("tr").remove();
    });

    this.szerkesztElem.on("click", () => {
      const szerkesztendoElem = this.#obj;
      this.trigger("sorSzerkeszt", szerkesztendoElem);
    });
  }

  trigger(e) {
    const esemenyem = new CustomEvent(e, { detail: this.#obj.id });
    window.dispatchEvent(esemenyem);
  }

  htmlOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      let value = this.#obj[key];
      // Ha az érték objektum, ne jelenítsük meg.
      if (typeof value === "object") {
        continue;
      }
      
      txt += `<td>${value}</td>`;
    }
    txt += "<td><button class='szerkesztes'> Szerkesztés </button></td>";
    txt += `<td><button class='torles'> Törlés </button></td>`;
    txt += "</tr>";
    this.szuloElem.append(txt);
  }
}
