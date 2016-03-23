var chai = require("chai");
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
describe("Sensor Update Tests", function(){
    it('Check status', function(done){
        var should = chai.should();
        chai.request('https://mysensor--v1.partners.apprendalabs.com')
            .get('/sensor/update/334/12')
            .end(function(err, res){
                if (!err) {
                    res.should.have.status(200);
                }
                else{
                    should.not.exist(err);
                }
                done();
            });
    });
});