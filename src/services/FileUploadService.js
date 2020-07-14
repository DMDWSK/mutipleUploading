import http from "../http-common";
import axios from 'axios'

const upload = (file, onUploadProgress) => {
  let formData = new FormData();
  console.log("FILEEEEE",file)

  formData.append("file", file);

  return axios.post("http://192.168.3.117/upload", formData, {
    onUploadProgress,
  })
};

const getFiles = () => {
  return http.get("/files");
};

export default {
  upload,
  getFiles,
};
