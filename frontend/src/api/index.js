const url = 'http://localhost:3000/api';

const headers =  {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

export function getAll () {
	  console.log('Api GET')
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

