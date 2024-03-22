module.exports = {
  HOST: "",
  USER: "postgres",
  PASSWORD: "",
  DB: "heckathonstart24",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
};