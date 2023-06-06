import axios from "axios";

const getUserList = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response;
  } catch (e) {
    throw new Error();
  }
};
export { getUserList };
