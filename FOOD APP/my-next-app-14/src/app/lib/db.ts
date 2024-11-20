const { username, password } = process.env;
export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.yslau.mongodb.net/restDB?retryWrites=true&w=majority&appName=Cluster0";

console.log(process.env);
