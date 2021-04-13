var MODEL = (function (){
// HOME PAGE
    var homeContent = `<div class="home">
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda dolores officia atque libero enim laboriosam ipsa deserunt alias facilis, placeat, molestiae praesentium! Soluta quas nobis, saepe autem accusantium velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias dolor, praesentium optio omnis similique. Neque sapiente impedit, tempora adipisci non id ullam vel iste fugiat atque modi, facere nisi!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam possimus ab doloremque nisi illum asperiores blanditiis, eius maiores cum eaque quos assumenda sequi officia explicabo. Ipsa harum consequuntur consectetur incidunt.</p>
</div>`;

// ABOUT PAGE
    var aboutContent = ``;

// PRODUCT PAGE
    var productContent = ``;

// CONTACT PAGE
    var contactContent = ``;


  var _getPageContent = function (pageId){
      _addName (pageId, "Tatiana Perry");
      $("#app").html(eval(pageId));
  }  

  var _showName = function (userName){
      console.log(userName);
  }

  var _addNames = function (firstName, secondName) {
      console.log(firstName + " " + secondName);
  }

  return {
      getPageContent: _getPageContent,
      showName: _showName,
  };
})();