function Signaling(model, password, stateDoor){
    Devices.call(this, model)
    this._password = "Heloo";
    this._stateDoor = "   close";
    this._count = 0;
    this._state = false;
}


Signaling.prototype = Object.create(Devices.prototype);
Signaling.prototype.constructor = Signaling;



Signaling.prototype.getPassword = function (inputPassword) {
    if(inputPassword == this._password){
        this._count = 0;
        return;
    }else{
        this._count++;
        if(this._count >= 3){
        this.on();
        }
      }
    };

    Signaling.prototype.openDoor = function(inputPassword){
    if(inputPassword == this._password){
    this._stateDoor = "  open";}
  };


  Signaling.prototype.offsignaling = function(inputPassword){
    if(inputPassword == this._password){
        this._state = false;
        this._passwordCounter = 0;
    }
};