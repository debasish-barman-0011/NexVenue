import jwt from "jsonwebtoken";

// Admin Authentication MIddleware

const authAdmin = async (req, res, next) => {
  try {
    // Verify the token to authenticate an admin to login //
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({
        success: false,
        message: "Authorization Failed Login Again",
      });
    }
    // Decode the token //
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Authorization Failed Login Again",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
