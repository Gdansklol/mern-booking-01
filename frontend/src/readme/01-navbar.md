
## Navbar setup 

- create on button in the App.js with the 
bootstrap class

```js

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Booking BlueCrown Hotel</h1>
      <button className="btn btn-primary">bootstrap css btn test</button>
    </div>
  );
}

export default App;

```
any styling for this button so 
automatically btn primary styling 
is applied to this button . 

add navbar
- so first of all create 
the folder structures
- write the structures of project
so basically project contains 
three things
**components, screens and static files**

1. components folder first 
so whatever the components
we are creating in this component folder
they are reusable
that's the reason I am going to name
these as **src/components**

2. create the second folder
as screens so screens are the stable ones.

3. now in the components, create 
first component
Navbar.js

4. in Navbar.js
create the functional component
use the **react snippets, rfce**

- so now remove the default stuff
in the App.js
remove this h1 text as well as 
the button css test

- and here we need to import the Navbar

- so Navbar component is added in the App.js
now let's check 

- 5:33 
visit the bootstrap documentaion for
the Navbar
- just type bootstrap navbar in Google search
link : (https://getbootstrap.com/docs/4.0/components/navbar/)

-  we don't need the complex things 
keep the things as simple

so I am going to use this
simple one in all the navbar which 
are belongs to bootstrap
so copy this

only have navbar title that means 
project title and simple navbar 
elements. so we don't have any
extra things in this navbar.

so that's the reason , choose this
navbar only.

```js
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
```

- Navbar.js
```js
import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

```

- need style navbar 
1. change the background color
background : dark blue, navbar
elements clor as white
2. choose index.css
you can choose any one or if you 
wnat to create a separate style sheet for
every component also you can write 

in this app we are not focusing on the css

we are focusing on the logics
that's the reason I don't prefer much time
for the css

3. you can remove this navbar-light and bg-light 
```js
// <nav class="navbar navbar-expand-lg navbar-light bg-light ">

<nav class="navbar navbar-expand-lg ">
```
- and in the index.css 
```css
.navbar{
  background-color: darkblue !important;
}
```
- !importane ; overriding the 
bootstrap classes 
that's the reason, every time put the !important

change the colors of these links in navbar

```css
.navbar{
  background-color: darkblue !important;
}

.nav-link{
  color: white !important;
}

.navbar-brand{
  color: white !important;
}
```
