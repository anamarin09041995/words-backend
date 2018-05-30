import { Router } from "express";
import { addWord, listWord, removeAll, removeWord, updateWord, uploadImage, getImg } from "../controllers/words/_index";

const router: Router = Router();

router.post("/", addWord);
router.put("/:id", updateWord);
router.get("/", listWord);
router.delete("/:id", removeWord);

router.post("/:id/image", uploadImage);
router.get("/:id/:name", getImg);
router.post("/:id", updateWord);


export default router;