import axios from 'axios'

export async function getAll (url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        //.then(res => res.json())
        .then(data => {
            resolve(data);
        });
    });
}



export async function getOne(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        });
        
    })
}


export function paginate(products) {
    const itemsPerPage = 8;
    const numberOfPages = Math.ceil(products.length / itemsPerPage);
    // const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    //   return products.splice(0, itemsPerPage);
    // });
    const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return products.slice(start, start + itemsPerPage);
    });
    return newProducts;
  }
  