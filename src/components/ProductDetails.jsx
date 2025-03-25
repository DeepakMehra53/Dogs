const products = [
  {
    id: 1,
    name: "Webbing dog collar personalized",
    image: "Product1.jpg",
    desc: "Webbing dog collar personalized, dog collar boy, dog collar girl, dog collar engraved, tribal dog collar, pattern dog collar, 1' width",
    price: 21,
  },
  {
    id: 2,
    name: "Custom Slow Feeder Dog Bowl",
    image: "Product2.jpg",
    desc: "Make mealtime fun, engaging, and slow-paced with our Custom Slowfeeder Dog Bowl, uniquely designed with your dog’s name as the feeding obstacles! This one-of-a-kind feeder combines personalization with practical benefits, turning every meal into a stimulating challenge.",
    price: 90,
  },
  {
    id: 3,
    name: "Dog hair colors headband",
    image: "Product3.jpg",
    desc: "Dog hair colors headband, bow headband, Dog Hair Bow, Classic Dog Hair Bows, headband, for dogs",
    price: 20,
  },
  {
    id: 4,
    name: "Blue Plaid Dog Bandana",
    image: "Product4.jpg",
    desc: "Personalized Blue Plaid Dog Bandana with Embroidered Name, Custom Flannel Pet Scarf, Winter Plaid Dog Accessories, Holiday Cozy Dog Apparel",
    price: 50,
  },
  {
    id: 5,
    name: "The Hotdog Sausage Dog Lead",
    image: "Product5.jpg",
    desc: "The Hotdog Sausage Dog Lead - Handmade in the UK - Fun Dog Leash - Perfect for Dachshunds, Puppies and Small Dogs - Gift for Dogs",
    price: 110,
  },
  {
    id: 6,
    name: "Personalized Pet Name Blanket for Dog",
    image: "Product6.jpg",
    desc: "Personalized Pet Name Blanket for Dog, Custom Name Dog Blanket, Thick Fleece Pet Blanket, Paw Print Blanket, Embroidered Dog Name Blanket",
    price: 100,
  },
];
export const ProductDetails = () =>{
    return (
      <div>
        <div className="product-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h2 className="product-title">{product.name}</h2>
                <p className="price">${product.price}</p>
                <p className="description">{product.desc}</p>
                <a href="checkout.html" className="buy-button">
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quality & Safety Section */}
        <section className="bg-light py-5 quality-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 fade-in">
                <h2 className="display-4 mb-4">Quality & Safety First</h2>
                <p className="lead mb-4">
                  All our products are crafted with premium, pet-safe materials
                  and undergo rigorous testing to ensure the highest standards
                  of quality and durability.
                </p>
                <ul className="list-unstyled feature-list">
                  <li className="slide-in">
                    <i className="bi bi-check-circle-fill text-success"></i>{" "}
                    Pet-safe materials
                  </li>
                  <li className="slide-in">
                    <i className="bi bi-check-circle-fill text-success"></i>{" "}
                    Durability tested
                  </li>
                  <li className="slide-in">
                    <i className="bi bi-check-circle-fill text-success"></i>{" "}
                    Comfort focused
                  </li>
                  <li className="slide-in">
                    <i className="bi bi-check-circle-fill text-success"></i> Vet
                    approved
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="quality-image-container bounce-in">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
                    alt="Happy cat with quality products"
                    className="img-fluid rounded-circle shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}