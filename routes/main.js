var sensor = require('./sensor');
exports.start = function(req, res, next){
    var obj = {};
    obj.title = "Heat Sensor";
    obj.threshold = sensor.getNorm();
    obj.last = sensor.getLast();
    res.render('main', obj);
}