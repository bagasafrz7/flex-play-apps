import { apiClient } from '@/services/api';
import { IAppResponse } from '@/utils/types/apps.type';

export const getNewApps = async (term: string, limit: number) => {
  try {
    const result: IAppResponse = await apiClient.get(

      `search?term=${term}&entity=software&attribute=releaseDate&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getTopApps = async (term: string, limit: number) => {
  try {
    const result: IAppResponse = await apiClient.get(
      `search?term=${term}&entity=software&attribute=ratingIndex&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getListApps = async (term: string, limit: number) => {
  try {
    const result: IAppResponse = await apiClient.get(
      `https://itunes.apple.com/search?term=${term}&entity=software&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getDetailApp = async (id: number) => {
  try {
    const result: IAppResponse = await apiClient.get(
      `https://itunes.apple.com/lookup?id=${id}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};