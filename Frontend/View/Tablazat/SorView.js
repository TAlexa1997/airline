export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;
    console.log(this.#obj);
    this.htmlOsszerak();
    //megfogjuk a törlés gombot
    this.torlesElem = this.szuloElem.find(".torles:last");
    console.log(this.torlesElem)
    this.torlesElem.on("click",()=>{
      console.log("törlés")
      this.trigger("sorTorles")
  })
  }

  trigger(e){
    const esemenyem = new CustomEvent(e,{detail:this.index})
    window.dispatchEvent(esemenyem);
  }

  htmlOsszerak() {
    let txt="<tr>"
    for (const key in this.#obj) {
        txt+=`<td>${this.#obj[key]}</td>`
    }
    txt+="<td><button class='torles'> Foglalás </button></td>";
    txt+="<td><button class='torles'> Törlés </button></td>";
    txt+="</tr>"
    console.log(txt)
    this.szuloElem.append(txt)
  }
}
