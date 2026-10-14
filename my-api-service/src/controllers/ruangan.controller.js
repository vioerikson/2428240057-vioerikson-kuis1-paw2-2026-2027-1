import RuangKelasModel from "../model/ruangan.model.js";
import {
  storeruanganschema,
  updateruanganschema,
} from "../schemas/ruangan.schema.js";
import { apiResponse, apiResponseValidation } from "../utils/response.js";

class RuangKelasController {
  static async index(req, res) {
    const listRuangKelas = await RuangKelasModel.find();
    return apiResponse({ res, status: 200, data: listRuangKelas });
  }

  static async show(req, res) {
    const ruangKelasId = req.params.id;
    const ruangKelas = await RuangKelasModel.findById(ruangKelasId);

    if (!ruangKelas) {
      return apiResponse({
        res,
        status: 404,
        message: "data ruang kelas tidak ditemukan",
      });
    }

    return apiResponse({ res, status: 200, data: ruangKelas });
  }

  static async store(req, res) {
    const result = storeruanganschema.safeParse(req.body);
    if (!result.success) {
      return apiResponseValidation({
        res,
        errors: result.error,
      });
    }

    const { nama_ruangan, kapasitas, lantai } = result.data;

    const newRuangKelas = await RuangKelasModel.create({
      nama_ruangan,
      kapasitas,
      lantai,
    });
    return apiResponse({ res, status: 201, data: newRuangKelas });
  }

  static async update(req, res) {
    const ruangKelasId = req.params.id;
    const result = updateruanganschema.safeParse(req.body);
    if (!result.success) {
      return apiResponseValidation({
        res,
        errors: result.error,
      });
    }

    const { nama_ruangan, kapasitas, lantai } = result.data;

    const exists = await RuangKelasModel.exists({ _id: ruangKelasId });
    if (!exists) {
      return apiResponse({
        res,
        status: 404,
        message: "data ruang kelas tidak ditemukan",
      });
    }

    const updateRuangKelas = await RuangKelasModel.findOneAndUpdate(
      { _id: ruangKelasId },
      { nama_ruangan, kapasitas, lantai },
      { new: true },
    );

    return apiResponse({ res, status: 200, data: updateRuangKelas });
  }

  static async delete(req, res) {
    const ruangKelasId = req.params.id;

    const exists = await RuangKelasModel.exists({ _id: ruangKelasId });
    if (!exists) {
      return apiResponse({
        res,
        status: 404,
        message: "data ruang kelas tidak ditemukan",
      });
    }

    await RuangKelasModel.findOneAndDelete({ _id: ruangKelasId });
    return apiResponse({
      res,
      status: 200,
      message: "data ruang kelas berhasil dihapus",
      data: null,
    });
  }
}

export default RuangKelasController;
