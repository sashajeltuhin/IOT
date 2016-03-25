var threshold = 50;
exports.update = function(req, res, next){
    var sensorID = req.params.sid;
    var sensorVal = req.params.val;
    var date = new Date();
    var st = Number(sensorVal) < threshold ? "Normal" : "Elevated";
    res.send({sid: sensorID, date: date, status: st});
}