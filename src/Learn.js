import React from "react";

export default function Learn() {
  const sec = (user) => {
    return user.firstName + " " + user.lastName;
  };

  const user = {
    firstName: "Sonu",
    lastName: "Pun",
  };
  return (
    <>
      <h1>{sec(user)}</h1>
    </>
  );
}
