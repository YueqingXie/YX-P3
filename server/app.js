const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
mongoose
 .connect(process.env.MONGODB_URI ||
  "mongodb+srv://YX:Crystal980126.@cluster0.nxgeq.mongodb.net/databasename?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
 )
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

if (process.env.NODE_DEV === 'production'){
    app.use(express.static('client/build'));
}

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT || 4003, () => {
    console.log('now listening for requests on port 4003');
});