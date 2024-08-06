import ErrorHandler from "../error/error.js";
import { Registration } from "../models/registrationSchema.js";

const send_registration = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone, event } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone || !event) {
    return next(new ErrorHandler("Please Fill Full Registration Form!", 400));
  }

  try {
    await Registration.create({
      firstName,
      lastName,
      email,
      date,
      time,
      phone,
      event,
    });
    res.status(201).json({
      success: true,
      message: "Registration Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default send_registration;
