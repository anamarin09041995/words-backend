import { Response, Request, NextFunction } from "express";
import { FileService } from "../../services/file-service";
import { Query } from "../_common/query";
import { Word } from "../../models/word";
import { sendSuccess } from "../_common/ctrl-ext";


interface RequestImg {
    name: string;
    base64: string;
}

export function uploadImage(req: Request, res: Response, next: NextFunction) {
    const img: RequestImg = req.body;
    const id: string = req.params.id;

    FileService.instace.saveFile(id, img.name, "image/jpg", img.base64)
        .then(x => sendSuccess(res, x))
        .catch(err => next(err));
}