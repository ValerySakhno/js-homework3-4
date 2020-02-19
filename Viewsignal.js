  
function ViewSignaling(signaling, rootDom){
    this._signaling = signaling;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}


ViewSignaling.prototype = Object.create(Devices.prototype);
ViewSignaling.prototype.constructor = ViewSignaling;

ViewSignaling.prototype.stateChange = function(){
    if(this._signaling._state){
        this._state.innerHTML = "Устройство включено" ;
    } else{
        this._state.innerHTML = "Устройство выключено";
    }
};

ViewSignaling.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "Сигнализация";

    var signalings = document.createElement("div");
    signalings.className = "signal";

    var model = document.createElement("div");
    model.innerHTML = "Модель Panasonic"; 
    
    var door = document.createElement("div");
    door.innerHTML = "Дверь" + this._signaling._stateDoor;

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () => {
        this._signaling.on();
        this.stateChange();
    });

    

    var pass = document.createElement("input");
    pass.type = "text";
    pass.className = "inp";
    pass.id = "ininput"
    pass.placeholder = "Введите пароль";
    

    var send = document.createElement("button");
    send.type = "button";
    send.innerHTML = "Ввод";
    send.addEventListener('click', () => {
        this._signaling.getPassword(pass.value);
      this._signaling.openDoor(pass.value);
      door.innerHTML = "Дверь" + this._signaling_stateDoor;
      this.stateChange();
    });
      

       var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener('click', () => {
        this._signaling.off();
        this._signaling.offsignaling(pass.value);
        this.stateChange();
    });
    


    this.stateChange();

    signalings.appendChild(name);
    signalings.appendChild(this._state);
    signalings.appendChild(model);
    signalings.appendChild(door);
    signalings.appendChild(onBtn);
    signalings.appendChild(offBtn);
    signalings.appendChild(pass);
    signalings.appendChild(send);
    this._rootDom.appendChild(signalings);
}