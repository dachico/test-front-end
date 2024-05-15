const { VITE_API_URL } = import.meta.env;

// https://mongoose-crud-multi-qu1x.onrender.com/api/users

export async function getUsers() {
  return await (await fetch(`${VITE_API_URL}/api/users`)).json();
}
