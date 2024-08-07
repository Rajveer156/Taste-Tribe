import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

const MAX_RESERVATIONS = 6;

export const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    const reservationCount = await Reservation.countDocuments({ date });

    if (reservationCount >= MAX_RESERVATIONS) {
      return next(
        new ErrorHandler(
          "Sorry, no more reservations available for this date.",
          400
        )
      );
    }

    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(200).json({
      success: true,
      message: "Booked Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }
    return next(error);
  }
};

export default send_reservation;
