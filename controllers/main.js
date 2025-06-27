const { get, redirect } = require("express/lib/response");
const db = require("../db/queries");

async function getCategoriesNames(req, res) {
  let categories = await db.fetchTableNames();
  res.render("home", { categories: categories });
}
async function getAircraftItems(req, res) {
  let categories = await db.fetchTableNames();
  let aircrafts = await db.fetchAircrafts();
  let images = await db.fetchAircraftImages();
  let id = await db.fetchAircraftId();
  res.render("aircraftItems", {
    categories,
    aircrafts,
    images,
    id,
  });
}

async function getMovieItems(req, res) {
  let categories = await db.fetchTableNames();
  let movies = await db.fetchMovies();
  let images = await db.fetchMovieImages();
  let id = await db.fetchMovieId();
  res.render("movieItems", {
    categories,
    movies,
    images,
    id,
  });
}

async function getDeviceItems(req, res) {
  let categories = await db.fetchTableNames();
  let devices = await db.fetchDevices();
  let images = await db.fetchDeviceImages();
  let id = await db.fetchDeviceId();
  res.render("deviceItems", { categories, devices, images, id });
}

async function getAddAircraft(req, res) {
  let categories = await db.fetchTableNames();
  res.render("addAircraft", { categories: categories });
}
async function getAddDevice(req, res) {
  let categories = await db.fetchTableNames();
  res.render("addDevice", { categories: categories });
}
async function getAddMovie(req, res) {
  let categories = await db.fetchTableNames();
  res.render("addMovie", { categories: categories });
}

async function postAddAircraft(req, res) {
  const name = req.body.aircraftName;
  const img = req.body.aircraftIMG;
  await db.addAircraft(name, img);
  res.redirect("/aircrafts");
}
async function postAddDevice(req, res) {
  const name = req.body.deviceName;
  const img = req.body.deviceIMG;
  await db.addDevice(name, img);
  res.redirect("/devices");
}
async function postAddMovie(req, res) {
  const name = req.body.movieName;
  const img = req.body.movieIMG;
  await db.addMovie(name, img);
  res.redirect("/movies");
}
async function deleteAircraftItem(req, res) {
  let id = req.params.id;
  await db.deleteAircraft(id);
  res.redirect("/aircrafts");
}
async function deleteDeviceItem(req, res) {
  let id = req.params.id;
  await db.deleteDevice(id);
  res.redirect("/devices");
}
async function deleteMovieItem(req, res) {
  let id = req.params.id;
  await db.deleteMovie(id);
  res.redirect("/movies");
}

module.exports = {
  getCategoriesNames,
  getAircraftItems,
  getMovieItems,
  getDeviceItems,
  getAddAircraft,
  getAddDevice,
  getAddMovie,
  postAddAircraft,
  postAddDevice,
  postAddMovie,
  deleteAircraftItem,
  deleteDeviceItem,
  deleteMovieItem,
};
