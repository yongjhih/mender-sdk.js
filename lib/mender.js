'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthDevice = exports.AdmissionAttributes = exports.Status = exports.AdmissionDevice = exports.PreAuthRequest = exports.Count = exports.Limit = exports.AuthSet = exports.NewAuthSet = exports.NewDevice = exports.Settings = exports.User = exports.UserUpdate = exports.UserNew = exports.Error = exports.Group = exports.Device = exports.Release = exports.StorageLimit = exports.ArtifactLink = exports.Artifact = exports.ArtifactInfo = exports.Update = exports.UpdateFile = exports.ArtifactTypeInfo = exports.ArtifactUpdate = exports.DeploymentDevice = exports.DeploymentStatistics = exports.Deployment = exports.NewDeployment = exports.Attribute = exports.File = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// AxiosPromise Warning?
// AxiosResponse is not in flowtyped yet


var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _rxjs = require('rxjs');

var _rxjs2 = _interopRequireDefault(_rxjs);

var _flowRuntime = require('flow-runtime');

var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AxiosPromise = _flowRuntime2.default.tdz(function () {
  return _axios.AxiosPromise;
});

var AxiosXHRConfigBase = _flowRuntime2.default.tdz(function () {
  return _axios.AxiosXHRConfigBase;
});

var File = exports.File = _flowRuntime2.default.type('File', _flowRuntime2.default.union(_flowRuntime2.default.string(), _flowRuntime2.default.any())); // string, an ArrayBuffer, a Buffer, or a Stream

/*==========================================================
 *                    An API for device attribute management and device grouping. Intended for use by the web GUI.

Devices can upload vendor-specific attributes (software/hardware info, health checks, metrics, etc.) of various data types to the backend.

This API enables the user to:
* list devices with their attributes
* search devices by attribute value
* use the results to create and manage device groups for the purpose of deployment scheduling

 ==========================================================*/

/**
 * Attribute descriptor.
 */


