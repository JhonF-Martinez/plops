/**
 * Modules dependencies
 */
 const restclient = require('nordic/restclient')({
  baseURL: 'https://internal-api.mercadolibre.com',
  timeout: 3000,
});
/**
 * Service interface
 */
class OfficialStoresService {
  static listOfficialStores(siteId) {
    return restclient.get(`/sites/${siteId}/brands`)
      .then(response => response.data.results);
  }
}

/**
 * Expose Service
 */
module.exports = OfficialStoresService;
