const zip = new JSZip();
zip.file("README.md", "Blank");
zip.file("metadata.json", "{[ project: "yes" "no-js": "yes" compiled: {} }]");

zip.generateAsync({type: "blob"}).then(blob => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Empty.factrunt";
  a.click();
});