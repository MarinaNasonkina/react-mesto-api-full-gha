class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._credentials = options.credentials;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Что-то пошло не так! Ошибка: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: this._credentials,
    }).then(this._getResponseData);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      credentials: this._credentials,
    }).then(this._getResponseData);
  }

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._getResponseData);
  }

  editUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getResponseData);
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._getResponseData);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      credentials: this._credentials,
    }).then(this._getResponseData);
  }

  changeLikeStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'DELETE' : 'PUT'}`,
      credentials: this._credentials,
    }).then(this._getResponseData);
  }
}

const api = new Api({
  baseUrl: 'https://api.mn-mesto.nomoreparties.co',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
