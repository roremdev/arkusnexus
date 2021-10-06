## Object Oriented Programming

> OOP ( Objected Oriented Programming ) is a computed programming model that organizes software design around data, or objects, rather than functions and logic.

OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them. Once an object is known, the next step is design hierarchy structure that define all models named as functions/requeriments or even all system.

The structure of OOP include the following:

* **Classes**. They are defined as data types that act as the blueprint for individual objects, attributes and methods.
* **Objects**. They are instances of a class created with specifically defined data. Objects can correspond to real world objects or an abstract entity.

* **Methods**. They are functions that are defined inside a class that describe the behaviors of an object. Each method contained in class definitions starts with a reference to an instance object.

* **Attributes**. They are defined in the class template and represent the state of an object.

### Implementation

We have a `ResourceService` defined for create MongoDB handler:
```javascript
import Mongo from '../libs/Mongo';

class ResourcesService {
    /**
     * DAO mongoDB collections
     * @param {string} collection - collection name
     */
    constructor(collection) {
        this.collection = collection;
        this.client = new Mongo();
    }

    /**
     * recollect a collection as middleware builder
     * @returns {array} - response query mongoDB as array
     */
    async getResource() {
        return await this.client.get(this.collection);
    }
}

const userService = new ResourcesService('user');
const data = await userService.getResource();
```
At below example, we have an abstraction class that defines a resource. These resource can do several operation on mongoDB.

When we defined a class, first we need to create a structure of knowlege generic ( a point has 2 values that represents its coordinates ). You can think the case where a point has a value instedad of 2 for represent a _vector_ or 3 values for represent a _real dimension_ but the way that we defined a point is known as __**abstraction**__ and its representation is known as __**class**__.

We can access to information through of methods that they enable us to manipulate the information contained in object. Depending of the language programming, we can access through `set` for assign data and `get` for retrieve data. Also, exist several levels to access and depend how the attributes object are defined:

* **Public**. Attributes that we can access along the project and its abostraction without an exactly asbtraction.
* **Private**. Attributes with only access from inside of object with possibilities to access with specials methods such as `set`, `get` or public methods.
* **Protected**. Attributes with only access through hierarchy parent-child.
* **Friendly**. This kind of access is defined by language or environment.

### Abstraction Hierarchy

The traditional way to abstract OOP is through general-to-particular or vice versa.
To talk about how we can abstract the reality, we can defined inheritance and interfaces:

> An inheritance is the way to relate a hierarchy of natural relation information and a interface, the way to implement a special hierarchy based on behavioral.

In JavaScript, the _inheritance_ we defined with `extends` key word but the _interface_ is more different because all is objecst, not classes. The implementation of interface in Java defines a contract to implement, javascript understand an interface as a object structure in high level.

### Polymorphism

> Defined as the behavior of the object

```javascript
class Resource {
    /**
    * DAO mongoDB collections
    * @constructor
    */
    constructor() {
        this.client = new Mongo();
    }
    /**
     * abstracccion method for get generic resource
     */
    async getResource();
}

class UserResource extends Resource {
    /**
    * main constructor
    * @constructor
    * @param {string} collection - collection name
    */
    constructor(collection) {
        super();
        this.collection = collection || 'generic';
    }
    /**
     * recollect a collection as middleware builder
     * @returns {array} - response query mongoDB as array
     */
    async getResource() {
        return await this.client.get(this.collection);
    }
}

const user = new User('user'); // create a new object
const data = await userService.getResource();
```

### Tasks

- ¿Cuáles son los niveles de acceso y cómo funcionan?
- ¿Qué es una clase?
- ¿Qué es y para qué se utiliza la herencia?
- ¿Qué es y para qué se utiliza las interfaces?
- ¿Qué es polimorfismo?
