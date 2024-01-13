import {adatLeiro} from "../adatLeiro.js";
import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";
export default class TablaView{
    #list=[]
    szuloElem = null;
    constructor(list, szuloElem){
        this.#list=list;
        this.szuloElem = szuloElem; 
        szuloElem.append(`<table class='table table-striped'>
                                <thead></thead>
                                <tbody></tbody>
                            </table>`)
        this.tableElem = szuloElem.find("table");
        this.tbodyElem=szuloElem.find("tbody")
        this.theadElem=szuloElem.find("thead")
     
        new FejlecView(adatLeiro,this.theadElem)
        this.sorMegjelenit()
    }

    sorMegjelenit(){
        this.#list.forEach((elem,index)=>{
            new SorView(index, elem, this.tbodyElem);

        })
        
    }
    // frissit(ujLista) {
    //     this.#list = ujLista;
    //     this.tbodyElem.empty();
    //     this.sorMegjelenit();  
    //   }

    
}