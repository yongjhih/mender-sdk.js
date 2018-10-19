/* @flow */

import axios from 'axios';
import {Axios} from 'axios';

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
export type Attribute = {
  /**
   * A human readable, unique attribute ID, e.g. 'device_type', 'ip_addr', 'cpu_load', etc.

   */
  name: void | ?string,
  /**
   * Attribute description.
   */
  description: void | ?string,
  /**
   * The current value of the attribute.

Attribute type is implicit, inferred from the JSON type.

Supported types: number, string, array of numbers, array of strings. Mixed arrays are not allowed.

   */
  value: void | ?string,
};



/**
 *
 */
export type NewDeployment = {
  /**
   *
   */
  name: void | ?string,
  /**
   *
   */
  artifact_name: void | ?string,
  /**
   *
   */
  devices: Array<?string>,
};


/**
 *
 */
export type Deployment = {
  /**
   *
   */
  created: void | ?string,
  /**
   *
   */
  name: void | ?string,
  /**
   *
   */
  artifact_name: void | ?string,
  /**
   *
   */
  id: void | ?string,
  /**
   *
   */
  finished: void | ?string,
  /**
   *
   */
  status: void | ?string,
  /**
   *
   */
  device_count: void | ?number,
  /**
   *
   */
  artifacts: void | ?Array<?string>,
};


/**
 *
 */
export type DeploymentStatistics = {
  /**
   * Number of successful deployments.
   */
  success: void | ?number,
  /**
   * Number of pending deployments.
   */
  pending: void | ?number,
  /**
   * Number of deployments being downloaded.
   */
  downloading: void | ?number,
  /**
   * Number of deployments devices are rebooting into.
   */
  rebooting: void | ?number,
  /**
   * Number of deployments devices being installed.
   */
  installing: void | ?number,
  /**
   * Number of failed deployments.
   */
  failure: void | ?number,
  /**
   * Do not have appropriate artifact for device type.
   */
  noartifact: void | ?number,
  /**
   * Number of devices unaffected by upgrade, since they are already running the specified software version.
   */
  already_installed: void | ?number,
  //already-installed: void | ?number,
  /**
   * Number of deployments aborted by user.
   */
  aborted: void | ?number,
};


/**
 *
 */
export type DeploymentDevice = {
  /**
   * Device identifier.
   */
  id: void | ?string,
  /**
   *
   */
  finished: void | ?string,
  /**
   *
   */
  status: void | ?string,
  /**
   *
   */
  created: void | ?string,
  /**
   *
   */
  device_type: void | ?string,
  /**
   * Availability of the device's deployment log.
   */
  log: void | ?boolean,
  /**
   * State reported by device
   */
  state: void | ?string,
  /**
   * Additional state information
   */
  substate: void | ?string,
};


/**
 * Artifact information update.
 */
export type ArtifactUpdate = {
  /**
   *
   */
  description: void | ?string,
};


/**
 * Information about update type.

 */
export type ArtifactTypeInfo = {
  /**
   *
   */
  type: void | ?string,
};


/**
 * Information about particular update file.

 */
export type UpdateFile = {
  /**
   *
   */
  name: void | ?string,
  /**
   *
   */
  checksum: void | ?string,
  /**
   *
   */
  size: void | ?number,
  /**
   *
   */
  date: void | ?string,
};


/**
 * Single updated to be applied.

 */
export type Update = {
  /**
   *
   */
  type_info: void | ?ArtifactTypeInfo,
  /**
   *
   */
  files: Array<?UpdateFile>,
  /**
   * meta_data is an object of unknown structure as this is dependent of update type (also custom defined by user)

   */
  meta_data: void | ?any,
};


/**
 * Information about artifact format and version.

 */
export type ArtifactInfo = {
  /**
   *
   */
  format: void | ?string,
  /**
   *
   */
  version: void | ?number,
};


/**
 * Detailed artifact.
 */
export type Artifact = {
  /**
   *
   */
  name: void | ?string,
  /**
   *
   */
  description: void | ?string,
  /**
   *
   */
  device_types_compatible: void | ?Array<?string>,
  /**
   *
   */
  id: void | ?string,
  /**
   * Idicates if artifact is signed or not.
   */
  signed: void | ?boolean,
  /**
   * Represents creation / last edition of any of the artifact properties.

   */
  modified: void | ?string,
  /**
   *
   */
  info: void | ?ArtifactInfo,
  /**
   *
   */
  updates: void | ?Array<?Update>,
};


