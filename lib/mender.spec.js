'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _http = require('axios/lib/adapters/http');

var _http2 = _interopRequireDefault(_http);

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

var _mender = require('./mender');

var _mender2 = _interopRequireDefault(_mender);

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.defaults.adapter = _http2.default;

//const baseURL = `https://docker.mender.io/api/management/v1`;
var UUID = _flowRuntime2.default.tdz(function () {
    return _types.UUID;
});

var URL = _flowRuntime2.default.tdz(function () {
    return _types.URL;
});

var mender = new _mender2.default();

it('should getDevices()', function (done) {
    var page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(67908);
    var per_page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(46353);
    var sort = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("George_Bogan");
    var has_group = _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()).assert(true);

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').get('/devices').query({
        page: page, per_page: per_page, sort: sort, has_group: has_group
    }).reply(200, []);
    mender.getDevices(page, per_page, sort, has_group).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDevicesPaging()', function (done) {
    var page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(67908);
    var per_page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(46353);
    var sort = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("George_Bogan");
    var has_group = _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()).assert(true);

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').get('/devices').query({
        page: page, per_page: per_page, sort: sort, has_group: has_group
    }).reply(200, []);
    mender.getDevicesPaging(page, per_page, sort, has_group).subscribe(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    }, function () {
        return done();
    });
});

it('should getDevice()', function (done) {

    var id = "Izaiah.Abbott";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').get('/devices/' + id).query({}).reply(200, {});
    mender.getDevice(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should removeDevice()', function (done) {

    var id = "Constantin79";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').delete('/devices/' + id).query({}).reply(200, {});
    mender.removeDevice(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getGroup()', function (done) {

    var id = "Uriel.Hermann";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').get('/devices/' + id + '/group').query({}).reply(200, { group: id });
    mender.getGroup(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should addGroupDevice()', function (done) {

    var id = "Carmella_Muller97";
    var group = "Carmella_Muller97_group";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').put('/devices/' + id + '/group').query({}).reply(200, {});
    mender.addGroupDevice(id, { group: group }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should removeGroupDevice()', function (done) {

    var id = "Sammy34";
    var name = "Favian_Sporer10";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').delete('/devices/' + id + '/group/' + name).query({}).reply(200, {});
    mender.removeGroupDevice(id, name).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getGroups()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').get('/groups').query({}).reply(200, []);
    mender.getGroups().then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getGroupDevices()', function (done) {

    var page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(97612);
    var per_page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(29033);
    var name = "Orin.Jerde58";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/inventory').get('/groups/' + name + '/devices').query({
        page: page, per_page: per_page
    }).reply(200, []);
    mender.getGroupDevices(page, per_page, name).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDeployments()', function (done) {

    var status = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("Grant59");
    var search = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("Jaida_Connelly31");
    var page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(63340);
    var per_page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(12992);
    var created_before = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(43366);
    var created_after = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(26859);

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/deployments').query({
        status: status, search: search, page: page, per_page: per_page, created_before: created_before, created_after: created_after
    }).reply(200, []);
    mender.getDeployments(status, search, page, per_page, created_before, created_after).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDeploymentsPaging()', function (done) {

    var status = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("Grant59");
    var search = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("Jaida_Connelly31");
    var page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(63340);
    var per_page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(12992);
    var created_before = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(43366);
    var created_after = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(26859);

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/deployments').query({
        status: status, search: search, page: page, per_page: per_page, created_before: created_before, created_after: created_after
    }).reply(200, []);
    mender.getDeploymentsPaging(status, search, page, per_page, created_before, created_after).subscribe(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    }, function () {
        return done();
    });
});

