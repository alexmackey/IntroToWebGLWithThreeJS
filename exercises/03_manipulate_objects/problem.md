03 Manipulate objects (Scale & Rotation)
----------------------------------------------------------------------
Sometimes you will want to change the size of objects in your scene. We can modify the scale of an object using the scale.set method that changes the size of the object relative to its original size. 

For example to make an object twice as big as its initial size:

```js
box.scale.set(2, 2, 2) //twice as big
```

Or we could manipulate it on just one dimension/axis:
```js
box.scale.x=2; //x twice as big
```

We can rotate an object using the rotation property or methods. 
Note you may be expecting the rotate methods to operate in degrees but Three.js requires you specify these values in radians. 

There is a simple formula to convert from degrees to Radians:

	Radians = Degrees x (PI /180)

So to rotate an object 90 degrees we would do the following:

	90 X (3.14/180) = 1.57 radians

Let’s rotate our box 45 degrees:
```js
var degrees=45;
box.rotation.y =  degrees  * (Math.PI / 180);
```

or we could also do:
```js
box.rotateY(degrees  * (Math.PI / 180))
```

Note that rotations are performed relative to the objects internal coordinate system not relative to how it appears to you. So if you did the following twice you are essentially rotating the object 90 degrees from its start position:

```js
var degrees=45;
box.rotation.y =  degrees  * (Math.PI / 180);
box.rotation.y =  degrees  * (Math.PI / 180);
```

We can also rotate the camera if we wanted:
```js
camera.rotateY(45  * (Math.PI / 180))
```

Its probably not too important right now but note that rotations are performed in Euler order x, y, z not necessarily the order you call them in.

----------------------------------------------------------------------
Exercise
----------------------------------------------------------------------
*	Rotate the cube 45 degrees
*	Create an animation that rotates and resizes the cube