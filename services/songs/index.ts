import { apiClient } from '@/services/api';
import { ISongResponse } from '@/utils/types/song.type';

export const getNewSongs = async (term: string, limit: number) => {
  try {
    const result: ISongResponse = await apiClient.get(
      `search?term=${term}&entity=song&attribute=releaseDate&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getTopSongs = async (term: string, limit: number) => {
  try {
    const result: ISongResponse = await apiClient.get(
      `search?term=${term}&entity=song&attribute=ratingIndex&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getListSongs = async (term: string, limit: number) => {
  try {
    const result: ISongResponse = await apiClient.get(
      `https://itunes.apple.com/search?term=${term}&entity=song&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getDetailSong = async (id: number) => {
  try {
    const result: ISongResponse = await apiClient.get(
      `https://itunes.apple.com/lookup?id=${id}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};