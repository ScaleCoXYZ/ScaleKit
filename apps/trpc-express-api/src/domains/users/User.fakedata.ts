import { UserEntity } from "./User.entity";

// Helper function to generate random dates within a range
const randomDate = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

// Generate 20 fake users
export const fakeUsers: UserEntity[] = [
  new UserEntity({
    id: "usr_01HKPQ2JVYN5T",
    email: "john.smith@example.com",
    name: "John Smith",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN5U",
    email: "emma.wilson@example.com",
    name: "Emma Wilson",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN5V",
    email: "michael.chen@example.com",
    name: "Michael Chen",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN5W",
    email: "sophia.garcia@example.com",
    name: "Sophia Garcia",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN5X",
    email: "david.kim@example.com",
    name: "David Kim",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN5Y",
    email: "olivia.brown@example.com",
    name: "Olivia Brown",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN5Z",
    email: "james.taylor@example.com",
    name: "James Taylor",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN60",
    email: "ava.martinez@example.com",
    name: "Ava Martinez",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN61",
    email: "william.lee@example.com",
    name: "William Lee",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN62",
    email: "isabella.wong@example.com",
    name: "Isabella Wong",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN63",
    email: "lucas.patel@example.com",
    name: "Lucas Patel",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN64",
    email: "mia.anderson@example.com",
    name: "Mia Anderson",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN65",
    email: "ethan.nguyen@example.com",
    name: "Ethan Nguyen",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN66",
    email: "charlotte.singh@example.com",
    name: "Charlotte Singh",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN67",
    email: "alexander.cohen@example.com",
    name: "Alexander Cohen",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN68",
    email: "amelia.jackson@example.com",
    name: "Amelia Jackson",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN69",
    email: "henry.kumar@example.com",
    name: "Henry Kumar",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN6A",
    email: "victoria.zhang@example.com",
    name: "Victoria Zhang",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN6B",
    email: "sebastian.rodriguez@example.com",
    name: "Sebastian Rodriguez",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
  new UserEntity({
    id: "usr_01HKPQ2JVYN6C",
    email: "scarlett.murphy@example.com",
    name: "Scarlett Murphy",
    createdAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
    updatedAt: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
  }),
];
