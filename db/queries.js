const pool = require("./pool");

async function fetchTableNames() {
  let { rows } = await pool.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
  );
  return rows;
}
async function fetchAircrafts() {
  let { rows } = await pool.query("SELECT name FROM aircrafts;");
  return rows;
}
async function fetchAircraftImages() {
  let { rows } = await pool.query("SELECT img FROM aircrafts;");
  return rows;
}
async function fetchMovies() {
  let { rows } = await pool.query("SELECT name FROM movies;");
  return rows;
}
async function fetchMovieImages() {
  let { rows } = await pool.query("SELECT img FROM movies;");
  return rows;
}
async function fetchDevices() {
  let { rows } = await pool.query("SELECT name FROM devices;");
  return rows;
}
async function fetchDeviceImages() {
  let { rows } = await pool.query("SELECT img FROM devices;");
  return rows;
}
async function addAircraft(name, img) {
  await pool.query("INSERT INTO aircrafts (name,img) VALUES ($1,$2);", [
    name,
    img,
  ]);
}
async function addDevice(name, img) {
  await pool.query("INSERT INTO devices (name,img) VALUES ($1,$2);", [
    name,
    img,
  ]);
}
async function addMovie(name, img) {
  await pool.query("INSERT INTO movies (name,img) VALUES ($1,$2);", [
    name,
    img,
  ]);
}
async function deleteAircraft(id) {
  await pool.query("DELETE FROM aircrafts WHERE id=$1", [id]);
}
async function deleteMovie(id) {
  await pool.query("DELETE FROM movies WHERE id=$1", [id]);
}
async function deleteDevice(id) {
  await pool.query("DELETE FROM devices WHERE id=$1", [id]);
}
async function fetchAircraftId() {
  const { rows } = await pool.query("SELECT id FROM aircrafts;");
  return rows;
}

async function fetchDeviceId() {
  const { rows } = await pool.query("SELECT id FROM devices;");
  return rows;
}

async function fetchMovieId() {
  const { rows } = await pool.query("SELECT id FROM movies;");
  return rows;
}

module.exports = {
  fetchTableNames,
  fetchAircrafts,
  fetchAircraftImages,
  fetchMovies,
  fetchMovieImages,
  fetchDeviceImages,
  fetchDevices,
  addAircraft,
  addDevice,
  addMovie,
  deleteAircraft,
  deleteDevice,
  deleteMovie,
  fetchDeviceId,
  fetchMovieId,
  fetchAircraftId,
};
