02 Coordinates
----------------------------------------------------------------------

We will need a way of defining the positions of our objects in 3D space. Three.js uses the Cartesian coordinate system. This system has been around since the 17th Century & was invented & named after René Descartes (the Latin version of Rene’s last name is “Cartesius” in case you wondering). You will no doubt come this system before if you have done well anything from plotting graphs to CSS positioning. 

Three.js uses 3 axis x, y and z. Imagine 2 lines/axis running across the screen and crossing in the centre. These are the x & y axis (x goes left/right and y up and down). Now imagine a 3rd line projecting towards and away from you through where the other axis meet. 

The centre point is sometimes called the origin and we can identify it by 3 values, x, y and z which are normally specified in this order so (0,0,0) refers to the dead centre of the screen. (50, 0, 0) would refer to a point right of the centre and . (-50, 0, 0) to the left of the centre.

When objects are added to a scene in three.js if you don’t specify a position the object is added at 0,0,0.


Open up index.htm in folder assets/BoilerplateApp/. 

In the scripts folder is a file called app.js that sets up a simple scene with a cube in the centre. There are many different types of primitives in three.js such as spheres, triangles, planes (a flat shape used for ground etc) but we will stick with a cube for these exercises as we are square like that.

We have not defined a position for the cube so it will be positioned at 0,0,0. 
Note the camera’s z coordinate has been set to 100 as otherwise it would be inside the cube and wouldn’t see anything – remember this when you are scratching your head why you don’t see anything as its very easy to do.

Like many frameworks there are many ways to accomplish the same thing in three.js that may be more appropriate at different times. 

Three.js allows you to define the position of an object in 3 main ways:

*	By setting an individual position e.g. camera.position.z=100;
*	By using the position.set method e.g. camera.position.set(0,0, 200);
*	By setting a vector e.g. camera.position = new THREE.Vector3(0,0, 100);

You can use all these methods to move an object or camera around a scene. 
Camera also has another method lookAt that allows us to point it at a specific direction e.g.

```js
camera.lookAt(new THREE.Vector3(-50,0, -200));
```
----------------------------------------------------------------------
Exercise
----------------------------------------------------------------------
1.	Move the camera closer to the cube
2.	Move the camera to the left of the cube
3.	Move the cube to the right and further away
4.	Make the camera look down on the cube
5.	Animate the camera so it gradually moves closer to the cube 

