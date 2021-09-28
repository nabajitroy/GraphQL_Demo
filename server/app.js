const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

const mongourl = `mongodb+srv://mydb:mydb@cluster0.biodb.mongodb.net/sample_airbnb?retryWrites=true&w=majority`;

mongoose.connect(mongourl,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).catch(err => {
        console.log(err)
    });



mongoose.connection.once('open', () => {
    console.log("Connected to mongoose")
})
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(4000, () => {
    console.log('App listening to port 4000');
})