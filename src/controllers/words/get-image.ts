import { Response, Request, NextFunction } from "express";
import { FileService } from "../../services/file-service";
import { Query } from "../_common/query";
import { Word } from "../../models/word";
import { sendSuccess } from "../_common/ctrl-ext";


interface RequestImg {
    name: string;
    base64: string;
}

export function getImg(req: Request, res: Response, next: NextFunction) {
    const name = req.params.name;
    const id: string = req.params.id;

    FileService.instace.getFile(id, name)
        .then(x => {
            res.setHeader("Content-Type", "image/jpeg");

            res.send(x);
        })
        .catch(err => next(err));
}