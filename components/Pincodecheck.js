import React, { useRef, useState } from "react";

const Pincodecheck = () => {
  const [pincodeAvailable, setPincodeAvailable] = useState(null);
  const [loading, setLoading] = useState(false)
  const checkAvailabiltyInputRef = useRef();
  const checkAvailabilty = async () => {
    setLoading(true);
    let res = await fetch("https://dio-brandio.github.io/21-sticks/pincode.json");
    if (res.ok) {
      let pinarray = await res.json();
      const isthere = pinarray.includes(
        parseInt(checkAvailabiltyInputRef.current.value)
      );
      setPincodeAvailable(isthere);
    }
    setLoading(false)
  };
  return (
    <div className="row g-3 mt-4 align-items-center">
      <div className="col-auto">
        <input
          type="number"
          id="pincode"
          ref={checkAvailabiltyInputRef}
          className="form-control"
          aria-describedby="passwordHelpInline"
          placeholder="Check your pincode"
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-dark" onClick={checkAvailabilty}>
          Check Availabilty
        </button>
      </div>

      {loading?<p>Loading</p>:!pincodeAvailable && pincodeAvailable != null && (
        <div className="text-danger">This Pincode Is not available</div>
      )}
      {pincodeAvailable && pincodeAvailable != null && (
        <div className="text-success">This Pincode Is available</div>
      )}
    </div>
  );
};

export default Pincodecheck;
