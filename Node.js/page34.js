import express from "express";
import session from "express-session";
import expressLayouts from 'express-ejs-layouts'
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(expressLayouts)
app.use(express.static("public"))
app.listen(5005, () => console.log("Server Started"));
app.set("layout","layout")

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
  }),
);

const users = [
  { name: "Gaensh", email: "ganesh123@gmail.com", password: "1234" },
  { name: "Ajay", email: "ajay@gmail.com", password: "1234" },
  { name: "Komal", email: "komal@gmail.com", password: "1234" },
];

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
      req.session.user = user; //session id gets created, chcek in browser,inspect -application - cookies
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  } else {
    alert("Make sure the Password")
    res.redirect("/login");
  }
  res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    res.redirect("/login");

    return
  }
  else {
    users.push({
      name: name, password: password, email: email
    });
    res.redirect("/login");

  }

})
app.get("/", (req, res) => {
  if (req.session.user) {
    res.render("dashboard", { users });

  }
  else {
    res.redirect('/login')
  }

});