# [VN] Restaurant Page

---

## Demo\*:

https://dongxanhrestaurant.netlify.app/

_\*The menu may take a while to load due to heroku sleeping on the backend._

---

## Stacks Used:

- Front End:

  - Material UI
  - React
  - Redux
  - React Router
  - Redux-think

- Back End:
  - ExpressJS
  - MongoDB

---

## Usage

You can use the [demo link](https://dongxanhrestaurant.netlify.app/) to take a look at the app in production environtment. But if you want to run on your own machine, you should first clone and run `npm install` on `root` level and also `client` folder, then follow the next steps:

1. You will need a local mongoDB installed on your computer in order to use this app. Read more about [MongoDBCompass](https://www.mongodb.com/products/compass).

2. Build and start the server, with `npm run build` and `npm start` at `root` level consecutively.

3. Start the client, with `npm run client`

Follow the next steps if you want to have admin access on your local machine:

1. Send a POST request to `localhost:5000/api/v1/users/register` with the body:

```
{
    "username": "username",
    "password": "password",
    "email": "email@example.com"
}

```

2. Go to MongoDBCompass on your computer, direct to the `DongXanhRestaurant/users` database, change the `isAdmin` field to `true`

3. Go to `localhost:PORT/admin` to access the admin page. _(default PORT=5000)_
4. Sign in with the register credentials.
5. Play around with the functionalities.

---

**The client delays sharing their menu so this project has been put to a halt. Functionalies will be updated, however.**

---
