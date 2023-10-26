import multer from "multer";
import path from "path";
import sanitizeFilename from "sanitize-filename"; // Import thư viện

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads"); // Thư mục lưu trữ ảnh
  },
  filename: (req, file, cb) => {
    const sanitizedFilename = sanitizeFilename(file.originalname);
    cb(null, sanitizedFilename);
  },
});

export const upload = multer({ storage: storage });
