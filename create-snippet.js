var fs = require("fs");

const split = process.argv[2].split("/");
let filename = split.pop().trim();
if (filename.substr(filename.length - 3).toLowerCase() !== ".md") {
  filename += ".md";
}

// Directory path
const dir = "./src/code-snippets/" + split.join("/");

// Full path (directory + filename)
const path = dir + "/" + filename;

try {
  // Bail if the file exists already
  if (fs.existsSync(path)) {
    throw "File already exists, bailing!";
  }

  // Create the file with our template
  fs.mkdir(dir, { recursive: true }, err => {
    if (err) throw err;
    fs.createReadStream("./md-templates/code-snippet.md").pipe(
      fs.createWriteStream(path)
    );
  });
} catch (err) {
  console.error(err);
}
