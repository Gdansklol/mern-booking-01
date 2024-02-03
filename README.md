# MERN - Full Stack Booking rooms  App 

1. create github repository

2. git clone + github repo URL
ws > git clone 
cd mern-booking-01

3. in booking rooms project only 
create 2 apps that means front-end app
and back-end app

4. use react as front-end or client
and
nodejs as back-end

5. complete the sepup of react app later
will go with back-end
so to create a new react app
open cmd or bash or vs code terminal or iTerm 
so that is up to choice

6. create a new react application

```bash
npx create-react-app frontend
```
because **react** is **front-end**
**nodejs** is the **back-end**. 


### `navigate into frontend folder`
booking-mern-01>cd frontend

 `excute react application`
 [bash] 
 ```bash
 npm start
 ```


### `App.js`
If you expand src,you can able to see
App.js

- basic things 
here need to remove all the default stuff
-  reloading in react 
open the chrome or other browser
 
<hr></hr>

## Navbar setup 
- use 3 CSS frameworks in this project
- simple bootstrap navbar
-  **bootstrap, react bootstrap and andy**

- Andy and react bootstrap is for the small purposes
and use mostly bootstrap classes 

1. use Bootstrap cdn links or 
have to installl the bootrstrap using the `npm`

2. choice
- can directly use the CDN links you can copy 
and paste in the public/index.html which is
present in the public folder

so I will choose the basic one
which is the copying bootstrap cdn links and pasting
in the public index.html


- the first method using the CDN links
- visit the Boostrap ofiicial website
- link : (https://getbootstrap.com/)
- copy the both cdn lilnks
- first copy css then have to copy script also
- paste the links in the header tag, above the title in index.html in the public folder
 
### Include via CDN
When you only need to include Bootstrap’s compiled CSS or JS, you can use jsDelivr. See it in action with our simple quick start, or browse the examples to jumpstart your next project. You can also choose to include Popper and our JS separately.

```css
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

```
## Node Server Setup

initialize the npm 
just 

```bash
 mern-booking-01  git:(main) ✗ npm init
```
- install the **express.js**
because we are going to use as our **backend framework**
```bash
mern-booking-01 git:(main) ✗ npm i express

```
- installed successfully so we got the package-lock.json
as well as node modules. 

