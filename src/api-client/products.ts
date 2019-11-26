import { client } from './client';

export const getProductList = (pageNumber: number) =>
  client.get(`posters?page=${pageNumber}`);
