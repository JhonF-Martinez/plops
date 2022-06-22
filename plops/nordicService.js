module.exports = {
  description: 'Crear servicio de Nordic',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Nombre del servicio'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'outputs/{{camelCase name}}Service.js',
      templateFile: 'templates/nordicService.template.js'
    }
  ]
}
