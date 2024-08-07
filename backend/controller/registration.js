import ErrorHandler from "../error/error.js";
import { Registration } from "../models/registrationSchema.js";

const send_registration = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone, event } = req.body;

  if ( !firstName || !lastName || !email || !date || !time || !phone || !event ) {
    return next(new ErrorHandler("Please Fill Full Registration Form!", 400));
  }

  try {
    // Check if an event is already registered for the given date
    const eventExists = await Registration.findOne({ date });

    if (eventExists) {
      return next(
        new ErrorHandler("An event is already registered for this date!", 400)
      );
    }

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
