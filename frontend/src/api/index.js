const url = (process.env.NODE_ENV === 'development') 
    ? 'http://localhost:5000'
	: 'https://calories-burner.herokuapp.com';
		
const headers =  {
'Access-Control-Allow-Origin':'*',
'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

export function getAll () {
	  console.log('Api GET')
      return fetch(url + '/api/exercises', {
          method: 'GET',
		  headers
        }
      )
      .then(result => result.json())
   }

export function get(id) {
    return fetch(url +'/api/exercises/' + id, {
        method: 'GET',
		headers
      }
    )
    .then(result => result.json() )
  }