var Attribute = exports.Attribute = _flowRuntime2.default.type('Attribute', _flowRuntime2.default.object(_flowRuntime2.default.property('name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('description', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('value', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()), _flowRuntime2.default.nullable(_flowRuntime2.default.string()), _flowRuntime2.default.nullable(_flowRuntime2.default.array(_flowRuntime2.default.number())), _flowRuntime2.default.nullable(_flowRuntime2.default.array(_flowRuntime2.default.string())), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean())))));

/**
 *
 */


var NewDeployment = exports.NewDeployment = _flowRuntime2.default.type('NewDeployment', _flowRuntime2.default.object(_flowRuntime2.default.property('name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('artifact_name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('devices', _flowRuntime2.default.array(_flowRuntime2.default.string()))));

/**
 *
 */


var Deployment = exports.Deployment = _flowRuntime2.default.type('Deployment', _flowRuntime2.default.object(_flowRuntime2.default.property('created', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('artifact_name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('finished', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('status', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('device_count', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('artifacts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.array(_flowRuntime2.default.nullable(_flowRuntime2.default.string())))))));

/**
 *
 */


var DeploymentStatistics = exports.DeploymentStatistics = _flowRuntime2.default.type('DeploymentStatistics', _flowRuntime2.default.object(_flowRuntime2.default.property('success', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('pending', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('downloading', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('rebooting', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('installing', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('failure', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('noartifact', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('already_installed', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('aborted', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number())))));

/**
 *
 */


var DeploymentDevice = exports.DeploymentDevice = _flowRuntime2.default.type('DeploymentDevice', _flowRuntime2.default.object(_flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('finished', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('status', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('created', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('device_type', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('log', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()))), _flowRuntime2.default.property('state', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('substate', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Artifact information update.
 */


var ArtifactUpdate = exports.ArtifactUpdate = _flowRuntime2.default.type('ArtifactUpdate', _flowRuntime2.default.object(_flowRuntime2.default.property('description', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Information about update type.

 */


var ArtifactTypeInfo = exports.ArtifactTypeInfo = _flowRuntime2.default.type('ArtifactTypeInfo', _flowRuntime2.default.object(_flowRuntime2.default.property('type', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Information about particular update file.

 */


var UpdateFile = exports.UpdateFile = _flowRuntime2.default.type('UpdateFile', _flowRuntime2.default.object(_flowRuntime2.default.property('name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('checksum', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('size', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('date', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Single updated to be applied.

 */


var Update = exports.Update = _flowRuntime2.default.type('Update', _flowRuntime2.default.object(_flowRuntime2.default.property('type_info', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(ArtifactTypeInfo))), _flowRuntime2.default.property('files', _flowRuntime2.default.array(_flowRuntime2.default.nullable(UpdateFile))), _flowRuntime2.default.property('meta_data', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.any())))));

/**
 * Information about artifact format and version.

 */


var ArtifactInfo = exports.ArtifactInfo = _flowRuntime2.default.type('ArtifactInfo', _flowRuntime2.default.object(_flowRuntime2.default.property('format', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('version', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number())))));

/**
 * Detailed artifact.
 */


var Artifact = exports.Artifact = _flowRuntime2.default.type('Artifact', _flowRuntime2.default.object(_flowRuntime2.default.property('name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('description', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('device_types_compatible', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.array(_flowRuntime2.default.nullable(_flowRuntime2.default.string()))))), _flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('signed', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()))), _flowRuntime2.default.property('modified', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('info', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(ArtifactInfo))), _flowRuntime2.default.property('updates', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.array(_flowRuntime2.default.nullable(Update)))))));

/**
 * URL for artifact file download.
 */


var ArtifactLink = exports.ArtifactLink = _flowRuntime2.default.type('ArtifactLink', _flowRuntime2.default.object(_flowRuntime2.default.property('uri', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('expire', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Tenant account storage limit and storage usage.
 */


var StorageLimit = exports.StorageLimit = _flowRuntime2.default.type('StorageLimit', _flowRuntime2.default.object(_flowRuntime2.default.property('limit', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.property('usage', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number())))));

/**
 * Groups artifacts with the same release name into a single resource.
 */


var Release = exports.Release = _flowRuntime2.default.type('Release', _flowRuntime2.default.object(_flowRuntime2.default.property('name', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('artifacts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.array(_flowRuntime2.default.nullable(Artifact)))))));

/**
 *
 */


var Device = exports.Device = _flowRuntime2.default.type('Device', _flowRuntime2.default.object(_flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('updated_ts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('attributes', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.array(Attribute))))));

/**
 * Device group.
 */


var Group = exports.Group = _flowRuntime2.default.type('Group', _flowRuntime2.default.object(_flowRuntime2.default.property('group', _flowRuntime2.default.string())));

/**
 * Error descriptor.
 */


var Error = exports.Error = _flowRuntime2.default.type('Error', _flowRuntime2.default.object(_flowRuntime2.default.property('error', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('request_id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * New user descriptor.
 */


var UserNew = exports.UserNew = _flowRuntime2.default.type('UserNew', _flowRuntime2.default.object(_flowRuntime2.default.property('email', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('password', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Update user information.
 */


var UserUpdate = exports.UserUpdate = _flowRuntime2.default.type('UserUpdate', _flowRuntime2.default.object(_flowRuntime2.default.property('email', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('password', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * User descriptor.
 */


var User = exports.User = _flowRuntime2.default.type('User', _flowRuntime2.default.object(_flowRuntime2.default.property('email', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('created_ts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('updated_ts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * User settings.
 */


var Settings = exports.Settings = _flowRuntime2.default.type('Settings', _flowRuntime2.default.object());

/**
 * New device authentication data set for admission process.
 */


var NewDevice = exports.NewDevice = _flowRuntime2.default.type('NewDevice', _flowRuntime2.default.object(_flowRuntime2.default.property('device_identity', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('key', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('device_id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * New device authentication data set.
 */


var NewAuthSet = exports.NewAuthSet = _flowRuntime2.default.type('NewAuthSet', _flowRuntime2.default.object(_flowRuntime2.default.property('device_identity', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('key', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Authentication data set
 */


var AuthSet = exports.AuthSet = _flowRuntime2.default.type('AuthSet', _flowRuntime2.default.object(_flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('pubkey', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('id_data', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('status', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('ts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Limit definition
 */


var Limit = exports.Limit = _flowRuntime2.default.type('Limit', _flowRuntime2.default.object(_flowRuntime2.default.property('limit', _flowRuntime2.default.number())));

/**
 * Counter type
 */


var Count = exports.Count = _flowRuntime2.default.type('Count', _flowRuntime2.default.object(_flowRuntime2.default.property('count', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number())))));

/**
 *
 */


var PreAuthRequest = exports.PreAuthRequest = _flowRuntime2.default.type('PreAuthRequest', _flowRuntime2.default.object(_flowRuntime2.default.property('device_id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('auth_set_id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('id_data', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('pubkey', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Device authentication data set descriptor.
 */


var AdmissionDevice = exports.AdmissionDevice = _flowRuntime2.default.type('AdmissionDevice', _flowRuntime2.default.object(_flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('device_id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('device_identity', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('key', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('status', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('attributes', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.tdz(function () {
  return AdmissionAttributes;
}, 'AdmissionAttributes')))), _flowRuntime2.default.property('request_time', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

/**
 * Admission status of device authentication data set.
 */


var Status = exports.Status = _flowRuntime2.default.type('Status', _flowRuntime2.default.object(_flowRuntime2.default.property('status', _flowRuntime2.default.string())));

/**
 * Human readable attributes of the device, in the form of a JSON structure.
The attributes are completely vendor-specific, the provided ones are just an example.

 */


var AdmissionAttributes = exports.AdmissionAttributes = _flowRuntime2.default.type('AdmissionAttributes', _flowRuntime2.default.object(_flowRuntime2.default.property('mac', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('sku', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('sn', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string())))));

var AuthDevice = exports.AuthDevice = _flowRuntime2.default.type('AuthDevice', _flowRuntime2.default.object(_flowRuntime2.default.property('id', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('id_data', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('created_ts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('updated_ts', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.property('auth_sets', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.array(_flowRuntime2.default.nullable(AuthSet))))), _flowRuntime2.default.property('decommissioning', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean())))));

var Mender = function () {
  function Mender() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Mender);

    var _configType = _flowRuntime2.default.object();

    _flowRuntime2.default.param('config', _configType).assert(config);

    this._axios = _axios2.default.create(_extends({}, config, {
      baseURL: config.baseURL || "https://docker.mender.io/api/management/v1"
    }));
  }

  /* {{{ inventory }}} */

  /*==========================================================
   *                    An API for device attribute management and device grouping. Intended for use by the web GUI.
   Devices can upload vendor-specific attributes (software/hardware info, health checks, metrics, etc.) of various data types to the backend.
   This API enables the user to:
  * list devices with their attributes
  * search devices by attribute value
  * use the results to create and manage device groups for the purpose of deployment scheduling
    ==========================================================*/

  /**
   * Returns a paged collection of devices and their attributes.
  Accepts optional search and sort parameters.
   **Searching**
  Searching by attributes values is accomplished by appending attribute
  name/value pairs to the query string, e.g.:
   ```
  GET /devices?attr_name_1=foo&
               attr_name_2=100&
               ...
  ```
    * request: getDevices
   * url: getDevicesURL
   * method: getDevices_TYPE
   * raw_url: getDevices_RAW_URL
   * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
   * @param page - Starting page.
   * @param perPage - Number of results per page.
   * @param sort - Supports sorting the device list by attribute values.
   The parameter is formatted as a list of attribute names and sort directions, e.g.:
   '?sort=attr1:asc, attr2:desc'
   will sort by 'attr1' ascending, and then by 'attr2' descending. 'desc' is the default
  sort direction, and can be omitted.
    * @param hasGroup - If present, limits the results only to devices assigned/not assigned to a group.
   * @return Promise<Device> -  -
   */


  _createClass(Mender, [{
    key: 'getDevices',
    value: function getDevices(page, per_page, sort, has_group) {
      var attributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var _pageType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _per_pageType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _sortType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _has_groupType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()));

      var _attributesType = _flowRuntime2.default.nullable(_flowRuntime2.default.object());

      var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.nullable(_flowRuntime2.default.array(Device)));

      _flowRuntime2.default.param('page', _pageType).assert(page);

      _flowRuntime2.default.param('per_page', _per_pageType).assert(per_page);

      _flowRuntime2.default.param('sort', _sortType).assert(sort);

      _flowRuntime2.default.param('has_group', _has_groupType).assert(has_group);

      _flowRuntime2.default.param('attributes', _attributesType).assert(attributes);

      return this._axios.get('/inventory/devices', {
        params: _extends({
          page: page,
          per_page: per_page,
          sort: sort,
          has_group: has_group
        }, attributes)
      }).then(function (res) {
        return res.data;
      }).then(function (_arg) {
        return _returnType.assert(_arg);
      });
    }
  }, {
    key: 'getDevicesPaging',
    value: function getDevicesPaging(page, per_page, sort, has_group) {
      var _this = this;

      var attributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      var _pageType2 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _per_pageType2 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _sortType2 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _has_groupType2 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()));

      var _attributesType2 = _flowRuntime2.default.nullable(_flowRuntime2.default.object());

      var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.ref(_rxjs2.default.Observable, Device));

      _flowRuntime2.default.param('page', _pageType2).assert(page);

      _flowRuntime2.default.param('per_page', _per_pageType2).assert(per_page);

      _flowRuntime2.default.param('sort', _sortType2).assert(sort);

      _flowRuntime2.default.param('has_group', _has_groupType2).assert(has_group);

      _flowRuntime2.default.param('attributes', _attributesType2).assert(attributes);

      // AxiosResponse is not in flowtyped yet
      var get = _flowRuntime2.default.annotate(function get(page, per_page, sort, has_group) {
        var attributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        var _pageType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

        var _per_pageType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

        var _sortType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

        var _has_groupType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()));

        var _attributesType3 = _flowRuntime2.default.nullable(_flowRuntime2.default.object());

        var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.any());

        _flowRuntime2.default.param('page', _pageType3).assert(page);

        _flowRuntime2.default.param('per_page', _per_pageType3).assert(per_page);

        _flowRuntime2.default.param('sort', _sortType3).assert(sort);

        _flowRuntime2.default.param('has_group', _has_groupType3).assert(has_group);

        _flowRuntime2.default.param('attributes', _attributesType3).assert(attributes);

        return _this._axios.get('/inventory/devices', {
          params: _extends({
            page: page,
            per_page: per_page,
            sort: sort,
            has_group: has_group
          }, attributes)
        }).then(function (_arg2) {
          return _returnType3.assert(_arg2);
        });
      }, _flowRuntime2.default.function(_flowRuntime2.default.param('page', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.param('per_page', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.param('sort', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.param('has_group', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.boolean()))), _flowRuntime2.default.param('attributes', _flowRuntime2.default.nullable(_flowRuntime2.default.object())), _flowRuntime2.default.return(_flowRuntime2.default.ref('Promise', _flowRuntime2.default.any()))));

      var parseLink = require('parse-link-header');
      var qs = require('qs');

      var _page = page || 1; // for next page only if no next link
      return _returnType2.assert(_rxjs2.default.Observable.fromPromise(get(page, per_page, sort, has_group, attributes)).expand(function (res) {
        if (res.headers && res.headers.link) {
          var link = parseLink(res.headers.link);
          if (!link.next || !link.next.url) {
            return _rxjs2.default.Observable.empty();
          }
          var url = link.next.url.startsWith('http://') || link.next.url.startsWith('https://') ? link.next.url.replace(/\?.*$/, '') : ('/inventory/' + link.next.url).replace(/\?.*$/, '');
          delete link.next.url;
          delete link.next.rel;
          return _rxjs2.default.Observable.fromPromise(_this._axios.get(url, {
            params: link.next
          }));
        } else if (!res.data || res.data.length == 0) {
          return _rxjs2.default.Observable.empty();
        } else {
          _page += 1;
          return _rxjs2.default.Observable.fromPromise(get(_page, per_page, sort, has_group, attributes));
        }
      }).map(function (res) {
        return res.data;
      }).flatMap(function (it) {
        return _rxjs2.default.Observable.from(it);
      }));
    }

    /**
     * Returns the details of the selected devices, including its attributes.
     * request: getDevices
     * url: getDevicesURL
     * method: getDevices_TYPE
     * raw_url: getDevices_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @return Promise<Device> -  -
     */

  }, {
    key: 'getDevice',
    value: function getDevice(id) {
      var _idType = _flowRuntime2.default.string();

      var _returnType4 = _flowRuntime2.default.return(Device);

      _flowRuntime2.default.param('id', _idType).assert(id);

      return this._axios.get('/inventory/devices/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg3) {
        return _returnType4.assert(_arg3);
      });
    }

    /**
     * Deletes all information concerning the device, including its attributes.
     * request: removeDevice
     * url: removeDeviceURL
     * method: removeDevice_TYPE
     * raw_url: removeDevice_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @return Promise<any> -  -
     */

  }, {
    key: 'removeDevice',
    value: function removeDevice(id) {
      var _idType2 = _flowRuntime2.default.string();

      var _returnType5 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType2).assert(id);

      return this._axios.delete('/inventory/devices/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg4) {
        return _returnType5.assert(_arg4);
      });
    }

    /**
     * Get a selected device's group
     * request: getGroup
     * url: getGroupURL
     * method: getGroup_TYPE
     * raw_url: getGroup_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @return Promise<Group> -  -
     */

  }, {
    key: 'getGroup',
    value: function getGroup(id) {
      var _idType3 = _flowRuntime2.default.string();

      var _returnType6 = _flowRuntime2.default.return(Group);

      _flowRuntime2.default.param('id', _idType3).assert(id);

      return this._axios.get('/inventory/devices/' + id + '/group').then(function (res) {
        return res.data;
      }).then(function (_arg5) {
        return _returnType6.assert(_arg5);
      });
    }

    /**
     * Adds a device to a group.
     Note that a given device can belong to at most one group.
    If a device already belongs to some group, it will be moved
    to the selected one.
      * request: addGroupDevice
     * url: addGroupDeviceURL
     * method: addGroupDevice_TYPE
     * raw_url: addGroupDevice_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @param group - Group descriptor.
     * @return Promise<any> -  -
     */

  }, {
    key: 'addGroupDevice',
    value: function addGroupDevice(id, group) {
      var _idType4 = _flowRuntime2.default.string();

      var _groupType = Group;

      var _returnType7 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType4).assert(id);

      _flowRuntime2.default.param('group', _groupType).assert(group);

      return this._axios.put('/inventory/devices/' + id + '/group', group).then(function (res) {
        return res.data;
      }).then(function (_arg6) {
        return _returnType7.assert(_arg6);
      });
    }

    /**
     * Removes the device with identifier 'id' from the group 'group'.
      * request: removeGroupDevice
     * url: removeGroupDeviceURL
     * method: removeGroupDevice_TYPE
     * raw_url: removeGroupDevice_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @param name - Group name.
     * @return Promise<any> -  -
     */

  }, {
    key: 'removeGroupDevice',
    value: function removeGroupDevice(id, name) {
      var _idType5 = _flowRuntime2.default.string();

      var _nameType = _flowRuntime2.default.string();

      var _returnType8 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType5).assert(id);

      _flowRuntime2.default.param('name', _nameType).assert(name);

      return this._axios.delete('/inventory/devices/' + id + '/group/' + name).then(function (res) {
        return res.data;
      }).then(function (_arg7) {
        return _returnType8.assert(_arg7);
      });
    }

    /**
     * Returns a collection of all defined device groups.
     * request: getGroups
     * url: getGroupsURL
     * method: getGroups_TYPE
     * raw_url: getGroups_RAW_URL
     * @return Promise<Array<string>> - ListOfGroupNames - Group name
     */

  }, {
    key: 'getGroups',
    value: function getGroups() {
      var _returnType9 = _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.string()));

      return this._axios.get('/inventory/groups').then(function (res) {
        return res.data;
      }).then(function (_arg8) {
        return _returnType9.assert(_arg8);
      });
    }

    /**
     * Returns a paged collection of device IDs.
      * request: getGroupDevices
     * url: getGroupDevicesURL
     * method: getGroupDevices_TYPE
     * raw_url: getGroupDevices_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param page - Starting page.
     * @param perPage - Number of results per page.
     * @param name - Group name.
     * @return Promise<Array<string>> -  -
     */

  }, {
    key: 'getGroupDevices',
    value: function getGroupDevices(page, per_page, name) {
      var _pageType4 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _per_pageType4 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _nameType2 = _flowRuntime2.default.string();

      var _returnType10 = _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.string()));

      _flowRuntime2.default.param('page', _pageType4).assert(page);

      _flowRuntime2.default.param('per_page', _per_pageType4).assert(per_page);

      _flowRuntime2.default.param('name', _nameType2).assert(name);

      return this._axios.get('/inventory/groups/' + name + '/devices', {
        params: {
          page: page,
          per_page: per_page
        }
      }).then(function (res) {
        return res.data;
      }).then(function (_arg9) {
        return _returnType10.assert(_arg9);
      });
    }

    /* {{{ useradm }}} */

    /*==========================================================
     *                    An API for user administration and user authentication handling. Intended for use by the web GUI.
    All responses from the API will contain 'X-MEN-RequestID' header with server-side generated request ID.
    
     ==========================================================*/

    /**
     * Accepts user credentials via standard Basic Auth, and returns a
    JWT token to be used for authentication in subsequent requests.
      * request: postAuthLogin
     * url: postAuthLoginURL
     * method: postAuthLogin_TYPE
     * raw_url: postAuthLogin_RAW_URL
     * @param authorization - Standard Basic Auth header, based on user's credentials.
      * @return Promise<any> -  -
     */

  }, {
    key: 'login',
    value: function login(username, password) {
      var _usernameType = _flowRuntime2.default.string();

      var _passwordType = _flowRuntime2.default.string();

      var _returnType11 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('username', _usernameType).assert(username);

      _flowRuntime2.default.param('password', _passwordType).assert(password);

      return this._axios.post('/useradm/auth/login', null, { auth: { username: username, password: password } }).then(function (res) {
        return res.data;
      }).then(function (_arg10) {
        return _returnType11.assert(_arg10);
      });
    }

    /**
     * Returns a non-paged collection of users information.
      * request: getUsers
     * url: getUsersURL
     * method: getUsers_TYPE
     * raw_url: getUsers_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<User> -  -
     */

  }, {
    key: 'getUsers',
    value: function getUsers() {
      var _returnType12 = _flowRuntime2.default.return(User);

      return this._axios.get('/useradm/users').then(function (res) {
        return res.data;
      }).then(function (_arg11) {
        return _returnType12.assert(_arg11);
      });
    }

    /**
     * Create user
     * request: postUsers
     * url: postUsersURL
     * method: postUsers_TYPE
     * raw_url: postUsers_RAW_URL
     * @param user - New user data.
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<any> -  -
     */

  }, {
    key: 'postUsers',
    value: function postUsers(user) {
      var _userType = UserNew;

      var _returnType13 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('user', _userType).assert(user);

      return this._axios.post('/useradm/users', user).then(function (res) {
        return res.data;
      }).then(function (_arg12) {
        return _returnType13.assert(_arg12);
      });
    }

    /**
     * Returns user information.
      * request: getUsersById
     * url: getUsersByIdURL
     * method: getUsersById_TYPE
     * raw_url: getUsersById_RAW_URL
     * @param id - User id.
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<User> -  -
     */

  }, {
    key: 'getUsersById',
    value: function getUsersById(id) {
      var _idType6 = _flowRuntime2.default.string();

      var _returnType14 = _flowRuntime2.default.return(User);

      _flowRuntime2.default.param('id', _idType6).assert(id);

      return this._axios.get('/useradm/users/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg13) {
        return _returnType14.assert(_arg13);
      });
    }

    /**
     * Update user email or change user password.
      * request: putUsersById
     * url: putUsersByIdURL
     * method: putUsersById_TYPE
     * raw_url: putUsersById_RAW_URL
     * @param id - User id.
     * @param userUpdate - Updated user data.
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<any> -  -
     */

  }, {
    key: 'putUsersById',
    value: function putUsersById(id, userUpdate) {
      var _idType7 = _flowRuntime2.default.string();

      var _returnType15 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType7).assert(id);

      return this._axios.put('/useradm/users/' + id, userUpdate).then(function (res) {
        return res.data;
      }).then(function (_arg14) {
        return _returnType15.assert(_arg14);
      });
    }

    /**
     * Remove user information from the system.
      * request: deleteUsersById
     * url: deleteUsersByIdURL
     * method: deleteUsersById_TYPE
     * raw_url: deleteUsersById_RAW_URL
     * @param id - User id.
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<any> -  -
     */

  }, {
    key: 'deleteUsersById',
    value: function deleteUsersById(id) {
      var _idType8 = _flowRuntime2.default.string();

      var _returnType16 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType8).assert(id);

      return this._axios.delete('/useradm/users/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg15) {
        return _returnType16.assert(_arg15);
      });
    }

    /**
     * Returns user settings.
      * request: getSettings
     * url: getSettingsURL
     * method: getSettings_TYPE
     * raw_url: getSettings_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<Settings> -  -
     */

  }, {
    key: 'getSettings',
    value: function getSettings() {
      var _returnType17 = _flowRuntime2.default.return(Settings);

      return this._axios.get('/useradm/settings').then(function (res) {
        return res.data;
      }).then(function (_arg16) {
        return _returnType17.assert(_arg16);
      });
    }

    /**
     * Create user settings or replace existing settings with provided object.
      * request: postSettings
     * url: postSettingsURL
     * method: postSettings_TYPE
     * raw_url: postSettings_RAW_URL
     * @param settings - New user settings.
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<any> -  -
     */

  }, {
    key: 'postSettings',
    value: function postSettings(settings) {
      var _settingsType = Settings;

      var _returnType18 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('settings', _settingsType).assert(settings);

      return this._axios.post('/useradm/settings', settings).then(function (res) {
        return res.data;
      }).then(function (_arg17) {
        return _returnType18.assert(_arg17);
      });
    }

    /* {{{ deviceadm }}} */

    /*==========================================================
     *                    An API for device admission handling. Intended for use by the web GUI.
      ==========================================================*/

    /**
     * Returns a paged collection of device authentication data sets registered
    for admission, and optionally filters by device admission status.
      * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param status - Admission status filter. If not specified, all device data sets are listed.
      * @param page - Starting page.
     * @param perPage - Number of results per page.
     * @param deviceId - List auth sets owned by given device
     * @return Promise<AdmissionDevice> -  -
     */

  }, {
    key: 'getAdmissionDevices',
    value: function getAdmissionDevices(status, page, per_page, device_id) {
      var _statusType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _pageType5 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _per_pageType5 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _device_idType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _returnType19 = _flowRuntime2.default.return(AdmissionDevice);

      _flowRuntime2.default.param('status', _statusType).assert(status);

      _flowRuntime2.default.param('page', _pageType5).assert(page);

      _flowRuntime2.default.param('per_page', _per_pageType5).assert(per_page);

      _flowRuntime2.default.param('device_id', _device_idType).assert(device_id);

      return this._axios.get('/admission/devices', {
        params: {
          status: status,
          page: page,
          per_page: per_page,
          device_id: device_id
        }
      }).then(function (res) {
        return res.data;
      }).then(function (_arg18) {
        return _returnType19.assert(_arg18);
      });
    }

    /**
     * Adds the device authentication data set to the database with a 'preauthorized'
    admission status. The device identity data set must not yet exist in the DB (regardless of status).
     When the device requests authentication from deviceauth the next time, it will be issued
    a token without further user intervention.
      * request: postDevices
     * url: postDevicesURL
     * method: postDevices_TYPE
     * raw_url: postDevices_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param authSet - The authentication data set to be preauthorized
     * @return Promise<any> -  -
     */

  }, {
    key: 'postDevices',
    value: function postDevices(authSet) {
      var _authSetType = NewAuthSet;

      var _returnType20 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('authSet', _authSetType).assert(authSet);

      return this._axios.post('/admission/devices', authSet).then(function (res) {
        return res.data;
      }).then(function (_arg19) {
        return _returnType20.assert(_arg19);
      });
    }

    /**
     * Returns the details of a particular device authentication data set.
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device authentication data set identifier.
     * @return Promise<Device> -  -
     */

  }, {
    key: 'getAdmissionDeviceById',
    value: function getAdmissionDeviceById(id) {
      var _idType9 = _flowRuntime2.default.string();

      var _returnType21 = _flowRuntime2.default.return(AdmissionDevice);

      _flowRuntime2.default.param('id', _idType9).assert(id);

      return this._axios.get('/admission/devices/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg20) {
        return _returnType21.assert(_arg20);
      });
    }

    /**
     * Deprecated endpoint, will be removed in Mender 1.6
    Adds the device authentication data set to the database with a 'pending'
    admission status. If the device already exists, it changes the device's
    status to 'pending' and updates identity data. The user will be able to
    inspect the device, and either accept, or reject it.
      * request: putDevicesById
     * url: putDevicesByIdURL
     * method: putDevicesById_TYPE
     * raw_url: putDevicesById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device authentication data set identifier.
     * @param device - A device for admission.
     * @return Promise<any> -  -
     * @deprecated
     */

  }, {
    key: 'putDevicesById',
    value: function putDevicesById(id, device) {
      var _idType10 = _flowRuntime2.default.string();

      var _deviceType = NewDevice;

      var _returnType22 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType10).assert(id);

      _flowRuntime2.default.param('device', _deviceType).assert(device);

      return this._axios.put('/admission/devices/' + id, device).then(function (res) {
        return res.data;
      }).then(function (_arg21) {
        return _returnType22.assert(_arg21);
      });
    }

    /**
     * Removes all device authentication data set data.
     * request: deleteDevicesById
     * url: deleteDevicesByIdURL
     * method: deleteDevicesById_TYPE
     * raw_url: deleteDevicesById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device authentication data set identifier
     * @return Promise<any> -  -
     */

  }, {
    key: 'deleteDevicesById',
    value: function deleteDevicesById(id) {
      var _idType11 = _flowRuntime2.default.string();

      var _returnType23 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType11).assert(id);

      return this._axios.delete('/admission/devices/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg22) {
        return _returnType23.assert(_arg22);
      });
    }

    /**
     * Returns the admission status of a particular device authentication data set.
     * request: getDevicesByIdStatus
     * url: getDevicesByIdStatusURL
     * method: getDevicesByIdStatus_TYPE
     * raw_url: getDevicesByIdStatus_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device authentication data set identifier.
     * @return Promise<Status> -  -
     */

  }, {
    key: 'getDevicesByIdStatus',
    value: function getDevicesByIdStatus(id) {
      var _idType12 = _flowRuntime2.default.string();

      var _returnType24 = _flowRuntime2.default.return(Status);

      _flowRuntime2.default.param('id', _idType12).assert(id);

      return this._axios.get('/admission/devices/' + id + '/status').then(function (res) {
        return res.data;
      }).then(function (_arg23) {
        return _returnType24.assert(_arg23);
      });
    }

    /**
     * Changes the given device's admission status.
    Valid state transitions:
    - 'pending' -> 'accepted'
    - 'pending' -> 'rejected'
    - 'rejected' -> 'accepted'
    - 'accepted' -> 'rejected'
      * request: putDevicesByIdStatus
     * url: putDevicesByIdStatusURL
     * method: putDevicesByIdStatus_TYPE
     * raw_url: putDevicesByIdStatus_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device authentication data set identifier.
     * @param status - New status
     * @return Promise<Status> -  -
     */

  }, {
    key: 'putDevicesByIdStatus',
    value: function putDevicesByIdStatus(id, status) {
      var _idType13 = _flowRuntime2.default.string();

      var _statusType2 = Status;

      var _returnType25 = _flowRuntime2.default.return(Status);

      _flowRuntime2.default.param('id', _idType13).assert(id);

      _flowRuntime2.default.param('status', _statusType2).assert(status);

      return this._axios.put('/admission/devices/' + id + '/status', status).then(function (res) {
        return res.data;
      }).then(function (_arg24) {
        return _returnType25.assert(_arg24);
      });
    }

    /* {{{ deployments }}} */

    /**
     * Returns a filtered collection of deployments in the system,
    including active and historical. If both 'status' and 'query' are
    not specified, all devices are listed.
      * request: getDeployments
     * url: getDeploymentsURL
     * method: getDeployments_TYPE
     * raw_url: getDeployments_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param status - Deployment status filter.
     * @param search - Deployment name or description filter.
     * @param page - Results page number
     * @param perPage - Number of results per page
     * @param createdBefore - List only deployments created before and equal to Unix timestamp (UTC)
     * @param createdAfter - List only deployments created after and equal to Unix timestamp (UTC)
     * @return Promise<Deployment> -  -
     */

  }, {
    key: 'getDeployments',
    value: function getDeployments(status, search, page, per_page, created_before, created_after) {
      var _statusType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _searchType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _pageType6 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _per_pageType6 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _created_beforeType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _created_afterType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _returnType26 = _flowRuntime2.default.return(Deployment);

      _flowRuntime2.default.param('status', _statusType3).assert(status);

      _flowRuntime2.default.param('search', _searchType).assert(search);

      _flowRuntime2.default.param('page', _pageType6).assert(page);

      _flowRuntime2.default.param('per_page', _per_pageType6).assert(per_page);

      _flowRuntime2.default.param('created_before', _created_beforeType).assert(created_before);

      _flowRuntime2.default.param('created_after', _created_afterType).assert(created_after);

      return this._axios.get('/deployments/deployments', {
        params: {
          status: status,
          search: search,
          page: page,
          per_page: per_page,
          created_before: created_before,
          created_after: created_after
        }
      }).then(function (res) {
        return res.data;
      }).then(function (_arg25) {
        return _returnType26.assert(_arg25);
      });
    }
  }, {
    key: 'getDeploymentsPaging',
    value: function getDeploymentsPaging(status, search, page, per_page, created_before, created_after) {
      var _this2 = this;

      var linked = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

      var _statusType4 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _searchType2 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _pageType7 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _per_pageType7 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _created_beforeType2 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _created_afterType2 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

      var _linkedType = _flowRuntime2.default.boolean();

      var _returnType27 = _flowRuntime2.default.return(_flowRuntime2.default.ref(_rxjs2.default.Observable, Deployment));

      _flowRuntime2.default.param('status', _statusType4).assert(status);

      _flowRuntime2.default.param('search', _searchType2).assert(search);

      _flowRuntime2.default.param('page', _pageType7).assert(page);

      _flowRuntime2.default.param('per_page', _per_pageType7).assert(per_page);

      _flowRuntime2.default.param('created_before', _created_beforeType2).assert(created_before);

      _flowRuntime2.default.param('created_after', _created_afterType2).assert(created_after);

      _flowRuntime2.default.param('linked', _linkedType).assert(linked);

      // AxiosResponse is not in flowtyped yet
      var get = _flowRuntime2.default.annotate(function get(status, search, page, per_page, created_before, created_after) {
        var _statusType5 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

        var _searchType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

        var _pageType8 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

        var _per_pageType8 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

        var _created_beforeType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

        var _created_afterType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()));

        var _returnType28 = _flowRuntime2.default.return(_flowRuntime2.default.any());

        _flowRuntime2.default.param('status', _statusType5).assert(status);

        _flowRuntime2.default.param('search', _searchType3).assert(search);

        _flowRuntime2.default.param('page', _pageType8).assert(page);

        _flowRuntime2.default.param('per_page', _per_pageType8).assert(per_page);

        _flowRuntime2.default.param('created_before', _created_beforeType3).assert(created_before);

        _flowRuntime2.default.param('created_after', _created_afterType3).assert(created_after);

        return _this2._axios.get('/deployments/deployments', {
          params: {
            status: status,
            search: search,
            page: page,
            per_page: per_page,
            created_before: created_before,
            created_after: created_after
          }
        }).then(function (_arg26) {
          return _returnType28.assert(_arg26);
        });
      }, _flowRuntime2.default.function(_flowRuntime2.default.param('status', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.param('search', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()))), _flowRuntime2.default.param('page', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.param('per_page', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.param('created_before', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.param('created_after', _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.number()))), _flowRuntime2.default.return(_flowRuntime2.default.ref('Promise', _flowRuntime2.default.any()))));

      var parseLink = require('parse-link-header');
      var qs = require('qs');

      var _page = page || 1; // for next page only if no next link
      return _returnType27.assert(_rxjs2.default.Observable.fromPromise(get(status, search, page, per_page, created_before, created_after)).expand(function (res) {
        if (linked && res.headers && res.headers.link) {
          var link = parseLink(res.headers.link);
          if (!link.next || !link.next.url) {
            return _rxjs2.default.Observable.empty();
          }
          var url = link.next.url.startsWith('http://') || link.next.url.startsWith('https://') ? link.next.url.replace(/\?.*$/, '') : ('/deployments/' + link.next.url).replace(/\?.*$/, '');
          delete link.next.url;
          delete link.next.rel;
          return _rxjs2.default.Observable.fromPromise(_this2._axios.get(url, {
            params: link.next
          }));
        } else if (!res.data || res.data.length == 0) {
          return _rxjs2.default.Observable.empty();
        } else {
          _page += 1;
          return _rxjs2.default.Observable.fromPromise(get(status, search, _page, per_page, created_before, created_after));
        }
      }).map(function (res) {
        return res.data;
      }).flatMap(function (it) {
        return _rxjs2.default.Observable.from(it);
      }));
    }

    /**
     * Deploy software to specified devices. Artifact is auto assigned to the
    device from all available artifacts based on artifact name and device type.
    Devices for which there are no compatible artifacts to be installed are
    considered finished successfully as well as receive status of `noartifact`.
    If there is no artifacts for the deployment, deployment will not be created
    and the 422 Unprocessable Entity status code will be returned.
      * request: postDeployments
     * url: postDeploymentsURL
     * method: postDeployments_TYPE
     * raw_url: postDeployments_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param deployment - New deployment that needs to be created.
     * @return Promise<any> -  -
     */

  }, {
    key: 'postDeployments',
    value: function postDeployments(deployment) {
      var _deploymentType = NewDeployment;

      var _returnType29 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('deployment', _deploymentType).assert(deployment);

      return this._axios.post('/deployments/deployments', deployment).then(function (res) {
        return res.data;
      }).then(function (_arg27) {
        return _returnType29.assert(_arg27);
      });
    }

    /**
     * Returns the details of a particular deployment.
      * request: getDeploymentsById
     * url: getDeploymentsByIdURL
     * method: getDeploymentsById_TYPE
     * raw_url: getDeploymentsById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Deployment identifier.
     * @return Promise<Deployment> -  -
     */

  }, {
    key: 'getDeploymentsById',
    value: function getDeploymentsById(id) {
      var _idType14 = _flowRuntime2.default.string();

      var _returnType30 = _flowRuntime2.default.return(Deployment);

      _flowRuntime2.default.param('id', _idType14).assert(id);

      return this._axios.get('/deployments/deployments/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg28) {
        return _returnType30.assert(_arg28);
      });
    }

    /**
     * Aborts the deployment that is pending or in progress. For devices included in this deployment it means that:
    - Devices that have completed the deployment (i.e. reported final status) are not affected by the abort, and their original status is kept in the deployment report.
    - Devices that do not yet know about the deployment at time of abort will not start the deployment.
    - Devices that are in the middle of the deployment at time of abort will finish its deployment normally, but they will not be able to change its deployment status so they will perform rollback.
      * request: putDeploymentsByDeploymentIdStatus
     * url: putDeploymentsByDeploymentIdStatusURL
     * method: putDeploymentsByDeploymentIdStatus_TYPE
     * raw_url: putDeploymentsByDeploymentIdStatus_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param deploymentId - Deployment identifier.
     * @param status - Deployment status.
     * @return Promise<any> -  -
     */

  }, {
    key: 'putDeploymentsByDeploymentIdStatus',
    value: function putDeploymentsByDeploymentIdStatus(deployment_id, status) {
      var _deployment_idType = _flowRuntime2.default.string();

      var _statusType6 = Status;

      var _returnType31 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('deployment_id', _deployment_idType).assert(deployment_id);

      _flowRuntime2.default.param('status', _statusType6).assert(status);

      return this._axios.put('/deployments/deployments/' + deployment_id + '/status', status).then(function (res) {
        return res.data;
      }).then(function (_arg29) {
        return _returnType31.assert(_arg29);
      });
    }

    /**
     * Returns the statistics of a selected deployment statuses.
      * request: getDeploymentsByDeploymentIdStatistics
     * url: getDeploymentsByDeploymentIdStatisticsURL
     * method: getDeploymentsByDeploymentIdStatistics_TYPE
     * raw_url: getDeploymentsByDeploymentIdStatistics_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param deploymentId - Deployment identifier
     * @return Promise<DeploymentStatistics> -  -
     */

  }, {
    key: 'getDeploymentsByDeploymentIdStatistics',
    value: function getDeploymentsByDeploymentIdStatistics(deployment_id) {
      var _deployment_idType2 = _flowRuntime2.default.string();

      var _returnType32 = _flowRuntime2.default.return(DeploymentStatistics);

      _flowRuntime2.default.param('deployment_id', _deployment_idType2).assert(deployment_id);

      return this._axios.get('/deployments/deployments/' + deployment_id + '/statistics').then(function (res) {
        return res.data;
      }).then(function (_arg30) {
        return _returnType32.assert(_arg30);
      });
    }

    /**
     * Returns a collection of a selected deployment's status for each assigned device.
      * request: getDeploymentsByDeploymentIdDevices
     * url: getDeploymentsByDeploymentIdDevicesURL
     * method: getDeploymentsByDeploymentIdDevices_TYPE
     * raw_url: getDeploymentsByDeploymentIdDevices_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param deploymentId - Deployment identifier.
     * @return Promise<Device> -  -
     */

  }, {
    key: 'getDeploymentsByDeploymentIdDevices',
    value: function getDeploymentsByDeploymentIdDevices(deployment_id) {
      var _deployment_idType3 = _flowRuntime2.default.string();

      var _returnType33 = _flowRuntime2.default.return(DeploymentDevice);

      _flowRuntime2.default.param('deployment_id', _deployment_idType3).assert(deployment_id);

      return this._axios.get('/deployments/deployments/' + deployment_id + '/devices').then(function (res) {
        return res.data;
      }).then(function (_arg31) {
        return _returnType33.assert(_arg31);
      });
    }

    /**
     * Returns the log of a selected device, collected during a particular deployment.
      * request: getDeploymentsByDeploymentIdDevicesByDeviceIdLog
     * url: getDeploymentsByDeploymentIdDevicesByDeviceIdLogURL
     * method: getDeploymentsByDeploymentIdDevicesByDeviceIdLog_TYPE
     * raw_url: getDeploymentsByDeploymentIdDevicesByDeviceIdLog_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param deploymentId - Deployment identifier.
     * @param deviceId - Device identifier.
     * @return Promise<any> -  -
     */

  }, {
    key: 'getDeploymentsByDeploymentIdDevicesByDeviceIdLog',
    value: function getDeploymentsByDeploymentIdDevicesByDeviceIdLog(deployment_id, device_id) {
      var _deployment_idType4 = _flowRuntime2.default.string();

      var _device_idType2 = _flowRuntime2.default.string();

      var _returnType34 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('deployment_id', _deployment_idType4).assert(deployment_id);

      _flowRuntime2.default.param('device_id', _device_idType2).assert(device_id);

      return this._axios.get('/deployments/deployments/' + deployment_id + '/devices/' + device_id + '/log').then(function (res) {
        return res.data;
      }).then(function (_arg32) {
        return _returnType34.assert(_arg32);
      });
    }

    /**
     * Set 'decommissioned' status to all pending device deployments for a given device
     * request: deleteDeploymentsDevicesById
     * url: deleteDeploymentsDevicesByIdURL
     * method: deleteDeploymentsDevicesById_TYPE
     * raw_url: deleteDeploymentsDevicesById_RAW_URL
     * @param id - System wide device identifier
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<any> -  -
     */

  }, {
    key: 'deleteDeploymentsDevicesById',
    value: function deleteDeploymentsDevicesById(id) {
      var _idType15 = _flowRuntime2.default.string();

      var _returnType35 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType15).assert(id);

      return this._axios.delete('/deployments/deployments/devices/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg33) {
        return _returnType35.assert(_arg33);
      });
    }

    /**
     * Returns a collection of releases, allows filtering by release name.
      * request: getDeploymentsReleases
     * url: getDeploymentsReleasesURL
     * method: getDeploymentsReleases_TYPE
     * raw_url: getDeploymentsReleases_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param name - Release name filter.
     * @return Promise<Release> -  -
     */

  }, {
    key: 'getDeploymentsReleases',
    value: function getDeploymentsReleases(name) {
      var _nameType3 = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _returnType36 = _flowRuntime2.default.return(Release);

      _flowRuntime2.default.param('name', _nameType3).assert(name);

      return this._axios.get('/deployments/deployments/releases', {
        params: {
          name: name
        }
      }).then(function (res) {
        return res.data;
      }).then(function (_arg34) {
        return _returnType36.assert(_arg34);
      });
    }

    /**
     * Returns a collection of all artifacts.
      * request: getArtifacts
     * url: getArtifactsURL
     * method: getArtifacts_TYPE
     * raw_url: getArtifacts_RAW_URL
     * @return Promise<Artifact> -  -
     */

  }, {
    key: 'getArtifacts',
    value: function getArtifacts() {
      var _returnType37 = _flowRuntime2.default.return(Artifact);

      return this._axios.get('/deployments/artifacts').then(function (res) {
        return res.data;
      }).then(function (_arg35) {
        return _returnType37.assert(_arg35);
      });
    }

    /**
     * Upload mender artifact. Multipart request with meta and artifact.
     Supports artifact (versions v1, v2)[https://docs.mender.io/development/architecture/mender-artifacts#versions].
      * request: postArtifacts
     * url: postArtifactsURL
     * method: postArtifacts_TYPE
     * raw_url: postArtifacts_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param size integer - Size of the artifact file in bytes.
     * @param description string -
     * @param artifact File - Artifact. It has to be the last part of request. string, an ArrayBuffer, a Buffer, or a Stream
     * @return Promise<any> -  -
     */

  }, {
    key: 'postArtifacts',
    value: function postArtifacts(size, description, artifact) {
      var _sizeType = _flowRuntime2.default.number();

      var _descriptionType = _flowRuntime2.default.union(_flowRuntime2.default.void(), _flowRuntime2.default.nullable(_flowRuntime2.default.string()));

      var _artifactType = File;

      var _returnType38 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('size', _sizeType).assert(size);

      _flowRuntime2.default.param('description', _descriptionType).assert(description);

      _flowRuntime2.default.param('artifact', _artifactType).assert(artifact);

      var formData = new FormData();
      formData.append('size', size);
      formData.append('description', description);
      formData.append('artifact', artifact);
      var qs = require('qs');
      return this._axios.post('/deployments/artifacts', qs.stringify(formData), { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (res) {
        return res.data;
      }).then(function (_arg36) {
        return _returnType38.assert(_arg36);
      });
    }

    /**
     * Returns the details of a selected artifact.
      * request: getArtifactsById
     * url: getArtifactsByIdURL
     * method: getArtifactsById_TYPE
     * raw_url: getArtifactsById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Artifact identifier.
     * @return Promise<Artifact> -  -
     */

  }, {
    key: 'getArtifactsById',
    value: function getArtifactsById(id) {
      var _idType16 = _flowRuntime2.default.string();

      var _returnType39 = _flowRuntime2.default.return(Artifact);

      _flowRuntime2.default.param('id', _idType16).assert(id);

      return this._axios.get('/deployments/artifacts/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg37) {
        return _returnType39.assert(_arg37);
      });
    }

    /**
     * Edit description. Artifact is not allowed to be edited if it was used
    in any deployment.
      * request: putArtifactsById
     * url: putArtifactsByIdURL
     * method: putArtifactsById_TYPE
     * raw_url: putArtifactsById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id string - Artifact identifier.
     * @param artifact ArtifactUpdate -
     * @return Promise<any> -  -
     */

  }, {
    key: 'putArtifactsById',
    value: function putArtifactsById(id, artifact) {
      var _idType17 = _flowRuntime2.default.string();

      var _artifactType2 = ArtifactUpdate;

      var _returnType40 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType17).assert(id);

      _flowRuntime2.default.param('artifact', _artifactType2).assert(artifact);

      return this._axios.put('/deployments/artifacts/' + id, artifact).then(function (res) {
        return res.data;
      }).then(function (_arg38) {
        return _returnType40.assert(_arg38);
      });
    }

    /**
     * Deletes the artifact from file and artifacts storage.
    Artifacts used by deployments in progress can not be deleted
    until deployment finishes.
      * request: deleteArtifactsById
     * url: deleteArtifactsByIdURL
     * method: deleteArtifactsById_TYPE
     * raw_url: deleteArtifactsById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Artifact identifier.
     * @return Promise<any> -  -
     */

  }, {
    key: 'deleteArtifactsById',
    value: function deleteArtifactsById(id) {
      var _idType18 = _flowRuntime2.default.string();

      var _returnType41 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType18).assert(id);

      return this._axios.delete('/deployments/artifacts/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg39) {
        return _returnType41.assert(_arg39);
      });
    }

    /**
     * Generates signed URL for downloading artifact file. URI can be used only
    with GET HTTP method. Link supports such HTTP headers: 'Range',
    'If-Modified-Since', 'If-Unmodified-Since' It is valid for specified
    period of time.
      * request: getArtifactsByIdDownload
     * url: getArtifactsByIdDownloadURL
     * method: getArtifactsByIdDownload_TYPE
     * raw_url: getArtifactsByIdDownload_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Artifact identifier.
     * @return Promise<ArtifactLink> -  -
     */

  }, {
    key: 'getArtifactsByIdDownload',
    value: function getArtifactsByIdDownload(id) {
      var _idType19 = _flowRuntime2.default.string();

      var _returnType42 = _flowRuntime2.default.return(ArtifactLink);

      _flowRuntime2.default.param('id', _idType19).assert(id);

      return this._axios.get('/deployments/artifacts/' + id + '/download').then(function (res) {
        return res.data;
      }).then(function (_arg40) {
        return _returnType42.assert(_arg40);
      });
    }

    /**
     * Get storage limit and current storage usage for currently logged in user.
    If the limit value is 0 it means there is no limit for storage for logged in user.
      * request: getLimitsStorage
     * url: getLimitsStorageURL
     * method: getLimitsStorage_TYPE
     * raw_url: getLimitsStorage_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @return Promise<StorageLimit> -  -
     */

  }, {
    key: 'getLimitsStorage',
    value: function getLimitsStorage() {
      var _returnType43 = _flowRuntime2.default.return(StorageLimit);

      return this._axios.get('/deployments/limits/storage').then(function (res) {
        return res.data;
      }).then(function (_arg41) {
        return _returnType43.assert(_arg41);
      });
    }

    /*==========================================================
     *                    An API for device authentication handling.
      ==========================================================*/

    /**
     * Provides a list of tenant's devices, with optional device status filter.
      * request: getDevices
     * url: getDevicesURL
     * method: getDevices_TYPE
     * raw_url: getDevices_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param page - Results page number
     * @param perPage - Number of results per page
     * @return Promise<Device> -  -
     */

  }, {
    key: 'getAuthDevices',
    value: function getAuthDevices(page, per_page) {
      var _pageType9 = _flowRuntime2.default.nullable(_flowRuntime2.default.number());

      var _per_pageType9 = _flowRuntime2.default.nullable(_flowRuntime2.default.number());

      var _returnType44 = _flowRuntime2.default.return(Device);

      _flowRuntime2.default.param('page', _pageType9).assert(page);

      _flowRuntime2.default.param('per_page', _per_pageType9).assert(per_page);

      return this._axios.get('/devauth/devices', {
        params: {
          page: page,
          per_page: per_page
        }
      }).then(function (res) {
        return res.data;
      }).then(function (_arg42) {
        return _returnType44.assert(_arg42);
      });
    }

    /**
     * Adds a given device/authentication data set in the 'preauthorized' state.
    Designed to be called from admission, with precomputed device_id and auth_set_id.
      * request: postDevices
     * url: postDevicesURL
     * method: postDevices_TYPE
     * raw_url: postDevices_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param preAuthRequest - Preauthentication request.
     * @return Promise<any> -  -
     */

  }, {
    key: 'postAuthDevices',
    value: function postAuthDevices() {
      var _returnType45 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      return this._axios.post('/devauth/devices').then(function (res) {
        return res.data;
      }).then(function (_arg43) {
        return _returnType45.assert(_arg43);
      });
    }

    /**
     * Get a particular device.
     * request: getDevicesById
     * url: getDevicesByIdURL
     * method: getDevicesById_TYPE
     * raw_url: getDevicesById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier
     * @return Promise<Device> -  -
     */

  }, {
    key: 'getAuthDevicesById',
    value: function getAuthDevicesById(id) {
      var _idType20 = _flowRuntime2.default.string();

      var _returnType46 = _flowRuntime2.default.return(Device);

      _flowRuntime2.default.param('id', _idType20).assert(id);

      return this._axios.get('/devauth/devices/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg44) {
        return _returnType46.assert(_arg44);
      });
    }

    /**
     * Decommission device
     * request: deleteDevicesById
     * url: deleteDevicesByIdURL
     * method: deleteDevicesById_TYPE
     * raw_url: deleteDevicesById_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @return Promise<any> -  -
     */

  }, {
    key: 'deleteAuthDevicesById',
    value: function deleteAuthDevicesById(id) {
      var _idType21 = _flowRuntime2.default.string();

      var _returnType47 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType21).assert(id);

      return this._axios.delete('/devauth/devices/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg45) {
        return _returnType47.assert(_arg45);
      });
    }

    /**
     * Removes the device authentication set.
    Removing 'accepted' authentication set is equivalent
    to rejecting device and removing authentication set.
    If there is only one authentication set for the device,
    the device will also be deleted.
      * request: deleteDevicesByIdAuthByAid
     * url: deleteDevicesByIdAuthByAidURL
     * method: deleteDevicesByIdAuthByAid_TYPE
     * raw_url: deleteDevicesByIdAuthByAid_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @param aid - Authentication data set identifier.
     * @return Promise<any> -  -
     */

  }, {
    key: 'deleteAuthDevicesByIdAuthByAid',
    value: function deleteAuthDevicesByIdAuthByAid(id, aid) {
      var _idType22 = _flowRuntime2.default.string();

      var _aidType = _flowRuntime2.default.string();

      var _returnType48 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType22).assert(id);

      _flowRuntime2.default.param('aid', _aidType).assert(aid);

      return this._axios.delete('/devauth/devices/' + id + '/auth/' + aid).then(function (res) {
        return res.data;
      }).then(function (_arg46) {
        return _returnType48.assert(_arg46);
      });
    }

    /**
     * Sets the status of a authentication data set of selected value.
     All possible transitions are valid.
      * request: putDevicesByIdAuthByAidStatus
     * url: putDevicesByIdAuthByAidStatusURL
     * method: putDevicesByIdAuthByAidStatus_TYPE
     * raw_url: putDevicesByIdAuthByAidStatus_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param id - Device identifier.
     * @param aid - Authentication data set identifier.
     * @param status - New status.
     * @return Promise<any> -  -
     */

  }, {
    key: 'putAuthDevicesByIdAuthByAidStatus',
    value: function putAuthDevicesByIdAuthByAidStatus(id, aid) {
      var _idType23 = _flowRuntime2.default.string();

      var _aidType2 = _flowRuntime2.default.string();

      var _returnType49 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType23).assert(id);

      _flowRuntime2.default.param('aid', _aidType2).assert(aid);

      return this._axios.put('/devauth/devices/' + id + '/auth/' + aid + '/status').then(function (res) {
        return res.data;
      }).then(function (_arg47) {
        return _returnType49.assert(_arg47);
      });
    }

    /**
     * Provides a list of devices, optionally filtered by status.
      * request: getDevicesCount
     * url: getDevicesCountURL
     * method: getDevicesCount_TYPE
     * raw_url: getDevicesCount_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
     * @param status - Device status filter, one of 'pending', 'accepted', 'rejected'. Default is 'all devices'.
      * @return Promise<Count> -  -
     */

  }, {
    key: 'getAuthDevicesCount',
    value: function getAuthDevicesCount(status) {
      var _statusType7 = _flowRuntime2.default.nullable(_flowRuntime2.default.string());

      var _returnType50 = _flowRuntime2.default.return(Count);

      _flowRuntime2.default.param('status', _statusType7).assert(status);

      return this._axios.get('/devauth/devices/count', {
        params: {
          status: status
        }
      }).then(function (res) {
        return res.data;
      }).then(function (_arg48) {
        return _returnType50.assert(_arg48);
      });
    }

    /**
     * Deletes the token, effectively revoking it. The device must
    apply for a new one with a new authentication request.
    The token 'id' corresponds to the standard 'jti' claim.
      * request: deleteTokensById
     * url: deleteTokensByIdURL
     * method: deleteTokensById_TYPE
     * raw_url: deleteTokensById_RAW_URL
     * @param id - Unique token identifier('jti').
     * @return Promise<any> -  -
     */

  }, {
    key: 'deleteTokensById',
    value: function deleteTokensById(id) {
      var _idType24 = _flowRuntime2.default.string();

      var _returnType51 = _flowRuntime2.default.return(_flowRuntime2.default.any());

      _flowRuntime2.default.param('id', _idType24).assert(id);

      return this._axios.delete('/devauth/tokens/' + id).then(function (res) {
        return res.data;
      }).then(function (_arg49) {
        return _returnType51.assert(_arg49);
      });
    }

    /**
     * Obtain limit of accepted devices.
     * request: getLimitsMaxDevices
     * url: getLimitsMaxDevicesURL
     * method: getLimitsMaxDevices_TYPE
     * raw_url: getLimitsMaxDevices_RAW_URL
     * @param authorization - Contains the JWT token issued by the User Administration and
    Authentication Service.
      * @return Promise<Limit> -  -
     */

  }, {
    key: 'getLimitsMaxAuthDevices',
    value: function getLimitsMaxAuthDevices() {
      var _returnType52 = _flowRuntime2.default.return(Limit);

      return this._axios.get('/devauth/limits/max_devices').then(function (res) {
        return res.data;
      }).then(function (_arg50) {
        return _returnType52.assert(_arg50);
      });
    }
  }]);

  return Mender;
}();

exports.default = Mender;