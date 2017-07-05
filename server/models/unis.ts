import {IConnection, IError} from "mysql"
import {DBManager} from "../helpers/DBManager";

export interface IUni {
  uniId: string,
  uniName: string,
  location: string,
  longitude: number,
  latitude: number
}

export class UnisDBHandler extends DBManager {
  static getUnis(callback: (unis: IUni[]) => void) {
    UnisDBHandler.pool.getConnection((err: IError, conn: IConnection) => {
      if (err) throw err;
      let unis: IUni[] = [];
      let statement = `SELECT * FROM ${DBManager.TABLES.UNIS.NAME}`;
      conn.query(statement, (err: IError, res) => {
        conn.release();
        if (res.length > 0) {
          for (let i = 0; i < res.length; i++) {
            unis.push({uniId: res[i].uniId, uniName: res[i].uniName, location: res[i].location, longitude: res[i].longitude, latitude: res[i].latitude});
          }
        }
        callback(unis);
      })
    });
  }
}