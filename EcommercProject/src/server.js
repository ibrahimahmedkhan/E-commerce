const express = require("express");
const cors = require("cors");
var mysql = require("mysql");
var mongodb = require("mongodb");
var router = require("express").Router();

const MongoClient = require('mongodb').MongoClient;
const { values } = require("sequelize/dist/lib/operators");

var current_user = "noUser";

MongoClient.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    // Specify database you want to access
    db = client.db('db2');
    // console.log(`MongoDB Connected: lmao`);
    const courses = db.collection('courses');
    db.collection('c1').find().toArray((err, results) => {
        // console.log(results);
    });
});



// courses.insertOne({ name: 'Web Security' }, (err, result) => { });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db1"
  });


const app = express();

var corsOptions = {
  origin: "http://localhost:3002"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route




app.post("/insert", (req, res) =>{ 
    con.query("insert into  f values('"
    + req.body.state.cust_id + "' , '"
    + req.body.state.cust_name + "' , '"
    + req.body.state.order_id+ "' )"
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/update", (req, res) =>{ 
    con.query("update f set id = '"
    + req.body.state.cust_id + "' , name = '"
    + req.body.state.cust_name + "' , o = '"
    + req.body.state.order_id + "' where id = '" + req.body.state.cust_id + "'"
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/delete", (req, res) =>{ 
    con.query("delete from f where id = '"
    + req.body.state.cust_id + "'"
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/read", (req, res) =>{ 
    // console.log("its reading");
    con.query("select * from f where id = '" + req.body.state.cust_id+ "'"
    , (err,result) => {
            if(err) throw err;
            res.send(result);
        })
});

app.post("/readAll", (req, res) =>{ 
    // console.log("its reading all");
    con.query("select * from f "
    , (err,result) => {
            if(err) throw err;
            res.send(result);
        })
});

app.post("/insertAdmin", (req, res) =>{ 
    con.query("insert into  userinfo values('"
    + req.body.state.email + "' , '"
    + req.body.state.password + "' , '"
    + req.body.state.firstName + "' , '"
    + req.body.state.lastName + "' , '"
    + req.body.state.role + "' , '"
    + req.body.state.userid+ "' )"
    , (err,result) => {
            if(err) throw err;
        })

        

});

app.post("/updateAdmin", (req, res) =>{ 
    con.query("update userinfo set email = '"
    + req.body.state.email + "' , password = '"
    + req.body.state.password + "' , firstName = '"
    + req.body.state.firstname + "' , lastName = '"
    + req.body.state.lastname + "' , role = '"
    + req.body.state.role + "' , userid = '"
    + req.body.state.userid + "' where userid = '" + req.body.state.userid + "'"
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/deleteAdmin", (req, res) =>{ 
    con.query("delete from userinfo where userid = '"
    + req.body.state.userid + "'"
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/readAdmin", (req, res) =>{ 
    // console.log("its reading");
    con.query("select * from userinfo where userid = '" + req.body.state.userid+ "'"
    , (err,result) => {
            if(err) throw err;
            res.send(result);
        })
});

app.post("/readAllAdmin", (req, res) =>{ 
    // console.log("its reading all");
    con.query("select * from userinfo "
    , (err,result) => {
            if(err) throw err;
            res.send(result);
        })
});

app.post("/getCart", (req, res) =>{ 
    // console.log("its reading the cart");
    con.query("select * from cart "
    , (err,result) => {
            if(err) throw err;
            res.send(result);
        })
});

app.post("/confirmOrder", (req, res) =>{ 
    console.log("its confirming the order");
    con.query('insert into orderedby values((select userid from userinfo where email= (select email from session limit 1)),null,'+req.body.state.sum+',(select curdate() +5))'
    , (err,result) => {
            if(err) throw err;
        })

        console.log("its confirming the order 2");
    con.query('insert into orders (orderid, prodID, quantity)select (select orderid from orderedby order by orderid desc limit 1), prodId, quantity from cart'
    , (err,result) => {
            if(err) throw err;
        })
                

        console.log("its deleting the cart");
    con.query('truncate table cart'
        , (err,result) => {
                if(err) throw err;
            })
    

});


app.post("/getTotal", (req, res) =>{ 
    // console.log("its reading the total");
    con.query("select sum(quantity * price) as total from cart"
    , (err,result) => {
            if(err) throw err;
            res.send(result[0]);
        })
});


app.post("/addToCart", (req, res) =>{ 
    con.query(
            "insert into cart values('"
            + req.body.prd + "', "
            + " 0, (select price from products where productId = '"+ req.body.prd + "'), (select img from products where productId = '"+ req.body.prd + "'))"
        , (err,result) => {
                if(err) console.log(err);
                // console.log(result);
                res.send(result);
            })
});


app.post("/getProducts", (req, res) =>{ 
    // console.log("its getting products");
    con.query("select * from products"
    , (err,result) => {
            if(err) console.log(err);
            // console.log(result);
            res.send(result);
        })
});

app.post("/getProductsByCategory", (req, res) =>{ 
    // console.log("its getting products");
    // console.log('category be' + req.body.category)
    con.query("select * from products where category='" + req.body.category + "'"
    , (err,result) => {
            if(err) console.log(err);
            // console.log(result);
            res.send(result);
        })
});


app.post("/getProductsByName", (req, res) =>{ 
    // console.log("its getting products");
    // console.log('category be' + req.body.category)
    con.query("select * from products where prodName ='" + req.body.name + "'"
    , (err,result) => {
            if(err) console.log(err);
            // console.log(result);
            res.send(result);
        })
});


            

app.post("/filterByPrice", (req, res) =>{ 
    // console.log("its reading");
    con.query("select * from products where price < '1000'"
    , (err,result) => {
            if(err) throw err;
            res.send(result);
        })
});


app.post("/insertProducts", (req, res) =>{ 
    con.query("insert into products values(null , '"
    + req.body.state.prodName + "' , '"
    + req.body.state.price + "' , '"
    + req.body.state.category + "' , '"
    + req.body.state.img+ "' , (select userid from userinfo where email = (select email from session))," +
    + req.body.state.stock + ")" 
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/getProductFromCart", (req, res) =>{ 
    con.query("insert into products values('"
    + req.body.state.productId + "' , '"
    + req.body.state.prodName + "' , '"
    + req.body.state.price + "' , '"
    + req.body.state.category + "' , '"
    + req.body.state.img+ "' )"
    , (err,result) => {
            if(err) throw err;
            // console.log("mama miaaa its workin")
        })
    
    con.query("insert into suppliedby values('"
    + req.body.state.productId + "' , "+
    "select userid from userinfo where email= (select email from session limit 1)"
    , (err,result) => {
            if(err) throw err;
            // console.log("mama miaaa its workin")
        })
});


app.post("/deleteItem", (req, res) =>{
    con.query("delete from cart where prodid = '"
    + req.body.productId + "'"
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/alterQuantityFromDB", (req, res) =>{
    con.query("update cart set quantity = quantity + " + req.body.amount +" where prodid = '" + req.body.prodId+ "'"
    , (err,result) => {
            if(err) throw err;
        })
});


//update cart set quantity = quantity-1 where prodid = '" + prodid+ '""


app.post("/current_user", (req, res) =>{
    
    // console.log("its getting user");
    con.query("select * from session"
    , (err,result) => {
            if(err) throw err;
            // console.log(result);
            res.send(result[0]);
        })
});

app.post("/logOut", (req, res) =>{
    console.log("its loggin out");
    con.query("truncate table session"
    , (err,result) => {
            if(err) throw err;
        })
    con.query("truncate table cart"
    , (err,result) => {
            if(err) throw err;
        })
});

app.post("/signUp", (req, res) =>{
    // console.log("attempting signup")
    con.query("insert into userInfo values('"
    + req.body.state.email + "' , '"
    + req.body.state.password + "' , '"
    + req.body.state.firstName + "' , '"
    + req.body.state.lastName + "' , '"
    + req.body.state.role + 
    "' , null)"
    , (err,result) => {
            // if(err) throw err;
            if(err) {
                console.log(err);
                res.send({mes: "err", worked: false});
            }
            else {
                res.send({mes: "successful", worked: true});
            }
        })

        con.query("truncate table session;"
        , (err,result) => {
                if(err) console.log(err);
            })

        con.query("insert into session values('"
        + req.body.state.email + "' , '"
        + req.body.state.firstName + "' , '"
        + req.body.state.lastName + "' , '"
        + req.body.state.role + 
        "' )"
            , (err,result) => {
                if(err) console.log(err);
            })
});


app.post("/login", (req, res) =>{ 
     console.log("its logging in");
     console.log(req.body.state.email);
    con.query("select * from userinfo where email = '" + req.body.state.email + "'" +
    "and password ='" + req.body.state.password +"'"
    , (err,result) => {
            if(err) throw err;
            console.log(result[0]);
            res.send(result[0]);
        })

        con.query("truncate table session;"
        , (err,result) => {
                if(err) console.log(err);
            })

        con.query("insert into session values('"
        + req.body.state.email + "' , "
        + "(select firstname from userinfo where email = '"+ req.body.state.email 
        + "'), (select lastname from userinfo where email = '"+ req.body.state.email  
        + "'), (select role from userinfo where email = '"+ req.body.state.email + "'))"
            , (err,result) => {
                if(err) console.log(err);
            })
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//////


