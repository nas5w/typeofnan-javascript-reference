export const parser = html => {
  const sections = html
    .split("<h2>")
    .filter(
      el => el.trim() !== "" && el.trim() !== "<!-- prettier-ignore-start -->"
    )
  return sections.map(section => {
    const [narrative, code] = section.split("</h2>")
    const dataElements = {
      start: parseCode(code, "start"),
      content: parseCode(code, "content"),
      end: parseCode(code, "end"),
      after: parseCode(code, "after")
    }
    return { narrative, ...dataElements }
  })
}

const parseCode = (snippet, section) => {
  let result = snippet.match(
    new RegExp('data-meta="' + section + '">((.|\n)*?)</code>')
  )
  return result ? result[1] : ""
}
