window.onload = function () {
  const host = window.location.host
  let path = window.location.pathname
  console.log(path)
  if (path.endsWith("index.html")) {
    path = path.substr(path, path.length - "index.html".length)
  }
  const instanceId = Math.random().toString(36).substring(2, 15)
  const url = `https://play.workadventu.re/_/${instanceId}/${host}${path}maps/demomap.json`
  document.getElementById("testMapURL").href = url
  document.getElementById("testMapBtnURL").href = url
  document.getElementById("testMapURL").innerText = url

  // const jsonURL =
  //   window.location.protocol +
  //   "//" +
  //   window.location.host +
  //   path +
  //   "maps/demomap.json"
  // document.getElementById("jsonURL").innerHTML = jsonURL
}
