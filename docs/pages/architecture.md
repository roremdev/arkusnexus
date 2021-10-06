## Architectures

### MVC

> The Model-View-Controller (MVC) architectural pattern separates an application into three main groups of components: Models, Views, and Controllers.

This pattern helps to achieve separation of concerns. Using this pattern, user requests are routed to a Controller which is responsible for working with the Model to perform user actions and/or retrieve results of queries. The Controller chooses the View to display to the user, and provides it with any Model data it requires.

* **Model**. The Model is the core of the application. It contains the data that is used by the application.
* **View**. The View is the user interface. It is responsible for displaying the data to the user.
* **Controller**. The Controller is responsible for routing user requests to the Model and View.

This architectural pattern is used by many web applications.

For this project, the next directories define MVC server:


|Layer      |Directory  |Description                                                                            |
|-----------|-----------|---------------------------------------------------------------------------------------|
|View       |`routes`   | Because this server is REST, only servers data request instead server-side.           |
|Controller |`services` | Layer services for handle data like a middleware.                                     |
|Model      |`libs`     | Because this server doesn't has a ORM abstraccion, depends of MongoDB administration. |


Other directories define in the server:

|Directory     |Description                     |
|--------------|--------------------------------|
|`config`      | Environment directory.         |
|`doc`         | Documentation directory.       |
|`middlewares` | Expresss middlewares handlesr. |
|`test`        | Testing directory.             |
|`utils`       | Other tools.                   |


### MVVM

> The Model-View-ViewModel (MVVM) architectural pattern separates an application into three main groups of components: Models, Views, and ViewModels.

This is a software architectural pattern that facilitates the separation of the development of the graphical user interface (the view) from the development of the business logic named as the model. The viewmodel of MVVM is a value converter that is responsible for exposing all data necessary from the model in such a way that objects are easily managed and presented.

Frameworks that use it are VueJS.

### Tasks

- ¿Qué patrones de arquitectura conoces y cómo funcionan?