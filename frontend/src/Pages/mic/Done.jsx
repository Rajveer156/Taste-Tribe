import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Done = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/done.gif" alt="success" />
          <h1>Booked Successfully</h1>
          <Link to={"/"}>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Done;