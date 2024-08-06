
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [event, setEvent] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/registration/send",
        { firstName, lastName, email, phone, date, time , event},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      setEvent("")
      navigate("/Done");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="registration" id="reservation">
      <div className="container">
        <div className="banner">
          <div className="registration_form_box">
            <h1>Want to Host an Event</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <select
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                >
                  <option value="" disabled>Select Event</option>
                  <option value="Open Mic Session">Open Mic Session</option>
                  <option value="Book Publishing">Book Publishing</option>
                  <option value="Stand-ups">Stand-ups</option>
                  <option value="Story Telling">Story Telling</option>
                </select>
              </div>
              <button type="submit" onClick={handleRegistration}>
                REGISTER NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="banner">
          <img src="/registration.png" alt="res" />
        </div>
      </div>
    </section>
  );
};

export default Registration;

