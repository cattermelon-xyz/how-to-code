import { GetterFunction } from '../middleware/data/orgs';

export interface ConfigTypes {
  orgInfo: {
    userId: string;
  };
}

const instance = new GetterFunction();

export const config = {
  orgInfo: {
    getterFunction: instance.getDataOrgs,
    reduxObjectPath: 'orginfo',
  },
};
