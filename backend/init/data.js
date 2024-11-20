
const sampleProducts = [
    {
        name: "Classic Fit Trouser",
        brand: "Raymond",
        price: 2499,
        description: "A classic-fit formal trouser made with premium fabric for all-day comfort.",
        imageUrl: "https://myraymond.com/cdn/shop/products/RMTS05209-G3_20_281_29.webp?v=1709254764"
    },
    {
      name: "Slim Fit Chinos",
      brand: "Levi's",
      price: 3199,
      description: "Stylish slim-fit chinos, perfect for both casual and semi-formal wear.",
      imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPcjNpG-LEEP_q5wPlq0iv-NX28pD_6x5991AkqYAvXOtp5O5rteJgCCZb4qxQagALxzbrUte6Jna1W7i8Cp90YM6T-sa0N2OiThs1MNL3KdYZyJrFGeP0"
    },
    {
      name: "Cotton Crew Neck T-Shirt",
      brand: "Hanes",
      price: 799,
      description: "Soft cotton crew neck t-shirt, available in a variety of colors.",
      imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7QXceNZ7P3l0n7fkZIY7vGXUKNgGvfwF186N-AylCqyAXeImpgiVV5Qff8nTFcZLxOdxKsENGzWaBdoZKOX4mxD5WYTXCBI5hMdddsrspJN-ybfgqlRgL"
    },
    {
      name: "Graphic Printed T-Shirt",
      brand: "Adidas",
      price: 1499,
      description: "Trendy graphic t-shirt with a comfortable fit, ideal for casual outings.",
      imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQrTy4vLwPvYPVSchAPwljgAbPacv2EC60DpoMb3mrdSJYvDX198y311TvxguKE-g-1fo2aWyoGg1GXOsvWZFDH_zybrGX0HCB-arYZhQWvIBiUMh4pXDc3gQ"
    },
    {
      name: "Linen Blend Casual Shirt",
      brand: "Van Heusen",
      price: 1799,
      description: "Casual linen blend shirt for summer comfort and style.",
      imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMMmSbqDjHEzCEkSv-ucb8I82Hgn9YYrizltXnKJe3fUP8wfdn7FV0ZH-rRtR6et6hLFN5tsFRI9ZiK8WU5RRJS8nss00jNj_sxxtcho0"
    },
    {
      name: "Formal Dress Pants",
      brand: "Peter England",
      price: 2899,
      description: "Elegant formal pants perfect for professional attire.",
      imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQKYIRuTesGM31JzigRvWYABG3E7IZ0ywzU7fZTy5PJX_kRKKK8VyxRtEAbdO__QtWNiPxRFlmPUzno-1Xhta-GsT7CGyIZLTbjHo0QgeI"
    },
    {
      name: "Basic Black T-Shirt",
      brand: "Nike",
      price: 999,
      description: "A simple and comfortable black t-shirt for everyday wear.",
      imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRC-dJ-viXHJyA53YEByogTOI0RuZxSPmQR9Erb0GaUgAipUetXkiKK3QI_IJ9C41sNR8RKK8w9DqSgzrsxYpbVG9e6to_2YZUk0YLaElx6e-wIZ0aiFQBVBg"
    },
    {
      name: "Polo Shirt with Embroidery",
      brand: "Tommy Hilfiger",
      price: 2499,
      description: "Smart polo shirt with stylish embroidery and breathable fabric.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSabUonYTZykeO7VrmU6hv8egIxUDA4-qjBOkiPq4hZJzU8oUdCXaBK57yKkBaT9tGLoKHlPzlNGMBtKUqj_a4uwNjOAbd33hHvTu1nORO9gaIICygppqTl"
    },
    {
      name: "Chino Shorts",
      brand: "H&M",
      price: 1299,
      description: "Comfortable chino shorts, perfect for casual summer days.",
      imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRMKpQmRFG83qe58bsKJfByvg53atgACF5KNsacY9Oy5bdP2sP0aNR2PBu-Zv3T9LhuWjqYX_HT_LFBZDyBA5o613Tn6ypp-78Wyiua7Q"
    },
    {
      name: "Cotton Sweatshirt",
      brand: "Puma",
      price: 1699,
      description: "Cozy cotton sweatshirt, ideal for casual outings or lounging.",
      imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQpfIydT_jC0YuUTAZp6DH5bAKuCrU_86ui211zA5gzal5HVTjJkiSwxZK8y3mGtS67iTqS4408Oc-ZBAFBh7D-Ja-o8J-4oeVsQ7rhUoXOrp8Qed6rZHiG5k"
    },
    {
      name: "Denim Jacket",
      brand: "Wrangler",
      price: 2299,
      description: "Classic denim jacket for a timeless look.",
      imageUrl: "https://i.pinimg.com/736x/ac/cc/78/accc78eb63b5e62ffd68f5b40b7749a7.jpg"
    },
    {
      name: "Khaki Trousers",
      brand: "Dockers",
      price: 1999,
      description: "Comfortable khaki trousers suitable for both casual and formal wear.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FH-dRq3lrZk5VjB8_5-RYtYk3JvbxFWzTg&s"
    },
    // {
    //   name: "Sports Leggings",
    //   brand: "Under Armour",
    //   price: 1599,
    //   description: "High-performance leggings for sports and workout activities.",
    //   imageUrl: "https://www.example.com/images/sports-leggings.jpg"
    // },
    // {
    //   name: "Striped Casual Shirt",
    //   brand: "Gant",
    //   price: 2199,
    //   description: "Trendy striped shirt with a classic fit.",
    //   imageUrl: "https://www.example.com/images/striped-casual-shirt.jpg"
    // },
    // {
    //   name: "Leather Belt",
    //   brand: "BOSS",
    //   price: 1499,
    //   description: "Stylish leather belt to complement formal and casual outfits.",
    //   imageUrl: "https://www.example.com/images/leather-belt.jpg"
    // },
    // {
    //   name: "Jogger Pants",
    //   brand: "Adidas Originals",
    //   price: 1799,
    //   description: "Comfortable jogger pants with a sporty look.",
    //   imageUrl: "https://www.example.com/images/jogger-pants.jpg"
    // },
    // {
    //   name: "Hooded Sweatshirt",
    //   brand: "Reebok",
    //   price: 2099,
    //   description: "Cozy hoodie sweatshirt with a large front pocket.",
    //   imageUrl: "https://www.example.com/images/hooded-sweatshirt.jpg"
    // },
    // {
    //   name: "Flannel Shirt",
    //   brand: "Levi's",
    //   price: 1799,
    //   description: "Warm and stylish flannel shirt for colder days.",
    //   imageUrl: "https://www.example.com/images/flannel-shirt.jpg"
    // },
    // {
    //   name: "Thermal Wear Set",
    //   brand: "Uniqlo",
    //   price: 2599,
    //   description: "Thermal wear set for warmth during the winter season.",
    //   imageUrl: "https://www.example.com/images/thermal-wear.jpg"
    // },
    // {
    //   name: "Athletic Shorts",
    //   brand: "Nike",
    //   price: 1299,
    //   description: "Breathable athletic shorts for comfortable workouts.",
    //   imageUrl: "https://www.example.com/images/athletic-shorts.jpg"
    // },
    // {
    //   name: "Casual Blazer",
    //   brand: "Zara",
    //   price: 3999,
    //   description: "Casual yet stylish blazer for semi-formal occasions.",
    //   imageUrl: "https://www.example.com/images/casual-blazer.jpg"
    // },
    // {
    //   name: "V-Neck T-Shirt",
    //   brand: "H&M",
    //   price: 899,
    //   description: "Classic v-neck t-shirt, perfect for layering or casual wear.",
    //   imageUrl: "https://www.example.com/images/v-neck-tshirt.jpg"
    // },
    // {
    //   name: "Rugby Shirt",
    //   brand: "Nike",
    //   price: 1799,
    //   description: "Sporty rugby shirt with bold stripes and a comfortable fit.",
    //   imageUrl: "https://www.example.com/images/rugby-shirt.jpg"
    // },
    // {
    //   name: "Slim Fit Jeans",
    //   brand: "Levi's",
    //   price: 2599,
    //   description: "Stylish slim-fit jeans, available in various washes.",
    //   imageUrl: "https://www.example.com/images/slim-fit-jeans.jpg"
    // },
    // {
    //   name: "Cotton Socks (Pack of 3)",
    //   brand: "Calvin Klein",
    //   price: 799,
    //   description: "Soft cotton socks available in a convenient 3-pack.",
    //   imageUrl: "https://www.example.com/images/cotton-socks-pack.jpg"
    // },
    // {
    //   name: "Track Pants",
    //   brand: "Adidas",
    //   price: 1799,
    //   description: "Comfortable track pants with a sporty look.",
    //   imageUrl: "https://www.example.com/images/track-pants.jpg"
    // },
    // {
    //   name: "Work Shirt",
    //   brand: "Wrangler",
    //   price: 2299,
    //   description: "Durable work shirt with a tough, comfortable fabric.",
    //   imageUrl: "https://www.example.com/images/work-shirt.jpg"
    // },
    // {
    //   name: "Peacoat Jacket",
    //   brand: "Tommy Hilfiger",
    //   price: 4599,
    //   description: "Timeless peacoat jacket, ideal for colder weather.",
    //   imageUrl: "https://www.example.com/images/peacoat-jacket.jpg"
    // },
    // {
    //   name: "Casual Sneakers",
    //   brand: "Reebok",
    //   price: 2999,
    //   description: "Comfortable and durable casual sneakers for everyday use.",
    //   imageUrl: "https://www.example.com/images/casual-sneakers.jpg"
    // },
    // {
    //   name: "Denim Shorts",
    //   brand: "Levi's",
    //   price: 1899,
    //   description: "Casual denim shorts for warm weather.",
    //   imageUrl: "https://www.example.com/images/denim-shorts.jpg"
    // },
    // {
    //   name: "Puffer Jacket",
    //   brand: "North Face",
    //   price: 5499,
    //   description: "Insulated puffer jacket for extreme cold weather.",
    //   imageUrl: "https://www.example.com/images/puffer-jacket.jpg"
    // },
    // {
    //   name: "Bomber Jacket",
    //   brand: "Superdry",
    //   price: 3999,
    //   description: "Stylish bomber jacket with a comfortable fit.",
    //   imageUrl: "https://www.example.com/images/bomber-jacket.jpg"
    // },
    // {
    //   name: "Slim Fit Sweatpants",
    //   brand: "Nike",
    //   price: 1699,
    //   description: "Comfortable slim-fit sweatpants for casual wear.",
    //   imageUrl: "https://www.example.com/images/slim-fit-sweatpants.jpg"
    // },
    // {
    //   name: "Thermal Hoodie",
    //   brand: "Uniqlo",
    //   price: 2499,
    //   description: "Warm thermal hoodie for the winter season.",
    //   imageUrl: "https://www.example.com/images/thermal-hoodie.jpg"
    // },
    // {
    //   name: "Work Jeans",
    //   brand: "Wrangler",
    //   price: 2499,
    //   description: "Durable work jeans for tough jobs.",
    //   imageUrl: "https://www.example.com/images/work-jeans.jpg"
    // },
    // {
    //   name: "Fleece Jacket",
    //   brand: "Columbia",
    //   price: 2999,
    //   description: "Soft fleece jacket for chilly weather.",
    //   imageUrl: "https://www.example.com/images/fleece-jacket.jpg"
    // },
    // {
    //   name: "Casual Polo Shirt",
    //   brand: "Ralph Lauren",
    //   price: 2199,
    //   description: "Smart casual polo shirt in classic colors.",
    //   imageUrl: "https://www.example.com/images/casual-polo-shirt.jpg"
    // },
    // {
    //   name: "Stretch Fit Jeans",
    //   brand: "Wrangler",
    //   price: 2399,
    //   description: "Stretch fit jeans for enhanced comfort and flexibility.",
    //   imageUrl: "https://www.example.com/images/stretch-fit-jeans.jpg"
    // },
    // {
    //   name: "Fitted T-Shirt",
    //   brand: "Nike",
    //   price: 999,
    //   description: "Fitted t-shirt designed for active wear.",
    //   imageUrl: "https://www.example.com/images/fitted-tshirt.jpg"
    // },
    // {
    //   name: "Button-Down Shirt",
    //   brand: "Jockey",
    //   price: 1999,
    //   description: "Smart button-down shirt for work or casual outings.",
    //   imageUrl: "https://www.example.com/images/button-down-shirt.jpg"
    // },
    // {
    //   name: "Sweat Jacket",
    //   brand: "Adidas",
    //   price: 2699,
    //   description: "Soft sweat jacket for an active lifestyle.",
    //   imageUrl: "https://www.example.com/images/sweat-jacket.jpg"
    // }
];

module.exports = { data: sampleProducts };
