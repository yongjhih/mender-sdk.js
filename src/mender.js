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
  name: ?string,
  /**
   * Attribute description.
   */
  description: ?string,
  /**
   * The current value of the attribute.

Attribute type is implicit, inferred from the JSON type.

Supported types: number, string, array of numbers, array of strings. Mixed arrays are not allowed.

   */
  value: ?string,
};


/**
 * 
 */
export type Device = {
  /**
   * Mender-assigned unique ID.
   */
  id: ?string,
  /**
   * Timestamp of the most recent attribute update.
   */
  updated_ts: ?string,
  /**
   * A list of attribute descriptors.
   */
  attributes: Array<?Attribute>,
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
  error: ?string,
  /**
   * Request ID (same as in X-MEN-RequestID header).
   */
  request_id: ?string,
};


export default class swagger {
  _axios: Axios => *;

  constructor(baseURL: string = "https://docker.mender.io/api/management/v1/inventory") {
    this._axios = axios.create({
      baseURL: baseURL
    })
  }

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
  getDevices(page: ?number, per_page: ?number, sort: ?string, has_group: ?boolean): Promise<Device> {
    return this._axios.get(`/devices`, {
      param: {
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
  getDevices(id: string): Promise<Device> {
    return this._axios.get(`/devices/${id}`).then(res => res.data);
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
    return this._axios.delete(`/devices/${id}`).then(res => res.data);
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
    return this._axios.get(`/devices/${id}/group`).then(res => res.data);
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
    return this._axios.put(`/devices/${id}/group`).then(res => res.data);
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
    return this._axios.delete(`/devices/${id}/group/${name}`).then(res => res.data);
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
    return this._axios.get(`/groups`).then(res => res.data);
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
  getGroupDevices(page: ?number, per_page: ?number, name: string): Promise<Array<string>> {
    return this._axios.get(`/groups/${name}/devices`, {
      param: {
        page: page,
        per_page: per_page,
      }
    }).then(res => res.data);
  }
  
}
