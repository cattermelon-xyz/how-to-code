import { supabase } from 'utils/index';
import {
  setLastFetch,
  setOrgsInfo,
} from '../../redux/reducers/orginfo.reducer';

export class GetterFunction {
  [key: string]: any;

  async getDataOrgs({
    params,
    cacheOption,
    dispatch,
    onSuccess,
    onError,
    reduxVar,
  }: {
    params: any;
    cacheOption?: boolean;
    dispatch: any;
    onSuccess: (data: any) => void;
    onError: (error: any) => void;
    reduxVar: any;
  }) {
    const { userId } = params;
    const { orgs, lastFetch } = reduxVar;
    const now = new Date().getTime();

    if (
      cacheOption &&
      lastFetch !== -1 &&
      now - lastFetch <= Number(process.env.VITE_CACHED_TIME!)
    ) {
      return orgs;
    } else {
      const { data, error } = await supabase
        .from('user_org')
        .select('*')
        .eq('user_id', userId);
      if (!error) {
        onSuccess(data);
        dispatch(setOrgsInfo(orgs));
        dispatch(setLastFetch({}));
        return data;
      } else {
        onError(error);
        return error;
      }
    }
  }
}
