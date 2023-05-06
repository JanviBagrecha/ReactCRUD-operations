import mongoose from 'mongoose';

const connection = async (username, password) => {
    const URL =`mongodb+srv://${username}:${password}@cluster0.mygyfgo.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
    //never put username/pass in code (bad coding) - save it in another file
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true}); //parameters: URL and object and some values 
/*useUnifiedTopology: mongodb internally uses server directory, server discovery, monitoring engine so to make mongo
use () latest directory and other topology we assign 'true'
useNewUrlParser: the url of mongo that is to be used should use latest parser 
await is used - when the connect() gets hit by a promise then only works or else error occurs so it is made asynchronous*/
        console.log("Database connected successfully");
    }catch(error){
        console.log('Error in connecting with the data base', error);
    }
}

export default connection;