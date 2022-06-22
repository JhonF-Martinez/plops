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
class {{pascalCase name}}Service {
  static list{{pascalCase name}}(siteId) {
    return restclient.get(`/sites/${siteId}`)
      .then(response => response.data.results);
  }
}

/**
 * Expose Service
 */
module.exports = {{pascalCase name}}Service;
