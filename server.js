const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//load env
dotenv.config({path: './config.env'});

const app = express();

//Devlogging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
//Profile routes
app.use('/api/v1/profile', require('./routes/profile'));

//if cant access 5000 go to 8000
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in  ${process.env.NODE_ENV} mode on port ${port}`);
});
