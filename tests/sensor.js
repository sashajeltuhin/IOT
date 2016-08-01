var chai = require("chai");
var heatsensor = require("../routes/sensor");
var http = require("../core/httpservice");
var url = "heatsensortest--v1.metapod.apprendalabs.com";
describe("Sensor Update Tests", function(){
    it('Check status', function(done){
        var should = chai.should();
        http.getData(url, null, '/sensor/update/334/12', null, true, null, function (err, result) {
            if (!err) {
                var obj = JSON.parse(result);
                obj.should.have.property("sid");
            }
            else{
                err.should.not.exist();
            }
            done();
        });

    });

    it('Within norm', function(done){
        var should = chai.should();
        var norm = heatsensor.getNormObject();
        http.getData(url, null, '/sensor/update/334/15', null, true, null, function (err, result) {
            if (!err) {
                var obj = JSON.parse(result);
                obj.should.have.property("status").and.equal(norm.ok);
            }
            else{
                err.should.not.exist();
            }
            done();
        });

    });

    it('Exceeds threshold', function(done){
        var should = chai.should();
        var norm = heatsensor.getNormObject();
        http.getData(url, null, '/sensor/update/334/60', null, true, null, function (err, result) {
            if (!err) {
                var obj = JSON.parse(result);
                obj.should.have.property("status").and.equal(norm.high);
            }
            else{
                err.should.not.exist();
            }
            done();
        });

    });
});