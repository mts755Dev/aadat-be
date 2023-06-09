import { set, connect } from 'mongoose'

set('strictQuery', false)
const connectDB = async () => {
  try {
    await connect(process.env.MONGODB_URI)
    console.log('Database connected....')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
