exports.seed = function (knex) {
  // Deletes ALL existing entries
  const users = [
    {
      username: "test",
      password: "pass",
      department: "java",
    },
    {
      username: "test1",
      password: "pass1",
      department: "CS",
    },
    {
      username: "test2",
      password: "pass2",
      department: "node",
    },
    {
      username: "test3",
      password: "pass3",
      department: "react",
    },
  ];
  // Inserts seed entries
  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for user"));
};
