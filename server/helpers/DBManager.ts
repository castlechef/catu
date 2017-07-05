import {createPool, IPool} from "mysql";
import {Config} from "./Config";

export class DBManager {
  private static readonly POOL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'catu',
    connectionLimit: 10
  };
  
  protected static readonly TABLES = {
    UNIS: {
      NAME: 'unis',
      FIELDS: {
        ID: 'uniId',
        NAME: 'uniName',
        LOCATION: 'location',
        LONGITUDE: 'longitude',
        LATITUDE: 'latitude'
      }
    },
    MEMBERS: {
      NAME: 'members',
      FIELDS: {
        ID: 'memberId',
        EMAIL: 'email',
        PASSWORD: 'password',
        FIRST_NAME: 'fName',
        LAST_NAME: 'lName',
        UNI_ID: 'uniId'
      }
    }
  };
  
  protected static readonly pool: IPool = createPool(DBManager.POOL_CONFIG);
}