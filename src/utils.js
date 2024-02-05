// if remember me is false set cookie for session and but if it's true set cookie for 24 hours;
function setCookie(cookieName, cookieValue) {
  let now = new Date();
  now.setTime(now.getTime() + 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}; Secure`;
}

function deleteCookie(cookieName, cookieValue = "") {
  let now = new Date();
  let expDay = 1;
  now.setTime(now.getTime() - expDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now};`;
}

// all cookies is separated from each other with (;) sign and we need to split them and then search between them
function getCookie(cookieName) {
  let cookiesArray = document.cookie.split(";") ?? [];
  let mainCookie = null;
  cookiesArray.some((cookie) => {
    if (cookie.includes(cookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=") + 1);
      return true;
    }
  });
  return mainCookie;
}

// if we need to save a special cookie in localStorage
async function setInLocalStorage(itemName, itemContent) {
  itemName && itemContent && await window.localStorage.setItem(itemName, itemContent);
}

// if we need to get a special item in localStorage
function getFromLocalStorage(itemName) {
  return localStorage.getItem(itemName);
}

// if we need to remove a special item in localStorage
function removeFromLocalStorage(itemName) {
  return localStorage.removeItem(itemName);
}

// When we need to fetch something from an API
function fetchData(url, requestMethod = "GET", bodyParams = {}) {
  let output = fetch(url, {
    method: requestMethod,
    headers: {
      "Accept": "Application/json",
      "Content-Type": "Application/json"
    },
    body: JSON.stringify(bodyParams)
  }).then(response => response.json())
    .then(result => result).catch(error => error)

  return output
}

// When we need to separate number by 3 digits
const numberSeparator = (balance) => {
  balance = balance.split("");
  let lastElem = balance[balance.length - 1];
  if (lastElem === "+" || lastElem === "-") {
    balance.pop();
    if (lastElem === "-") {
      balance *= -1;
    }
  }
  balance = Number(balance.join(""));
  balance = Intl.NumberFormat('en-US').format(balance)
  return balance;
};

export { getCookie, deleteCookie, setCookie, setInLocalStorage, getFromLocalStorage, removeFromLocalStorage, fetchData, numberSeparator }