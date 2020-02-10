## Dashboard distributed delivery

#### Author: Francisco Gutierrez Salazar
#### Email : [codemycoffee](mailto:codemycoffee@gmail.com)

The prokect is been created with Create react app with the TS template. 
Some basic types are included on the **types.ts** folder, any external interaction is contained in **api**, with a small function for generic POST operations.

The app is distrubuted in 3 main graphs/components, all of them generated with the Rechart library.

Auth is handled automatically in **App.tsx** with one of the users. Any user can be tested by changing the *credentials* object.
Token is stored locally after first fetch, and the graph data is fetched immediatly after a token is available.


The icoming data is formatted accordingly to each chart and then feed into the graph component.
ZoomChart is the only special one, as it has some props generated in APP regarding the limit days of the displayed data.
