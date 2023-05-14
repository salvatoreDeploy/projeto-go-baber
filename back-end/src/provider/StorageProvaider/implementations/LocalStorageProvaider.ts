import fs from "fs";
import { resolve } from "path";
import { IStorageProvaider } from "../IStorageProvaider";
import Upload from "@config/Upload";


class LocalStorageProvaider implements IStorageProvaider {
  async save(file: string): Promise<string> {
    await fs.promises.rename(
      resolve(Upload.tmpFolder, file),
      resolve(`${Upload.tmpFolder}`, file)
    );

    return file;
  }

  async delete(file: string): Promise<void> {
    const avatarFileName = resolve(`${Upload.tmpFolder}`, file);

    try {
      await fs.promises.stat(avatarFileName);
    } catch {
      return;
    }
    await fs.promises.unlink(avatarFileName);
  }
}

export { LocalStorageProvaider };
