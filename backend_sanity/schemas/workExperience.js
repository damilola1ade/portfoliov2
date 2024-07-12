export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "desc", title: "Description", type: "string" },
    { name: "location", title: "Location", type: "string" },
    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
