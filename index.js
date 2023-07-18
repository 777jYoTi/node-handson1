const http = require("http");


const server = http.createServer((req,res)=>{

    if (req.url === '/'){

        res.write("HOME PAGE");
        res.write("We have two routing pages- ABOUT & CONTACT")
        res.write("cross-platform runtime environment for executing JavaScript code")
        res.end();
    }

    else if(req.method === 'GET' && req.url === '/aboutus'){

        res.write("ABOUT")
        res.write("server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language")
        res.end();
    }
    else if(req.method === 'GET' && req.url === '/contact'){

        res.write("CONTACT NUMBER")
        res.write(JSON.stringify(["Contact",90000000,35687498798468,7077000000]));
        res.end();
    }
    
});

server.listen(5000);
console.log("Listening on port 5000")