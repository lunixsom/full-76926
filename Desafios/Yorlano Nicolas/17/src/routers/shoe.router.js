import { Router } from "express";
import { deleteImageFile, existsImageFile } from "../utils/imageFileHandler.js";
import { readJsonFile, writeJsonFile } from "../utils/jsonFileHandler.js";
import uploader from "../utils/uploader.js";

const router = Router();
const SHOES_FILE_NAME = "shoes.json";

// Endpoint para obtener los zapatos (filtros opcionales por marca y talla)
router.get("", async (req, res) => {
    try {
        const { brand, size } = req.query;
        const shoes = await readJsonFile(SHOES_FILE_NAME);

        let filteredShoes = [...shoes];

        if (brand) {
            filteredShoes = filteredShoes.filter((shoe) => String(shoe.brand).toLowerCase() === String(brand).toLowerCase());
        }

        if (size && !isNaN(size)) {
            filteredShoes = filteredShoes.filter((shoe) => Number(shoe.size) === Number(size));
        }

        res.status(200).json({ status: "success", payload: filteredShoes });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Endpoint para obtener un zapato en específico por ID
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOES_FILE_NAME);
        const shoe = shoes.find((shoe) => shoe.id === Number(id));

        if (!shoe) {
            return res.status(404).json({ status: "error", message: "Recurso no encontrado" });
        }

        res.status(200).json({ status: "success", payload: shoe });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Endpoint para crear un zapato.
router.post("", uploader.single("image"), async (req, res) => {
    try {
        const { brand, model, size, price } = req.body;

        if (!brand || !model || !size || isNaN(size) || !price || isNaN(price)) {
            if (req.file && req.file.filename) {
                // Se elimina la imagen cuando hay una imagen subida pero faltan datos de relevancia
                await deleteImageFile(req.file.filename);
            }

            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const shoes = await readJsonFile(SHOES_FILE_NAME);
        const newId = shoes.length > 0 ? Math.max(...shoes.map((shoe) => shoe.id)) + 1 : 1;

        const newShoe = {
            id: newId,
            brand,
            model,
            size,
            price,
            thumbnail: req.file ? req.file.filename: "default.jpg", //Imagen que llega, o imagen por defecto
        };

        shoes.push(newShoe);
        await writeJsonFile(SHOES_FILE_NAME, shoes);

        res.status(201).json({ status: "success", payload: newShoe });
    } catch (error) {
        if (req.file && req.file.filename) {
            // Se elimina la nueva imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }

        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Endpoint para modificar completamente un zapato
router.put("/:id", uploader.single("image"), async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOES_FILE_NAME);

        const index = shoes.findIndex((shoe) => shoe.id === Number(id));
        if (index < 0) {
            if (req.file?.filename) {
                // Se elimina la nueva imagen cuando hay un error
                await deleteImageFile(req.file.filename);
            }

            return res.status(404).json({ status: "error", message: "No se encontro el zapato" });
        }

        const shoe = shoes[index];
        if (req.body.brand) shoe.brand = req.body.brand;
        if (req.body.model) shoe.model = req.body.model;
        if (req.body.size) shoe.size = req.body.size;
        if (req.body.price) shoe.price = req.body.price;

        if (req.file && req.file?.filename !== shoe.thumbnail) {
            if (shoe.thumbnail && shoe.thumbnail !== "default.jpg" && await existsImageFile(shoe.thumbnail)) {
                // Se elimina la imagen del coche si no es la imagen por defecto
                await deleteImageFile(shoe.thumbnail);
            }
            shoe.thumbnail = req.file.filename;
        }

        shoes[index] = shoe;
        await writeJsonFile(SHOES_FILE_NAME, shoes);

        res.status(200).json({ status: "success", payload: shoe });
    } catch (error) {
        if (req.file?.filename) {
            // Se elimina la nueva imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }

        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Endpoint para actualizar solo la talla de un zapato
router.patch("/:id/size", async (req, res) => {
    try {
        const { id } = req.params;
        const { size } = req.body;
        const shoes = await readJsonFile(SHOES_FILE_NAME);

        if (!size) {
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const index = shoes.findIndex((shoe) => shoe.id === Number(id));
        if (index < 0) {
            return res.status(404).json({ status: "error", message: "No se encontro el zapato" });
        }

        shoes[index].size = Number(size);

        await writeJsonFile(SHOES_FILE_NAME, shoes);

        res.status(200).send({ status: "success" });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Endpoint para eliminar un zapato por su ID. URL: http://localhost:3000/api/shoes/id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOES_FILE_NAME);
        const index = shoes.findIndex((shoe) => shoe.id === Number(id));

        if (index < 0) {
            return res.status(404).json({ status: "error", message: "No se encontro el zapato" });
        }

        const shoe = shoes[index];
        shoes.splice(index, 1);
        await writeJsonFile(SHOES_FILE_NAME, shoes);

        if (shoe.thumbnail && shoe.thumbnail !== "default.jpg") {
            // Se elimina la imagen del coche si no es la imagen por defecto
            await deleteImageFile(shoe.thumbnail);
        }

        res.status(200).json({ status: "success" });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

/*
// Endpoin para subir imagenes de los zapatos. URL: http://localhost:3000/api/shoes
router.post("/upload", uploader.single("image"), async (req, res) => {
    try {
        const { file } = req;

        if (!file) {
            return res.status(400).json({ status: "error", message: "Falta el archivo" });
        }

        res.status(201).send({ status: "success", payload: file.filename });
    } catch (error) {
        res.status(error.message || 500).json({ status: "error", message: error.message });
    }
});
*/

export default router;