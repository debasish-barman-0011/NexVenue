import jwt from "jsonwebtoken";

// Vendor /Doctor Authentication MIddleware

const authDoc = async (req, res, next) => {
  try {
    // Verify the token to authenticate a vendor to login //
    const { dToken } = req.headers;
    if (!dToken) {
      return res.json({
        success: false,
        message: "Authorization Failed Login Again",
      });
    }
    // Decode the token //
    const token_decode = jwt.verify(dToken, process.env.JWT_SECRET);

    req.body.docId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authDoc;
