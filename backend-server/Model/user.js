import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// the daatabase data is diplyed like this 
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmpassword: String,


});
// initilizing the mongoose connection and indexing auto incrementing
autoIncrement.initialize(mongoose.connection);
//making auto incrementing of index.
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;