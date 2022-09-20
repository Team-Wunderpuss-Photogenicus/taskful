const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const familyRouter = require('./router/family');
const individualRouter = require('./router/individual');
const userRouter = require('./router/user');

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

//log all requests during dev
app.use((req, res, next) => {
console.log(`server/app.js: received request ${req.method} ${req.url}`);
next();
});

//serve the dist folder (build)
app.use(express.static(path.resolve(__dirname, '../dist')));

//handle api calls
// app.use('/api', api);

//serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/', 'index.html'));
})

//handle family calls
app.use('/family', familyRouter)

//handle user calls
app.use('/individual', individualRouter)

//handle user calls
app.use('/user', userRouter)


//default 404 handeler
app.use((req, res) => {
    console.log(`server/app.js: handler not found for request ${req.method} ${req.url}`);
    res
        .status(404)
        .send(
        'Page not found'
        );
});

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      message: { err: 'An error occurred' },
      log: 'Express error handler caught unknown middleware error',
      status: 400,
    };
    const errObj = Object.assign(defaultErr, err);
    console.log('ErrorObject Log: ', errObj.log);
    res.status(errObj.status).send(errObj.message);
});

//start server
app.listen(PORT, () => {
    console.log(`Express Node server listening on ${PORT}`);
})
