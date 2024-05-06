import {AppApi} from "../Api";

export const ProductApi = {
  getPaginated: `${AppApi.publicApi}/product/paginated`,
  getById: `${AppApi.publicApi}/product/{id}`,
  search: `${AppApi.publicApi}/product/search`,
}
