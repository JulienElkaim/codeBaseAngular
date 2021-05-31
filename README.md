# Maukaim UIKit 

Repository to store Tutorials and code snippets to never forget it.

# Create a Code snippet page  

Create a component in codes.module with angular cli
```shell script
ng g component modules/codes/components/component-name-page --route component-type/component-name --module codes.module  

```

Don't forget the ```page``` suffix.

To add the source code of the feature, create everything in the ```src``` sub folder:

```shell script
ng g directive modules/codes/components/component-name-page/src/directive-name --module codes.module
```

If you need to create some component to demonstrate the feature, create them in a demo folder

```shell script
ng g component modules/codes/components/component-name-page/demo/demo-component-name --module codes.module
```
Don't forget the ```demo``` preffix.

Don't forget to add the route to ```codes-routing.module.ts```
Don't forget to create a link in ```navbar.component.ts``` to access it.



## TODO LIST 

- [X] Drag and Drop objects
- [ ] Blob files INPUT/OUTPUT (Hudson output, Mohawk input)
- [X] JSON Editor
- [ ] Toastr system passable partout (to do)
- [ ] Form Group & Form Control pour validation system (todo or Taurus)
- [ ] Stores pour partager gestion des data (Un service qui donne des BehavioralSubject)
- [ ] async pipe (Un pipe qui agit sur resultat d'un observable et qui gere unsub?) (todo)

