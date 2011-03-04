var fs = require('fs'),
config_path = fs.realpathSync("../config.json"),
config;

exports.load = function () {
  config = JSON.parse(fs.readFileSync(config_path, 'UTF-8'));
  
  configCheck();
  checkIfFoldersInitialized();
  
  return config;
};

function configCheck() {
  // Strip slash from end if it's present
  if (config.folder.substr(-1) == "/") {
    config.folder = config.folder.substr(0, config.folder.length - 1);
  }
  
  config.folders = {
    root: config.folder,
    filters: config.folder + "/filters",
    originals: config.folder + "/originals",
    renders: config.folder + "/renders"
  };
}

function checkIfFoldersInitialized() {
  for (var name in config.folders) {
    if (config.folders.hasOwnProperty(name)) {
      try {
        // No NodeJS function to check for a folders existance,
        // but we can do this instead.
        fs.realpathSync(config.folders[name]);
      } catch (e) {
        console.log("Initialized " + name + " folder");
        fs.mkdirSync(config.folders[name], 0777);
      }
    }
    
  }
  
  config.filters.forEach(function (filter) {
    try {
      fs.realpathSync(config.folders.filters + "/" + filter);
    } catch (e) {
      console.log("Created folder for " + filter + " filter");
      fs.mkdirSync(config.folders.filters + "/" + filter, 0777);
    }
  });
}