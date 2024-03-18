const app = require("./src/server");
const dbConnection = require("./src/config/dbConnection");

dbConnection()
  .then(() => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch((err) =>
    console.log(
      "tenemos problemas con la conexion a la base de datos",
      err.message
    )
  );
