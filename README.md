<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/headdetect/gatekeep-shared/master/demo/src/assets/logo.svg">
</p>

# gatekeep-shared - Shared resources for gatekeep kiosk and administration application

## Demo

View all the directives in action at https://headdetect.github.io/gatekeep-shared

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `gatekeep-shared` via:
```shell
npm install --save gatekeep-shared
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `gatekeep-shared`:
```js
map: {
  'gatekeep-shared': 'node_modules/gatekeep-shared/bundles/gatekeep-shared.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'gatekeep-shared';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'gatekeep-shared';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'gatekeep-shared';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Brayden Lopez. Licensed under the MIT License (MIT)

