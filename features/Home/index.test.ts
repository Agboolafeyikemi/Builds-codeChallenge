import React from "react";

import validateEmail from "../Home/index";

import Home from "../Home/index";

test("should validate mail", () => {
  let email: any = "test@test.com";
  const text = validateEmail(email);
  expect(text).toBe(true);
});
