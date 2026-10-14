import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nama_ruangan: {
    type: String,
    required: true,
  },
  kapasitas: {
    type: Number,
    required: true,
  },
  lantai: {
    type: Number,
    required: true,
  },
});

const ruanganModel = mongoose.model("ruangan", schema);
export default ruanganModel;
