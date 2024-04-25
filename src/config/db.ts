import mongoose from 'mongoose';

export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI || '', {} as mongoose.ConnectOptions ).then(() => {
        console.log('MongoDB Connected');
      }).catch((error) => {console.error('Error connecting MongoDB:', error);});
}