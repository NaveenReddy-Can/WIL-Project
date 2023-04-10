import React, { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import "./css/Uploadblob.css";

function UploadBlob() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleInputChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const blobServiceClient = new BlobServiceClient(
      process.env.REACT_APP_AZURE_BLOB_CONNECTION_STRING
    );
    const containerClient = blobServiceClient.getContainerClient(
      process.env.REACT_APP_AZURE_BLOB_CONTAINER_NAME
    );

    for (let file of files) {
      const blobName = `${Date.now()}-${file.name}`;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      try {
        await blockBlobClient.uploadBrowserData(file);
      } catch (error) {
        setError(error.message);
        return;
      }
    }

    setFiles([]);
  };

  const handleDelete = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className="upload-blob">
      <div
        className="dropzone"
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <input
          type="file"
          accept=".png,.jpg,.jpeg"
          onChange={handleInputChange}
        />
        <p>Drag and drop files here or click to select files</p>
      </div>
      {files.length > 0 && (
        <div className="selected-files">
          {files.map((file, index) => (
            <div className="file" key={file.name}>
              <span>{file.name}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
          <button onClick={handleSubmit}>Upload</button>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default UploadBlob;
