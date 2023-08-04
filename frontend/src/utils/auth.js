const BASE_URL = 'http://localhost:5000';

function checkResOk(res) {
  return res.ok
    ? res.json()
    : Promise.reject(`Что-то пошло не так! Ошибка: ${res.status} - ${res.statusText}`);
}

export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResOk);
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResOk);
}

export function checkToken() {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(checkResOk);
}

export function logout() {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
  }).then(checkResOk);
}
