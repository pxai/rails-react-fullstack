const url = (process.env.NODE_ENV === 'development') 
    ? 'http://localhost:3000'
	: 'https://calories-burner.herokuapp.com';
		
const headers =  {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

export function getAll () {
      return fetch(url + '/api/exercises', {
		  method: 'GET',
		  headers
        })
		.then(data => data.json());
   }

export function get(id) {
    return fetch(url +'/api/exercises/' + id, {
        method: 'GET',
		headers
      }
    )
    .then(result => result.json() )
  }

