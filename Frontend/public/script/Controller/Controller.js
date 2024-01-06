import DataService from "../../public/Model/DataService.js";
import TablaView from "../../public/View/Tablazat/TablaView.js";

export default class  Controller{
    constructor(){
        this.dataService=new DataService()

        this.dataService.getData("airlines", this.megjelenit)
        $(window).on("sorTorles",(e)=>{
            console.log(e.detail)
            this.dataService.deleteData("adatok.json", e.detail,this.hibaCallback)
        })

    }

    hibaCallback(){
        console.log(err)
        // példányosíthatom a HibaCallbackView osztályt
    }

    megjelenit(list){
        console.log(list)
        //példányosítjuk a view-t Táblázatot
        new TablaView(list, $(".adatok"))
    }
}