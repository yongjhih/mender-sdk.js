/* @flow */

import axios from 'axios';
import {Axios} from 'axios';

export class Mender {
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
   */
  getDevices(
    page: ?number,
    per_page: ?number,
    sort: ?string,
    has_group: ?boolean,
    end: ?any
  ): Promise<any> {
    return this._axios.get(`/devices`
    , {
      param: {
        page: page,
        per_page: per_page,
        sort: sort,
        has_group: has_group,
      }
    }
    )
  }


  /**
   * Returns the details of the selected devices, including its attributes.
   * request: getDevices
   * url: getDevicesURL
   * method: getDevices_TYPE
   * raw_url: getDevices_RAW_URL
   * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
   * @param id - Device identifier.
   */
  getDevices(
    id: string,
    end: ?any
  ): Promise<Device> {
    return this._axios.get(`/devices/${id}`
    )
  }


  /**
   * Deletes all information concerning the device, including its attributes.
   * request: removeDevice
   * url: removeDeviceURL
   * method: removeDevice_TYPE
   * raw_url: removeDevice_RAW_URL
   * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
   * @param id - Device identifier.
   */
  removeDevice(
    id: string,
    end: ?any
  ): Promise<any> {
    return this._axios.delete(`/devices/${id}`
    )
  }


  /**
   * Get a selected device's group
   * request: getGroup
   * url: getGroupURL
   * method: getGroup_TYPE
   * raw_url: getGroup_RAW_URL
   * @param authorization - Contains the JWT token issued by the User Administration and Authentication Service.
   * @param id - Device identifier.
   */
  getGroup(
    id: string,
    end: ?any
  ): Promise<Group> {
    return this._axios.get(`/devices/${id}/group`
    )
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
   */
  addGroupDevice(
    id: string,
    end: ?any
  ): Promise<any> {
    return this._axios.put(`/devices/${id}/group`
    )
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
   */
  removeGroupDevice(
    id: string,
    name: string,
    end: ?any
  ): Promise<any> {
    return this._axios.delete(`/devices/${id}/group/${name}`
    )
  }


  /**
   * Returns a collection of all defined device groups.
   * request: getGroups
   * url: getGroupsURL
   * method: getGroups_TYPE
   * raw_url: getGroups_RAW_URL
   */
  getGroups(
  ): Promise<any> {
    return this._axios.get(`/groups`
    )
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
   */
  getGroupDevices(
    page: ?number,
    per_page: ?number,
    name: string,
    end: ?any
  ): Promise<any> {
    return this._axios.get(`/groups/${name}/devices`
    , {
      param: {
        page: page,
        per_page: per_page,
      }
    }
    )
  }

}
