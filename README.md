# Maukaim UIKit 

Repository to store Tutorials and code snippets to never forget it.

# Create a Code snippet page  

Create a component in codes.module with angular cli
```shell script
ng g component modules/codes/components/component-name-page --module codes.module  

```

Don't forget the ```page``` suffix.

To add the source code of the feature, create everything in the ```src``` sub folder:

```shell script
ng g directive modules/codes/components/component-name-page/src/directive-name
```

If you need to create some component to demonstrate the feature, create them in a demo folder

```shell script
ng g component modules/codes/components/component-name-page/demo/demo-component-name
```

Don't forget the ```demo``` preffix.
