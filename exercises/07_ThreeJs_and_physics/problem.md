07 ThreeJs and physics
----------------------------------------------------------------------
As we have seen three.js is an excellent framework for developing WebGL applications. It is important to note however that Three.js’s primary focus is displaying content on the screen. 
Many applications such as games will require functionality such as the ability to detect when one object touches another. 

Three.js does contain a basic collision detection system which uses a technique called ray casting but for some more advanced cases this may not be sufficient for your purposes.

For example let’s say you are creating a 3D pool game. It’s probably not too tricky to create the balls and table but getting the balls to behave realistically when hit could be very tricky indeed!

A ball will behave different depending on the speed and angle its hit & will also need to interact with other balls and the boundary of the table. Or say you are creating a car based game – players are now used to vehicles behaving realistically.

Whilst you could try and code how these objects should behave it would take a very long time to get satisfactory results.

Well probably the best solution to this issue is to incorporate a physics engine into your application. Physics engines simulate concepts such as gravity, velocity and how objects will behave when they interact with other objects in an environment.

A great option when using three.js is is to use the Physijs & ammo.js libraries. PhysiJs is basically a three.js focussed wrapper for another library called ammo.js. Physijs performs all the calculations in a webworker to avoid interfering with the UI as much as possible.

Physijs is actually using another library called Ammo.js which itself is actually a JS translation of a C++ library called bullet. Bullet is used extensively in many games. 

Anyway don’t worry too much about this but do be aware there is a heap of additional functionality in ammo.js that isn’t directly exposed by physijs.

In the assets folder you will find a folder called BoilerPlatePhysics that contains a template project using the PhysiJS engine a cube will descend gradually and an alert box will display when it hits the ground.

----------------------------------------------------------------------
Gravity
----------------------------------------------------------------------
You can change the scenes gravity by using the setGravity method and specifying a vector e.g. to invert gravity change the y parameter to positive 50 like so:

```js
scene.setGravity(new THREE.Vector3( 0, -50, 0 ));
```

Another aspect Physijs allows you to define is a materials properties. 

You can define 3 properties friction (which will slow down an object), restitution (bounciness) and weight. Friction and Bounciness are given a value between 0 and 1. 

```
var boxMaterial= Physijs.createMaterial(
                new THREE.MeshBasicMaterial({ color: 0xFF0000 }),
                0, //friction
                0.8 //restitution/bounciness
            );
```

Physijs also allows modification of a Mesh’s mass as an optional third parameter.

----------------------------------------------------------------------
Exercise
----------------------------------------------------------------------
*	Modify a scenes gravity so objects will drift to the right 
*	Experiment with the friction, restitution and bounciness properties and a mesh’s mass property
*	Drop a number of cubes from a height and if they collide change the color of the cubes  using the setHex methods e.g. object.material.color.setHex(0xff0000);
* For a longer challenge create a pinball or Pong game!
