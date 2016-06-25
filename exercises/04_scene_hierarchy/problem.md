04 Scene hierarchy
----------------------------------------------------------------------
Three.js scenes have a hierarchy. We have already seen how we can add a camera to a scene with the scene.add method. 

We can say the camera is a child of the scene and scene is a parent of the camera. Three.js provides properties & collections for transversing this hierarchy.

Let’s add another box and make it a child of the parent box:

```js
var childBox = new THREE.Mesh(
              new THREE.CubeGeometry(20, 20, 20),
              new THREE.MeshBasicMaterial({color: 0x00FF00}));
```

Now lets make it a child of the parent box:
```js
box.add(childBox)
```

We can examine the child objects in three.js using the children property which returns an array of child objects e.g.
```js
box.children
```

Or we could refer directly to an individual object:
```js
box.children[0]
```

When an object is added to a three.js scene it is allocated an ID – this isn’t the most friendly thing to use so you can & should set a name:
```js
childBox.name=”test”;
```

If we have set a name on an object we can use the getObjectByName method to retrieve it:
```js
box.getObjectByName(‘test’)
```

When parameters are modified on the parent object they are also applied to the child object e.g. moving a parent object will also move a parents child objects.

----------------------------------------------------------------------
Exercise
----------------------------------------------------------------------
*	Add another cube (suggest using a different colour to distinguish it) as a child to the existing cube and position it to the right of the parent cube
*	Animate the parent cubes position and move it left & right across the screen