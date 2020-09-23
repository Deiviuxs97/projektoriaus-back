const { Language } = require("../../models/languageModel");

exports.Home = async (req, res) => {
  try {
    const lang = await Language.find();
    if (!lang || lang === null) {
      return res.status(400).json({ msg: "No such language" });
    }

    res.json({
      lng: {
        lt: lang[0],
        en: lang[1],
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
