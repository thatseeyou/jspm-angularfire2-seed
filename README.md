# Angular (>=v4) + jspm + typescript
refer: [jspm-typescript-seed](https://github.com/thatseeyou/jspm-typescript-seed)

refer: [jspm-angular4-seed](https://github.com/thatseeyou/jspm-angular4-seed)

### systemjs-angular-loader.js
* Angular team discourages from using moduleId which is used for component-relative paths. ([changelog 2017-03-13](https://angular.io/docs/ts/latest/guide/change-log.html))
* [TODO] But currently systemjs-angular-loader.js does not support jspm bundle.

# angularfire2
### install
```
proj> jspm install npm:angularfire2
```
### edit tsconfig.json
```
... 
      "firebase/app":       ["jspm_packages/npm/@firebase/app@0.1.2"], 
      "@firebase/app":      ["jspm_packages/npm/@firebase/app@0.1.2"], 
      "firebase/database":  ["jspm_packages/npm/@firebase/database@0.1.3"], 
      "@firebase/database": ["jspm_packages/npm/@firebase/database@0.1.3"], 
      "angularfire2":       ["jspm_packages/npm/angularfire2@5.0.0-rc.0-next"],
      "angularfire2/*":     ["jspm_packages/npm/angularfire2@5.0.0-rc.0-next/*"],
...
```

### edit systemjs.config.js
```
...
  packages: {
    "app": {
      "defaultExtension": "js",
      "meta": {
        "./*.js": {
          "loader": "systemjs-angular-loader.js"
        }
      },
      "map": {
        "angularfire2/database": "npm:angularfire2@5.0.0-rc.0-next/bundles/database.umd.js",
        "angularfire2/ath": "npm:angularfire2@5.0.0-rc.0-next/bundles/auth.umd.js"
      }
    }
  },
...
```