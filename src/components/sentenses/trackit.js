import axios from "axios";

const BASEURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postRegister(register) {
  const promise = axios.post(`${BASEURL}/auth/sign-up`, register);
  return promise;
}
function postLogin(login) {
  const promise = axios.post(`${BASEURL}/auth/login`, login);
  return promise;
}
function creathabits(habits) {
  const promise = axios.post(`${BASEURL}/habits`, habits);
  return promise;
}
function getHabits() {
  const promise = axios.get(`${BASEURL}/habits`);
  return promise;
}
function getHabtisToday() {
  const promise = axios.get(`${BASEURL}/habits/today`);
  return promise;
}
function postHabitDone(id) {
  const promise = axios.post(`${BASEURL}/habits/${id}/check`);
  return promise;
}
function postHabitunDone(id) {
  const promise = axios.post(`${BASEURL}/habits/${id}/uncheck`);
  return promise;
}
function getHistoryc() {
  const promise = axios.get(`${BASEURL}/habits/history/daily`);
  return promise;
}
export {
  postRegister,
  postLogin,
  creathabits,
  getHabits,
  getHabtisToday,
  postHabitDone,
  postHabitunDone,
  getHistoryc,
};
