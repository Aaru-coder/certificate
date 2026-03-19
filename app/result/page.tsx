"use client";

export default function PdfViewer() {
  const fileUrl = "https://www.mpmsumed.in/HP027H00019018.pdf"; // must be a public URL

  return (
    <iframe
      src={`https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`}
      width="100%"
      height="750px"
      style={{ border: "none" }}
    />
  );
}