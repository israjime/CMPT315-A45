import mongoose from "mongoose";

// structure or model for dacuments 

const MonstersSchema = new mongoose.Schema(
    {
        id: {type: Number},
        name:{type: String, required: true},
        username: {type: String},
        email: {type: String},
        address: {
            street: {type: String},
            suite: {type: String},
            city: {type: String},
            zipcode: {type: String},
            geo: {
                lat: {type: String},
                lng: {type: String}
            }
        },
        phone: {type: String},
        website: {type: String},
        company: {
            name: {type: String},
            catchPhrase: {type: String},
            bs: {type: String}
        },
        image_url: {type: String, required: true}
    },
);

const Monsters = mongoose.model("Monsters", MonstersSchema);

export default Monsters;