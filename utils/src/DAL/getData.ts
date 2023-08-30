import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

interface UseGetDataHookProps<T> {
  params: T;
  configInfo: {
    getterFunction: any;
    reduxObjectPath: string;
  };
  cacheOption: boolean;
}

export function useGetDataHook<T>({
  params,
  configInfo,
  cacheOption,
}: UseGetDataHookProps<T>) {
  const reduxVar = useSelector(
    (state: any) => state[configInfo.reduxObjectPath]
  );
  const clonedParams: T = structuredClone(params);
  const dispatch = useDispatch();
  let [data, setData] = useState<any[]>([]);
  let [error, setError] = useState<any>(null);

  useEffect(() => {
    if (typeof configInfo.getterFunction === 'function') {
      configInfo.getterFunction({
        params: clonedParams,
        cacheOption,
        dispatch,
        onSuccess: (data: any) => {
          setData(data);
        },
        onError: (error: any) => {
          setError(error);
        },
        reduxVar,
      });
    }
  }, []);

  return { data, error };
}
