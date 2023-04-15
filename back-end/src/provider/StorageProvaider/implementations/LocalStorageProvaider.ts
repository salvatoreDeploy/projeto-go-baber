import fs from "fs";
import { resolve } from "path";
import upload from "../../../config/Upload";
import { IStorageProvaider } from "../IStorageProvaider";

class LocalStorageProvaider implements IStorageProvaider {
  async save(file: string): Promise<string> {
    await fs.promises.rename(
      resolve(upload.tmpFolder, file),
      resolve(`${upload.tmpFolder}`, file)
    );

    return file;
  }

  async delete(file: string): Promise<void> {
    const avatarFileName = resolve(`${upload.tmpFolder}`, file);

    try {
      await fs.promises.stat(avatarFileName);
    } catch {
      return;
    }
    await fs.promises.unlink(avatarFileName);
  }
}

export { LocalStorageProvaider };
