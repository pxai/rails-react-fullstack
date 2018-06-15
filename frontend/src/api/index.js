const url = (process.env.NODE_ENV === 'development') 
    ? 'http://localhost:3000'
	: 'https://calories-burner.herokuapp.com';
		
const headers =  {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
};

export function getAll () {
	  console.log('Api GET')
      return fetch(url + '/exercises', {
          method: 'GET',
		  headers
        }
      )
      .then(result => result.json())
   }

export function get(id) {
    return fetch(url +'/exercises/' + id, {
        method: 'GET',
		headers
      }
    )
    .then(result => result.json() )
  }

