
exports.update = function(req, res, next){
    var sensorID = req.params.sid;
    var sensorVal = req.params.val;
    var date = new Date();
    res.send({sid: sensorID, date: date});
}