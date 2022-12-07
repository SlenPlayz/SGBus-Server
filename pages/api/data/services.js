import fetch from "cross-fetch";

export default async function handler(req, res) {
  //   try {
  await fetch(`https://data.busrouter.sg/v1/services.json`)
    .then(x => x.json())
    .then((resp) => {
      res.setHeader("Cache-Control", "s-maxage=259200");
      return res.status(200).json(resp);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
}
