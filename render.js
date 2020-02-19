var condiBtn = document.getElementById("condi");
condiBtn.className = "condi-style";
condiBtn.addEventListener('click', function(){
    var condModel = new Conditioner("LG");
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.render();
})

var cameBtn = document.getElementById("came");
cameBtn.className = "came-style";
cameBtn.addEventListener('click', function(){
    var condModel = new Camera("Samsung");
    var viewCondModel = new ViewCamera(condModel, document.getElementById("root"));
    viewCondModel.render();
}) 

var signBtn = document.getElementById("sign");
signBtn.className = "sign-style";
signBtn.addEventListener('click', function(){
    var condModel = new Signaling("Panasonic");
    var viewCondModel = new ViewSignaling(condModel, document.getElementById("root"));
    viewCondModel.render();
})