it('should postDeployments()', function (done) {

    var name = "name";
    var artifact_name = "artifact_name";
    var devices = [];

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').post('/deployments').query({}).reply(200, {});
    mender.postDeployments({
        name: name,
        artifact_name: artifact_name,
        devices: devices
    }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDeploymentsById()', function (done) {

    var id = "Nicolas.Turner";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/deployments/' + id).query({}).reply(200, {});
    mender.getDeploymentsById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should putDeploymentsByDeploymentIdStatus()', function (done) {

    var deployment_id = "Marcos52";
    var status = "pending";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').put('/deployments/' + deployment_id + '/status').query({}).reply(200, {});
    mender.putDeploymentsByDeploymentIdStatus(deployment_id, {
        status: status
    }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDeploymentsByDeploymentIdStatistics()', function (done) {

    var deployment_id = "Jarrett_Hintz";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/deployments/' + deployment_id + '/statistics').query({}).reply(200, {});
    mender.getDeploymentsByDeploymentIdStatistics(deployment_id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDeploymentsByDeploymentIdDevices()', function (done) {

    var deployment_id = "Eusebio31";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/deployments/' + deployment_id + '/devices').query({}).reply(200, {});
    mender.getDeploymentsByDeploymentIdDevices(deployment_id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDeploymentsByDeploymentIdDevicesByDeviceIdLog()', function (done) {

    var deployment_id = "Sandra.Schroeder35";
    var device_id = "Major9";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/deployments/' + deployment_id + '/devices/' + device_id + '/log').query({}).reply(200, {});
    mender.getDeploymentsByDeploymentIdDevicesByDeviceIdLog(deployment_id, device_id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should deleteDeploymentsDevicesById()', function (done) {
    var id = "Destiny_Rice";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').delete('/deployments/devices/' + id).query({}).reply(200, {});
    mender.deleteDeploymentsDevicesById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDeploymentsReleases()', function (done) {

    var name = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("Urban_Bradtke7");

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/deployments/releases').query({
        name: name
    }).reply(200, []);
    mender.getDeploymentsReleases(name).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getArtifacts()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/artifacts').query({}).reply(200, []);
    mender.getArtifacts().then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should postArtifacts()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').post('/artifacts').query({}).reply(200, {});
    mender.postArtifacts(0, undefined, Buffer.from('yo')).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getArtifactsById()', function (done) {

    var id = "Julius.Ebert";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/artifacts/' + id).query({}).reply(200, {});
    mender.getArtifactsById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should putArtifactsById()', function (done) {

    var id = "Darion_Stanton87";
    var description = "Darion_Stanton87";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').put('/artifacts/' + id).query({}).reply(200, {});
    mender.putArtifactsById(id, { description: description }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should deleteArtifactsById()', function (done) {

    var id = "Candelario_Ortiz30";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').delete('/artifacts/' + id).query({}).reply(200, {});
    mender.deleteArtifactsById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getArtifactsByIdDownload()', function (done) {

    var id = "Henriette23";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/artifacts/' + id + '/download').query({}).reply(200, {});
    mender.getArtifactsByIdDownload(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getLimitsStorage()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/deployments').get('/limits/storage').query({}).reply(200, {});
    mender.getLimitsStorage().then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getAdmissionDevices()', function (done) {

    var status = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("Letitia21");
    var page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(99401);
    var per_page = _flowRuntime2.default.nullable(_flowRuntime2.default.number()).assert(79594);
    var device_id = _flowRuntime2.default.nullable(_flowRuntime2.default.string()).assert("Samir_Douglas");

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/admission').get('/devices').query({
        status: status, page: page, per_page: per_page, device_id: device_id
    }).reply(200, {});
    mender.getAdmissionDevices(status, page, per_page, device_id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should postDevices()', function (done) {

    var device_identity = "abc";
    var key = "abc";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/admission').post('/devices').query({}).reply(200, {});
    mender.postDevices({
        device_identity: device_identity,
        key: key
    }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDevicesById()', function (done) {

    var id = "Maryse_Gleason";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/admission').get('/devices/' + id).query({}).reply(200, {});
    mender.getAdmissionDeviceById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should putDevicesById()', function (done) {

    var id = "Norene_Roob";
    var device_identity = "Norene_Roob";
    var key = "Norene_Roob";
    var device_id = "Norene_Roob";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/admission').put('/devices/' + id).query({}).reply(200, {});
    mender.putDevicesById(id, {
        device_identity: device_identity,
        key: key,
        device_id: device_id
    }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should deleteDevicesById()', function (done) {

    var id = "Cory75";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/admission').delete('/devices/' + id).query({}).reply(200, {});
    mender.deleteDevicesById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getDevicesByIdStatus()', function (done) {

    var id = "Vergie72";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/admission').get('/devices/' + id + '/status').query({}).reply(200, { status: id });
    mender.getDevicesByIdStatus(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should putDevicesByIdStatus()', function (done) {

    var id = "Amira.Paucek";
    var status = "Amira.Paucek";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/admission').put('/devices/' + id + '/status').query({}).reply(200, { status: id });
    mender.putDevicesByIdStatus(id, {
        status: status
    }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should login()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').post('/auth/login').query({}).basicAuth({
        user: "Andrew",
        pass: "Chen"
    }).reply(200, {});
    mender.login("Andrew", "Chen").then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getUsers()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').get('/users').query({}).reply(200, {});
    mender.getUsers().then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should postUsers()', function (done) {

    var email = "abc@example.com";
    var password = "Abc";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').post('/users').query({}).reply(200, {});
    mender.postUsers({
        email: email,
        password: password
    }).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getUsersById()', function (done) {
    var id = "Cary10";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').get('/users/' + id).query({}).reply(200, {});
    mender.getUsersById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should putUsersById()', function (done) {
    var id = "Martine4";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').put('/users/' + id).query({}).reply(200, {});
    mender.putUsersById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should deleteUsersById()', function (done) {
    var id = "Ozella.Harris55";

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').delete('/users/' + id).query({}).reply(200, {});
    mender.deleteUsersById(id).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should getSettings()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').get('/settings').query({}).reply(200, {});
    mender.getSettings().then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});

it('should postSettings()', function (done) {

    (0, _nock2.default)('https://docker.mender.io/api/management/v1/useradm').post('/settings').query({}).reply(200, {});
    mender.postSettings({}).then(function (res) {
        done();
    }, function (err) {
        console.error(err);
        done.fail(err);
    });
});