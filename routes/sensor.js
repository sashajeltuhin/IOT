var threshold = 45;
var norm = {ok:"Normal", high:"Elevated", low:"Low"};
var last = {sid: 44, status: "Normal", val:40};
exports.update = function(req, res, next){
    var sensorID = req.params.sid;
    var sensorVal = req.params.val;
    var date = new Date();
    var st = Number(sensorVal) < threshold ? norm.ok : norm.high;
    last = {sid: sensorID, date: date, status: st, norm: threshold, val: sensorVal};
    res.send(last);
}

exports.getNorm = function(){
    return Number(threshold);
}

exports.getNormObject = function(){
    return norm;
}

exports.getLast = function(){
    return last;
}