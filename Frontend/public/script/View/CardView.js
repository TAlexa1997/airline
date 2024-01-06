import {adatLeiro} from "../../../admin/View/adatLeiro.js";
import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";
export default class CardView{
    #list=[]
    constructor(list, szuloElem){
    
        this.#list=list;
   
        szuloElem.append(`<table class='table table-striped'>
                                <thead></thead>
                                <tbody></tbody>
                            </table>`)
        this.tbodyElem=szuloElem.find("tbody")
        this.theadElem=szuloElem.find("thead")
     
        new FejlecView(adatLeiro,this.theadElem)
        this.sorMegjelenit()
    }

    sorMegjelenit(){
        // itt fogjuk példányosítani a sort, annyiszor , ahány elem vana  listában
        this.#list.forEach((elem,index)=>{
            new SorView(index,elem,this.tbodyElem)
        })
    }

}