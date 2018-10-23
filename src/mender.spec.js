/* @flow */

import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
axios.defaults.adapter = httpAdapter;
import Mender from './mender';
import nock from 'nock';
import os from 'os';
import type {UUID, URL} from './types';

//const baseURL = `https://docker.mender.io/api/management/v1`;
const mender = new Mender();

it('should getDevices()', done => {
  const page: ?number = 67908;
  const per_page: ?number = 46353;
  const sort: ?string = "George_Bogan";
  const has_group: ?boolean = true;

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .get(`/devices`)
      .query({
        page: page, per_page: per_page, sort: sort, has_group: has_group
      })
      .reply(200, []);
  mender.getDevices(page, per_page, sort, has_group).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDevicesPaging()', done => {
  const page: ?number = 67908;
  const per_page: ?number = 46353;
  const sort: ?string = "George_Bogan";
  const has_group: ?boolean = true;

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .get(`/devices`)
      .query({
        page: page, per_page: per_page, sort: sort, has_group: has_group
      })
      .reply(200, []);
  mender.getDevicesPaging(page, per_page, sort, has_group).subscribe(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    }, () => done());
});


it('should getDevice()', done => {

  const id = "Izaiah.Abbott";

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .get(`/devices/${id}`)
      .query({

      })
      .reply(200, {});
  mender.getDevice(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should removeDevice()', done => {

  const id = "Constantin79";

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .delete(`/devices/${id}`)
      .query({

      })
      .reply(200, {});
  mender.removeDevice(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getGroup()', done => {

  const id = "Uriel.Hermann";

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .get(`/devices/${id}/group`)
      .query({

      })
      .reply(200, {group: id});
  mender.getGroup(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should addGroupDevice()', done => {

  const id = "Carmella_Muller97";


  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .put(`/devices/${id}/group`)
      .query({

      })
      .reply(200, {});
  mender.addGroupDevice(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should removeGroupDevice()', done => {

  const id = "Sammy34";
  const name = "Favian_Sporer10";

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .delete(`/devices/${id}/group/${name}`)
      .query({

      })
      .reply(200, {});
  mender.removeGroupDevice(id, name).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getGroups()', done => {

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .get(`/groups`)
      .query({

      })
      .reply(200, []);
  mender.getGroups().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getGroupDevices()', done => {

  const page: ?number = 97612;
  const per_page: ?number = 29033;
  const name = "Orin.Jerde58";

  nock(`https://docker.mender.io/api/management/v1/inventory`)
      .get(`/groups/${name}/devices`)
      .query({
        page: page, per_page: per_page
      })
      .reply(200, []);
  mender.getGroupDevices(page, per_page, name).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDeployments()', done => {

  const status: ?string = "Grant59";
  const search: ?string = "Jaida_Connelly31";
  const page: ?number = 63340;
  const per_page: ?number = 12992;
  const created_before: ?number = 43366;
  const created_after: ?number = 26859;

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/deployments`)
      .query({
        status: status, search: search, page: page, per_page: per_page, created_before: created_before, created_after: created_after
      })
      .reply(200, []);
  mender.getDeployments(status, search, page, per_page, created_before, created_after).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should postDeployments()', done => {



  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .post(`/deployments`)
      .query({

      })
      .reply(200, {});
  mender.postDeployments().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDeploymentsById()', done => {

  const id = "Nicolas.Turner";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/deployments/${id}`)
      .query({

      })
      .reply(200, {});
  mender.getDeploymentsById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should putDeploymentsByDeploymentIdStatus()', done => {

  const deployment_id = "Marcos52";


  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .put(`/deployments/${deployment_id}/status`)
      .query({

      })
      .reply(200, {});
  mender.putDeploymentsByDeploymentIdStatus(deployment_id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDeploymentsByDeploymentIdStatistics()', done => {

  const deployment_id = "Jarrett_Hintz";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/deployments/${deployment_id}/statistics`)
      .query({

      })
      .reply(200, {});
  mender.getDeploymentsByDeploymentIdStatistics(deployment_id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDeploymentsByDeploymentIdDevices()', done => {

  const deployment_id = "Eusebio31";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/deployments/${deployment_id}/devices`)
      .query({

      })
      .reply(200, {});
  mender.getDeploymentsByDeploymentIdDevices(deployment_id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDeploymentsByDeploymentIdDevicesByDeviceIdLog()', done => {

  const deployment_id = "Sandra.Schroeder35";
  const device_id = "Major9";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/deployments/${deployment_id}/devices/${device_id}/log`)
      .query({

      })
      .reply(200, {});
  mender.getDeploymentsByDeploymentIdDevicesByDeviceIdLog(deployment_id, device_id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should deleteDeploymentsDevicesById()', done => {
  const id = "Destiny_Rice";


  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .delete(`/deployments/devices/${id}`)
      .query({

      })
      .reply(200, {});
  mender.deleteDeploymentsDevicesById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDeploymentsReleases()', done => {

  const name: ?string = "Urban_Bradtke7";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/deployments/releases`)
      .query({
        name: name
      })
      .reply(200, []);
  mender.getDeploymentsReleases(name).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getArtifacts()', done => {

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/artifacts`)
      .query({

      })
      .reply(200, []);
  mender.getArtifacts().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should postArtifacts()', done => {





  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .post(`/artifacts`)
      .query({

      })
      .reply(200, {});
  mender.postArtifacts().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getArtifactsById()', done => {

  const id = "Julius.Ebert";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/artifacts/${id}`)
      .query({

      })
      .reply(200, {});
  mender.getArtifactsById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should putArtifactsById()', done => {

  const id = "Darion_Stanton87";


  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .put(`/artifacts/${id}`)
      .query({

      })
      .reply(200, {});
  mender.putArtifactsById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should deleteArtifactsById()', done => {

  const id = "Candelario_Ortiz30";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .delete(`/artifacts/${id}`)
      .query({

      })
      .reply(200, {});
  mender.deleteArtifactsById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getArtifactsByIdDownload()', done => {

  const id = "Henriette23";

  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/artifacts/${id}/download`)
      .query({

      })
      .reply(200, {});
  mender.getArtifactsByIdDownload(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getLimitsStorage()', done => {


  nock(`https://docker.mender.io/api/management/v1/deployments`)
      .get(`/limits/storage`)
      .query({

      })
      .reply(200, {});
  mender.getLimitsStorage().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});



it('should getAdmissionDevices()', done => {

  const status: ?string = "Letitia21";
  const page: ?number = 99401;
  const per_page: ?number = 79594;
  const device_id: ?string = "Samir_Douglas";

  nock(`https://docker.mender.io/api/management/v1/admission`)
      .get(`/devices`)
      .query({
        status: status, page: page, per_page: per_page, device_id: device_id
      })
      .reply(200, {});
  mender.getAdmissionDevices(status, page, per_page, device_id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should postDevices()', done => {



  nock(`https://docker.mender.io/api/management/v1/admission`)
      .post(`/devices`)
      .query({

      })
      .reply(200, {});
  mender.postDevices().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDevicesById()', done => {

  const id = "Maryse_Gleason";

  nock(`https://docker.mender.io/api/management/v1/admission`)
      .get(`/devices/${id}`)
      .query({

      })
      .reply(200, {});
  mender.getAdmissionDeviceById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should putDevicesById()', done => {

  const id = "Norene_Roob";


  nock(`https://docker.mender.io/api/management/v1/admission`)
      .put(`/devices/${id}`)
      .query({

      })
      .reply(200, {});
  mender.putDevicesById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should deleteDevicesById()', done => {

  const id = "Cory75";

  nock(`https://docker.mender.io/api/management/v1/admission`)
      .delete(`/devices/${id}`)
      .query({

      })
      .reply(200, {});
  mender.deleteDevicesById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getDevicesByIdStatus()', done => {

  const id = "Vergie72";

  nock(`https://docker.mender.io/api/management/v1/admission`)
      .get(`/devices/${id}/status`)
      .query({

      })
      .reply(200, {status: id});
  mender.getDevicesByIdStatus(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should putDevicesByIdStatus()', done => {

  const id = "Amira.Paucek";


  nock(`https://docker.mender.io/api/management/v1/admission`)
      .put(`/devices/${id}/status`)
      .query({

      })
      .reply(200, {status: id});
  mender.putDevicesByIdStatus(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should login()', done => {


  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .post(`/auth/login`)
      .query({

      })
      .basicAuth({
        user: "Andrew",
        pass: "Chen"
      })
      .reply(200, {});
  mender.login("Andrew", "Chen").then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getUsers()', done => {


  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .get(`/users`)
      .query({

      })
      .reply(200, {});
  mender.getUsers().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should postUsers()', done => {



  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .post(`/users`)
      .query({

      })
      .reply(200, {});
  mender.postUsers().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getUsersById()', done => {
  const id = "Cary10";


  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .get(`/users/${id}`)
      .query({

      })
      .reply(200, {});
  mender.getUsersById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should putUsersById()', done => {
  const id = "Martine4";



  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .put(`/users/${id}`)
      .query({

      })
      .reply(200, {});
  mender.putUsersById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should deleteUsersById()', done => {
  const id = "Ozella.Harris55";


  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .delete(`/users/${id}`)
      .query({

      })
      .reply(200, {});
  mender.deleteUsersById(id).then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should getSettings()', done => {


  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .get(`/settings`)
      .query({

      })
      .reply(200, {});
  mender.getSettings().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});


it('should postSettings()', done => {



  nock(`https://docker.mender.io/api/management/v1/useradm`)
      .post(`/settings`)
      .query({

      })
      .reply(200, {});
  mender.postSettings().then(res => {
        done();
    }, err => {
        console.error(err);
        done.fail(err);
    });
});
