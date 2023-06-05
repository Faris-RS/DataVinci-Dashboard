import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: "",
  role: sample(["Student", "Mentor"]),
  name: faker.name.fullName(),
  subject: sample(["Mathematics", "Physics", "Chemistry", "Biology"]),
  isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
}));

export default users;
