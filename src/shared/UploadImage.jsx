import React from "react";

export default function UploadImage({ setImage, setImageURL }) {
  return (
    <div className="upload">
      <div className="add">
          <input
            type="file"
            className="btn-circle"
            onChange={(e) => setImage(e.target.files[0])}
          />
      </div>
      <div className="url">
        <p>... or copy/paste link :</p>
        <input
          type="text"
          onChange={(e) => setImageURL(e.target.value)}
          placeholder=" https://..."
        />
      </div>
    </div>
  );
}
