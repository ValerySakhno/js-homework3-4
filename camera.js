function Camera(model){
    Devices.call(this, model);
    this._currentType = 0;
}

Camera.prototype = Object.create(Devices.prototype);
Camera.prototype.constructor = Camera;


Camera.prototype.recordType = function(){
    this._recordType = "  record";
    
};


Camera.prototype.liveType = function(){
    this._recordType = "  live";
};


Camera.prototype.getRecordType = function(){
    return this._recordType;
};

Camera.prototype.dayMode = function() {
    this._mode = "  day";
  };

  Camera.prototype.nightMode = function() {
    this._mode = "   night";
  };

  Camera.prototype.offMode = function() {
    this._mode = "";
  };

  Camera.prototype.getMode = function () {
    return this._mode;
  };
