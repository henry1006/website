import { Person } from "@/types";

export const person: Person = {
  firstName: "Henry",
  lastName: "Zhang",
  name: `Henry Zhang`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "cheunghenry70@hotmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};
