import z from "zod";

export const storeruanganschema = z.object({
  nama_ruangan: z.string().trim().min(2, "Nama Ruangan Minimal 2 Karakter"),
  kapasitas: z.number().min(1, "Kapasitas Minimal 1"),
  lantai: z.number().min(1, "Lantai Minimal 1"),
});

export const updateruanganschema = z.object({
  nama_ruangan: z.string().trim().min(2, "Nama Ruangan Minimal 2 Karakter"),
  kapasitas: z.number().min(1, "Kapasitas Minimal 1"),
  lantai: z.number().min(1, "Lantai Minimal 1"),
});
