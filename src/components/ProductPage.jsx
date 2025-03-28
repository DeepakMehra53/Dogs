import Product1 from '../assets/Product1.webp'
import Product2 from '../assets/Product2.webp'
import Product3 from '../assets/Product3.webp'
import Product4 from '../assets/Product4.webp'
import Product5 from '../assets/Product5.webp'
import Product6 from '../assets/Product6.webp'

export const ProductPage = () =>{
     const products = [
       {
         id: 1,
         name: "Webbing dog collar personalized",
         image: Product1,
         desc: "Webbing dog collar personalized, dog collar boy, dog collar girl, dog collar engraved, tribal dog collar, pattern dog collar, 1' width",
         Price: 21,
       },
       {
         id: 2,
         name: "Custom Slow Feeder Dog Bowl",
         image: Product2,
         desc: "Make mealtime fun, engaging, and slow-paced with our Custom Slowfeeder Dog Bowl, uniquely designed with your dog’s name as the feeding obstacles! This one-of-a-kind feeder combines personalization with practical benefits, turning every meal into a stimulating challenge.",
         Price: 90,
       },
       {
         id: 3,
         name: "Dog hair colors headband",
         image: Product3,
         desc: "Dog hair colors headband, bow headband, Dog Hair Bow, Classic Dog Hair Bows, headband, for dogs",
         Price: 20,
       },
       {
         id: 4,
         name: "Blue Plaid Dog Bandana",
         image: Product4,
         desc: "ersonalized Blue Plaid Dog Bandana with Embroidered Name, Custom Flannel Pet Scarf, Winter Plaid Dog Accessories, Holiday Cozy Dog Apparel",
         Price: 50,
       },
       {
         id: 5,
         name: "The Hotdog Sausage Dog Lead ",
         image: Product5,
         desc: "The Hotdog Sausage Dog Lead - Handmade in the UK - Fun Dog Leash - Perfect for Dachshunds, Puppies and Small Dogs - Gift for Dogs",
         Price: 110,
       },
       {
         id: 6,
         name: "Personalized Pet Name Blanket for Dog",
         image: Product6,
         desc: "Personalized Pet Name Blanket for Dog, Custom Name Dog Blanket, Thick Fleece Pet Blanket, Paw Print Blanket, Embroiderd Dog Name Blanket",
         Price:100
       },
     ];
    return (
      <div className="container mx-auto p-5">
        <h2 className="text-6xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-blue-300 shadow-lg rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-2">{product.name}</h3>
              <p className="text-fuchsia-100 text-xl font-medium">{product.desc}</p>
              <p className='text-green-800 font-extrabold text-4xl'>${product.Price}</p>
              <button className='rounded-2xl bg-amber-600 p-3 mt-2 font-bold' onClick={()=>{console.log("Good")}}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
}