import jwt from "jsonwebtoken";

// User Authentication MIddleware

const authUser = async (req, res, next) => {
  try {
    // Verify the token to authenticate an admin to login //
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Authorization Failed Login Again",
      });
    }
    // Decode the token //
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
