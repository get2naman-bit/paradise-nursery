import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "./CartSlice.jsx";

const plantCategories = [
  {
    name: "Air-Purifying Plants",
    description: "Freshen up your space with leafy favourites.",
    plants: [
      { id: "ap1", name: "Snake Plant", price: 18, description: "A resilient upright plant that suits bedrooms and offices.", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=800&q=80" },
      { id: "ap2", name: "Peace Lily", price: 22, description: "Elegant white blooms and rich green leaves.", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80" },
      { id: "ap3", name: "Spider Plant", price: 14, description: "A cheerful, arching plant that is easy to grow.", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80" },
      { id: "ap4", name: "Areca Palm", price: 29, description: "A feathery tropical palm for a bright corner.", image: "https://images.unsplash.com/photo-1597055181300-a8b4be4a5f8f?auto=format&fit=crop&w=800&q=80" },
      { id: "ap5", name: "Rubber Plant", price: 26, description: "Glossy leaves make a bold statement indoors.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80" },
      { id: "ap6", name: "Boston Fern", price: 19, description: "Soft, full fronds bring a woodland feel inside.", image: "https://images.unsplash.com/photo-1597055181449-5f7f4a5c3c6b?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    name: "Low-Maintenance Plants",
    description: "Lovely greenery that does not ask for much.",
    plants: [
      { id: "lm1", name: "ZZ Plant", price: 24, description: "Shiny leaves and a forgiving nature make this a favourite.", image: "https://images.unsplash.com/photo-1632207691143-643e2e2a6f0b?auto=format&fit=crop&w=800&q=80" },
      { id: "lm2", name: "Golden Pothos", price: 16, description: "Trailing vines look great on shelves and in hanging pots.", image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=800&q=80" },
      { id: "lm3", name: "Jade Plant", price: 15, description: "A compact succulent with plump, rounded leaves.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80" },
      { id: "lm4", name: "Aloe Vera", price: 13, description: "A sculptural succulent for a sunny windowsill.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" },
      { id: "lm5", name: "Cast Iron Plant", price: 27, description: "A sturdy leafy plant for less-than-perfect corners.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80" },
      { id: "lm6", name: "Chinese Evergreen", price: 21, description: "Patterned foliage adds colour without much fuss.", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    name: "Decorative Plants",
    description: "Statement leaves and beautiful shapes for your home.",
    plants: [
      { id: "dp1", name: "Monstera Deliciosa", price: 32, description: "Iconic split leaves create an instant tropical look.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80" },
      { id: "dp2", name: "Fiddle-Leaf Fig", price: 38, description: "Large violin-shaped leaves make a striking focal point.", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" },
      { id: "dp3", name: "Calathea Orbifolia", price: 30, description: "Rounded leaves with soft silver-green stripes.", image: "https://images.unsplash.com/photo-1597055181449-5f7f4a5c3c6b?auto=format&fit=crop&w=800&q=80" },
      { id: "dp4", name: "Bird of Paradise", price: 45, description: "Broad tropical leaves bring a dramatic silhouette.", image: "https://images.unsplash.com/photo-1597055181300-a8b4be4a5f8f?auto=format&fit=crop&w=800&q=80" },
      { id: "dp5", name: "Philodendron", price: 23, description: "Heart-shaped foliage adds a soft, leafy texture.", image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=800&q=80" },
      { id: "dp6", name: "Parlour Palm", price: 20, description: "A graceful compact palm for a relaxed indoor feel.", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=800&q=80" }
    ]
  }
];

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isAdded = cartItems.some((item) => item.id === plant.id);

  return (
    <article className="plant-card">
      <img className="plant-image" src={plant.image} alt={plant.name} loading="lazy" />
      <div className="plant-card-body">
        <div className="plant-card-heading">
          <h3>{plant.name}</h3>
          <span className="plant-price">${plant.price.toFixed(2)}</span>
        </div>
        <p>{plant.description}</p>
        <button
          className={`button add-button ${isAdded ? "button-added" : ""}`}
          disabled={isAdded}
          onClick={() => dispatch(addToCart(plant))}
        >
          {isAdded ? "Added to Cart ✓" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  return (
    <main className="page-wrap">
      <section className="page-intro">
        <p className="eyebrow">THE PLANT COLLECTION</p>
        <h1>Find your new favourite plant.</h1>
        <p>Explore a curated collection for every space and every level of plant-care experience.</p>
      </section>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading">
            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <span className="category-count">{category.plants.length} plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
          </div>
        </section>
      ))}
    </main>
  );
}
