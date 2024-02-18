// all products markup creator
export function markupAllProducts(products) {
  return products
    .map(({ images, brand, category, description, id, title, price }) => {
      return `    <li data-id="${id}">
      <img src="${images[0]}" alt="${title}" />
      <h2>Brand:${brand}</h2>
      <p>Category:${category}</p>
      <p>Model:${title}</p>
      <p>Desc:${description}</p>
      <p>Price:${price}</p>
    </li>`;
    })
    .join("");
}

export const markupProductId = ({
  images,
  brand,
  category,
  description,
  id,
  title,
  price,
}) => {
  return `  <li data-id="${id}">
      <img src="${images[0]}" alt="${title}" />
      <h2>Brand:${brand}</h2>
      <p>Category:${category}</p>
      <p>Model:${title}</p>
      <p>Desc:${description}</p>
      <p>Price:${price}</p>
    </li>`;
};

export const markupProductAdd = ({ description, id, title, price }) => {
  return `  <li data-id="${id}">
            <p>Model:${title}</p>
      <p>Desc:${description}</p>
      <p>Price:${price}</p>
    </li>`;
};
