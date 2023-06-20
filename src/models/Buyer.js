import { Schema, model } from 'mongoose';

const buyerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  ItemDetails: {
    type: String
  },
  location: {
    type: String,
    required: true
  },
  priceRange: {
    type: String,
    required: true
  },
  additionalInformation: {
    type: String
  }
});

const BuyerModel = model('Buyer', buyerSchema);

export default BuyerModel;
