function ViewCamera(camera, rootDom){
    this._camera = camera;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}


ViewCamera.prototype = Object.create(Devices.prototype);
ViewCamera.prototype.constructor = ViewCamera;

ViewCamera.prototype.stateChange = function(){
    if(this._camera._state){
        this._state.innerHTML = "Устройство включено";
    } else{
        this._state.innerHTML = "Устройство выключено";
    }
};

ViewCamera.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "Камера";


    var camera = document.createElement("div");
    camera.className = "cam";

    var type = document.createElement("div");
    type.innerHTML = "Тип записи" + this._camera._recordType;

    var model = document.createElement("div");
    model.innerHTML = "Модель Samsung";

    var mode = document.createElement("div");
    mode.innerHTML = "Режим записи" + this._camera._mode;

    var date = new Date();
    var h = date.getHours();

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () => {
        this._camera.on();
        this.stateChange();
        if(h >= 8 && h <= 20){
        this._camera.dayMode();
        mode.innerHTML = "Режим записи" + this._camera._mode;}
        else{
            this._camera.nightMode();
        mode.innerHTML = "Режим записи" + this._camera._mode;
        }
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener('click', () => {
        this._camera.off();
        this.stateChange();
        this._camera.offMode();
        mode.innerHTML = "Режим записи" + this._camera._mode;
    });

    var record = document.createElement("button");
    record.type = 'button';
    record.className = "inc-rec";
    record.innerHTML = "Запись";
    record.addEventListener('click', () => {
        this._camera.recordType();
        type.innerHTML = "Тип записи" + this._camera._recordType;
    });

    var live = document.createElement("button");
    live.type = 'button';
    live.className = "inc-live";
    live.innerHTML = "Онлайн";
    live.addEventListener('click', () => {
        this._camera.liveType();
        type.innerHTML = "Тип записи" + this._camera._recordType;
    });

   

    this.stateChange();

    camera.appendChild(name);
    camera.appendChild(this._state);
    camera.appendChild(type);
    camera.appendChild(mode);
    camera.appendChild(model);
    camera.appendChild(onBtn);
    camera.appendChild(offBtn);
    camera.appendChild(record);
    camera.appendChild(live);
    this._rootDom.appendChild(camera);
}