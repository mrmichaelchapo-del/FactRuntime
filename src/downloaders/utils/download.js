const zip = new JSZip();

zip.file("README.md", "Blank");

zip.file("metadata.json", JSON.stringify({
  project: "yes",
  "no-js": "yes",
  compiled: {}
}, null, 2));
zip.file("manifest", "Manifested");

zip.generateAsync({ type: "blob" }).then(blob => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Empty.factrunt";
  a.click();
});