/**
 * URL for artifact file download.
 */
export type ArtifactLink = {
  /**
   *
   */
  uri: void | ?string,
  /**
   *
   */
  expire: void | ?string,
};


/**
 * Tenant account storage limit and storage usage.
 */
export type StorageLimit = {
  /**
   * Storage limit in bytes. If set to 0 - there is no limit for storage.

   */
  limit: void | ?number,
  /**
   * Current storage usage in bytes.

   */
  usage: void | ?number,
};


/**
 * Groups artifacts with the same release name into a single resource.
 */
export type Release = {
  /**
   * release name.

   */
  name: void | ?string,
  /**
   * list of artifacts for this release.

   */
  artifacts: void | ?Array<?Artifact>,
};



/**
 *
 */
export type Device = {
  /**
   * Mender-assigned unique ID.
   */
  id: void | ?string,
  /**
   * Timestamp of the most recent attribute update.
   */
  updated_ts: void | ?string,
  /**
   * A list of attribute descriptors.
   */
  attributes: void | ?Array<Attribute>,
};


/**
 * Device group.
 */
export type Group = {
  /**
   *
   */
  group: string,
};


/**
 * Error descriptor.
 */
export type Error = {
  /**
   * Description of the error.
   */
  error: void | ?string,
  /**
   * Request ID (same as in X-MEN-RequestID header).
   */
  request_id: void | ?string,
};

/**
 * New user descriptor.
 */
export type UserNew = {
  /**
   * A unique email address. Invalid characters are non-ascii and '+'.
   */
  email: void | ?string,
  /**
   * Password.
   */
  password: void | ?string,
};


/**
 * Update user information.
 */
export type UserUpdate = {
  /**
   * A unique email address.
   */
  email: void | ?string,
  /**
   * Password.
   */
  password: void | ?string,
};


/**
 * User descriptor.
 */
export type User = {
  /**
   * A unique email address.
   */
  email: void | ?string,
  /**
   * User Id.
   */
  id: void | ?string,
  /**
   * Server-side timestamp of the user creation.

   */
  created_ts: void | ?string,
  /**
   * Server-side timestamp of the last user information update.

   */
  updated_ts: void | ?string,
};


/**
 * User settings.
 */
export type Settings = {
};

/**
 * New device authentication data set for admission process.
 */
export type NewDevice = {
  /**
   * The identity data of the device.
   */
  device_identity: void | ?string,
  /**
   * Device public key
   */
  key: void | ?string,
  /**
   * System-assigned device ID.
   */
  device_id: void | ?string,
};


/**
 * New device authentication data set.
 */
export type AuthSet = {
  /**
   * The identity data of the device.
   */
  device_identity: void | ?string,
  /**
   * Device public key.
   */
  key: void | ?string,
};


/**
 * Device authentication data set descriptor.
 */
export type AdmissionDevice = {
  /**
   * Authentication data set identifier.
   */
  id: void | ?string,
  /**
   * System assigned device identifier.
   */
  device_id: void | ?string,
  /**
   * Identity data
   */
  device_identity: void | ?string,
  /**
   * Device public key
   */
  key: void | ?string,
  /**
   * Status of the admission process for device authentication data set
   */
  status: void | ?string,
  /**
   *
   */
  attributes: void | ?AdmissionAttributes,
  /**
   * Server-side timestamp of the request reception.
   */
  request_time: void | ?string,
};


/**
 * Admission status of device authentication data set.
 */
export type Status = {
  /**
   *
   */
  status: string,
};


/**
 * Human readable attributes of the device, in the form of a JSON structure.
The attributes are completely vendor-specific, the provided ones are just an example.

 */
export type AdmissionAttributes = {
  /**
   * MAC address.
   */
  mac: void | ?string,
  /**
   * Stock keeping unit.
   */
  sku: void | ?string,
  /**
   * Serial number.
   */
  sn: void | ?string,
};



export default class Mender {
  _axios: Axios => *;

