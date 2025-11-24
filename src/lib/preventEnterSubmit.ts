export const preventEnterSubmit = (e: React.KeyboardEvent) =>
  e.key === "Enter" && e.preventDefault();
