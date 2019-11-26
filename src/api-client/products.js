import { client } from './client';

export const getProductList = pageNumber => client.get(`posters?page=${pageNumber}`);
