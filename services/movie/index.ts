import { apiClient } from '@/services/api';
import { IMovieResponse } from '@/utils/types/movie.type';

export const getNewMovie = async (term: string, limit: number) => {
  try {
    const result: IMovieResponse = await apiClient.get(
      `search?term=${term}&entity=movie&attribute=releaseDate&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getTopMovie = async (term: string, limit: number) => {
  try {
    const result: IMovieResponse = await apiClient.get(
      `search?term=${term}&entity=movie&attribute=ratingIndex&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getListMovie = async (term: string, limit: number) => {
  try {
    const result: IMovieResponse = await apiClient.get(
      `https://itunes.apple.com/search?term=${term}&entity=movie&limit=${limit}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const getDetailMovie = async (id: number) => {
  try {
    const result: IMovieResponse = await apiClient.get(
      `https://itunes.apple.com/lookup?id=${id}`,
    );
    return result;
  } catch (err) {
    throw err;
  }
};