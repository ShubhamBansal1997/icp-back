const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shubham:shubham@cluster0-q4gst.mongodb.net', {
    dbName: 'test',
    useNewUrlParser: true,
    useCreateIndex: true
})