  constructor(baseURL: string = "https://docker.mender.io/api/management/v1") {
    this._axios = axios.create({
      baseURL: baseURL
    })
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
  getDevices(page: void | ?number, per_page: void | ?number, sort: void | ?string, has_group: void | ?boolean): Promise<?Array<Device>> {
    return this._axios.get(`/inventory/devices`, {
      params: {
        page: page,
        per_page: per_page,
        sort: sort,
        has_group: has_group,
      }
    }).then(res => res.data);
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
  getDevice(id: string): Promise<Device> {
    return this._axios.get(`/inventory/devices/${id}`).then(res => res.data);
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
  removeDevice(id: string): Promise<any> {
    return this._axios.delete(`/inventory/devices/${id}`).then(res => res.data);
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
  getGroup(id: string): Promise<Group> {
    return this._axios.get(`/inventory/devices/${id}/group`).then(res => res.data);
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
  addGroupDevice(id: string): Promise<any> {
    return this._axios.put(`/inventory/devices/${id}/group`).then(res => res.data);
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
  removeGroupDevice(id: string, name: string): Promise<any> {
    return this._axios.delete(`/inventory/devices/${id}/group/${name}`).then(res => res.data);
  }


  /**
   * Returns a collection of all defined device groups.
   * request: getGroups
   * url: getGroupsURL
   * method: getGroups_TYPE
   * raw_url: getGroups_RAW_URL
   * @return Promise<Array<string>> - ListOfGroupNames - Group name
   */
  getGroups(): Promise<Array<string>> {
    return this._axios.get(`/inventory/groups`).then(res => res.data);
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
  getGroupDevices(page: void | ?number, per_page: void | ?number, name: string): Promise<Array<string>> {
    return this._axios.get(`/inventory/groups/${name}/devices`, {
      params: {
        page: page,
        per_page: per_page,
      }
    }).then(res => res.data);
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
  login(username: string, password: string): Promise<any> {
    return this._axios.post(`/useradm/auth/login`, null, { auth: { username: username, password: password } }).then(res => res.data);
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
  getUsers(): Promise<User> {
    return this._axios.get(`/useradm/users`).then(res => res.data);
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
  postUsers(): Promise<any> {
    return this._axios.post(`/useradm/users`).then(res => res.data);
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
  getUsersById(id: string): Promise<User> {
    return this._axios.get(`/useradm/users/${id}`).then(res => res.data);
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
  putUsersById(id: string): Promise<any> {
    return this._axios.put(`/useradm/users/${id}`).then(res => res.data);
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
  deleteUsersById(id: string): Promise<any> {
    return this._axios.delete(`/useradm/users/${id}`).then(res => res.data);
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
  getSettings(): Promise<Settings> {
    return this._axios.get(`/useradm/settings`).then(res => res.data);
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
  postSettings(): Promise<any> {
    return this._axios.post(`/useradm/settings`).then(res => res.data);
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
  getAdmissionDevices(status: void | ?string, page: void | ?number, per_page: void | ?number, device_id: void | ?string): Promise<AdmissionDevice> {
    return this._axios.get(`/admission/devices`, {
      params: {
        status: status,
        page: page,
        per_page: per_page,
        device_id: device_id,
      }
    }).then(res => res.data);
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
  postDevices(): Promise<any> {
    return this._axios.post(`/admission/devices`).then(res => res.data);
  }


  /**
   * Returns the details of a particular device authentication data set.
   * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
   * @param id - Device authentication data set identifier.
   * @return Promise<Device> -  -
   */
  getAdmissionDeviceById(id: string): Promise<AdmissionDevice> {
    return this._axios.get(`/admission/devices/${id}`).then(res => res.data);
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
   */
  putDevicesById(id: string): Promise<any> {
    return this._axios.put(`/admission/devices/${id}`).then(res => res.data);
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
  deleteDevicesById(id: string): Promise<any> {
    return this._axios.delete(`/admission/devices/${id}`).then(res => res.data);
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
  getDevicesByIdStatus(id: string): Promise<Status> {
    return this._axios.get(`/admission/devices/${id}/status`).then(res => res.data);
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
  putDevicesByIdStatus(id: string): Promise<Status> {
    return this._axios.put(`/admission/devices/${id}/status`).then(res => res.data);
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
  getDeployments(status: void | ?string, search: void | ?string, page: void | ?number, per_page: void | ?number, created_before: void | ?number, created_after: void | ?number): Promise<Deployment> {
    return this._axios.get(`/deployments/deployments`, {
      params: {
        status: status,
        search: search,
        page: page,
        per_page: per_page,
        created_before: created_before,
        created_after: created_after,
      }
    }).then(res => res.data);
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
  postDeployments(): Promise<any> {
    return this._axios.post(`/deployments/deployments`).then(res => res.data);
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
  getDeploymentsById(id: string): Promise<Deployment> {
    return this._axios.get(`/deployments/deployments/${id}`).then(res => res.data);
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
  putDeploymentsByDeploymentIdStatus(deployment_id: string): Promise<any> {
    return this._axios.put(`/deployments/deployments/${deployment_id}/status`).then(res => res.data);
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
  getDeploymentsByDeploymentIdStatistics(deployment_id: string): Promise<DeploymentStatistics> {
    return this._axios.get(`/deployments/deployments/${deployment_id}/statistics`).then(res => res.data);
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
  getDeploymentsByDeploymentIdDevices(deployment_id: string): Promise<DeploymentDevice> {
    return this._axios.get(`/deployments/deployments/${deployment_id}/devices`).then(res => res.data);
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
  getDeploymentsByDeploymentIdDevicesByDeviceIdLog(deployment_id: string, device_id: string): Promise<any> {
    return this._axios.get(`/deployments/deployments/${deployment_id}/devices/${device_id}/log`).then(res => res.data);
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
  deleteDeploymentsDevicesById(id: string): Promise<any> {
    return this._axios.delete(`/deployments/deployments/devices/${id}`).then(res => res.data);
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
  getDeploymentsReleases(name: void | ?string): Promise<Release> {
    return this._axios.get(`/deployments/deployments/releases`, {
      params: {
        name: name,
      }
    }).then(res => res.data);
  }


  /**
   * Returns a collection of all artifacts.

   * request: getArtifacts
   * url: getArtifactsURL
   * method: getArtifacts_TYPE
   * raw_url: getArtifacts_RAW_URL
   * @return Promise<Artifact> -  -
   */
  getArtifacts(): Promise<Artifact> {
    return this._axios.get(`/deployments/artifacts`).then(res => res.data);
  }


  /**
   * Upload mender artifact. Multipart request with meta and artifact.

  Supports artifact (versions v1, v2)[https://docs.mender.io/development/architecture/mender-artifacts#versions].

   * request: postArtifacts
   * url: postArtifactsURL
   * method: postArtifacts_TYPE
   * raw_url: postArtifacts_RAW_URL
   * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
   * @param size - Size of the artifact file in bytes.
   * @param description -
   * @param artifact - Artifact. It has to be the last part of request.
   * @return Promise<any> -  -
   */
  postArtifacts(): Promise<any> {
    return this._axios.post(`/deployments/artifacts`).then(res => res.data);
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
  getArtifactsById(id: string): Promise<Artifact> {
    return this._axios.get(`/deployments/artifacts/${id}`).then(res => res.data);
  }


  /**
   * Edit description. Artifact is not allowed to be edited if it was used
  in any deployment.

   * request: putArtifactsById
   * url: putArtifactsByIdURL
   * method: putArtifactsById_TYPE
   * raw_url: putArtifactsById_RAW_URL
   * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
   * @param id - Artifact identifier.
   * @param artifact -
   * @return Promise<any> -  -
   */
  putArtifactsById(id: string): Promise<any> {
    return this._axios.put(`/deployments/artifacts/${id}`).then(res => res.data);
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
  deleteArtifactsById(id: string): Promise<any> {
    return this._axios.delete(`/deployments/artifacts/${id}`).then(res => res.data);
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
  getArtifactsByIdDownload(id: string): Promise<ArtifactLink> {
    return this._axios.get(`/deployments/artifacts/${id}/download`).then(res => res.data);
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
  getLimitsStorage(): Promise<StorageLimit> {
    return this._axios.get(`/deployments/limits/storage`).then(res => res.data);
  }

}
