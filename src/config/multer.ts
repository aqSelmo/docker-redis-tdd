import multer from 'multer';
import { resolve, extname } from 'path';
import crypto from 'crypto';

export const upload = multer({
  storage: multer.diskStorage({
    destination: resolve('tmp'),
    filename: (_, file, cb) => {
      const src = `${new Date().getTime()}-${crypto
        .createHash('md5')
        .update(file.originalname)
        .digest('hex')}${extname(file.originalname)}`;

      return cb(null, src);
    },
  }),
});
