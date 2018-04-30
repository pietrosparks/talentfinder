require('dotenv').load()

let MONGODB;
let BASEURL;

if (process.env.NODE_ENV == 'production'){
    MONGODB = process.env.MONGODB_URI;
    BASEURL = process.env.BASEURL_PROD;
}
else{
    MONGODB = process.env.MONGODB_DEV;
    BASEURL = process.env.BASEURL_DEV
}

module.exports = {
    DATABASE: MONGODB,
    BASEURL:BASEURL,
}