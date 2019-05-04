const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ConsumerSchema = new Schema({
    appointment: {
        type: Schema.Types.ObjectId,
        ref: "Appointment"
      },
    demographic: {
        type: Schema.Types.ObjectId,
        ref: "Demographic"
    },
    mortgagerent: {
        type: Schema.Types.ObjectId,
        ref: "Mortgagerent"
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: "Budget"
    },
    counselor: {
        type: Schema.Types.ObjectId,
        ref: "Counselor"
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: "Staff"
    }
  });
  
  const Consumer = mongoose.model("Consumer", ConsumerSchema);
  
  module.exports = Consumer;
  