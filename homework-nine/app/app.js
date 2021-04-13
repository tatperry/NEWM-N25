
import * as MODEL from "../model/model.js";

var userVarName = "Variable";

// named function 
function init(){
    let currentHomeImage = "home";

    $("nav a").click(function(e) {
        let btnId = this.id;
        let contentID = btnId + "Content";

        // changing hero image
        $(".hero")
            .removeClass(`${currentHomeImage}-home-image`)
            .addClass(`${btnId}-home-image`);
         currentHomeImage = btnId;
         $(".home-content .page-name").html(btnId);

         MODEL.getPageContent(contentID);
         MODEL.showName("Tatiana Perry");
    });
}

$(document).ready(function(){
    MODEL.getPageContent("homeContent");
    init();
});