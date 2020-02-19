function Conditioner(model){
    Devices.call(this, model);
    this._currentTemperatue = 0;
}

Conditioner.prototype = Object.create(Devices.prototype);
Conditioner.prototype.constructor = Conditioner;

    Conditioner.prototype.plusTemperature = function(){
        if((this._currentTemperatue < 25) &&(this._state == true)){
            this._currentTemperatue +=2;
        }
    };

    Conditioner.prototype.minusTemperature = function(){
        if((this._currentTemperatue > -5) &&(this._state == true)){
            this._currentTemperatue -=2;
        }
    };

    Conditioner.prototype.getCurrentTemperature = function(){
        return this._currentTemperature;
    };
