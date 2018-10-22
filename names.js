getList = () => {
  return {
    controllersFolder: `controllers`,
    modelsFolder: `models`,
    routesFolder: `routes`,
    templatesFolder: `templates`,
    viewsFolder: `views`,
    partialsFolder: `views/partials`,
    targetNameJoker: /__targetNameJoker__/g,// value to replace in controllers, models, routes
    targetImportedRoutes: /__targetImportedRoutes__/g,// in the line template to import a route
    targetAPIConnectedRoutes: /__targetAPIConnectedRoutes__/g,// in the line that connects the routes to the API (express)
    targetImportedRoutesList: /__targetImportedRoutesList__/g,// the whole list of imported routes (app,js)
    targetAPIConnectedRoutesList: /__targetAPIConnectedRoutesList__/g,// the whole list of API connected routes (app.js)
    targetDBName: /__targetDBName__/g,// to set the name of the dabase in index.template
    targetEntitiesList: /__targetEntitiesList__/g,// list used for rendering an hbs partial
    targetNodePort: /__targetNodePort__/g,// to set the port on index template
  };
};

module.exports = {
  getList
};
