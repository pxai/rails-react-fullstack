const url = 'http://localhost:3001';

const headers =  {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

export function getAll () {
      return fetch(url + '/exercises', {
          method: 'GET'
        }
      )
      .then(result => result.json())
   }

export function get(id) {
    return fetch(url +'/exercises/' + id, {
        method: 'GET'
      }
    )
    .then(result => result.json() )
  }

