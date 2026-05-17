import { prisma } from "./config/prisma.js";

const seedDB = async () => {
  try {
    await prisma.product.deleteMany({});
    console.log("Cleared existing products");

    const products: any = [
      {
        name: "Butter Croissant 100g",
        description: "Flaky and buttery",
        price: 45,
        originalPrice: 50,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png",
        category: "bakery",
        unit: "100g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Organic Quinoa 500g",
        description: "High protein, Gluten-free",
        price: 420,
        originalPrice: 450,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/cxrrgnf12xuhkr4dyhi2.png",
        category: "pantry-staples",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Brown Bread 400g",
        description: "Soft and healthy, Ideal for breakfast",
        price: 35,
        originalPrice: 40,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vy1xa7zovcu22smzapzv.png",
        category: "bakery",
        unit: "400g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Barley 1kg",
        description: "Rich in fiber, Helps digestion",
        price: 140,
        originalPrice: 150,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
        category: "pantry-staples",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Knorr Cup Soup 70g",
        description: "Convenient and tasty",
        price: 30,
        originalPrice: 35,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vnzb2qbwtpab5gnqvx0f.png",
        category: "pantry-staples",
        unit: "70g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Maggi Noodles 280g",
        description: "Instant and easy to cook",
        price: 50,
        originalPrice: 55,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/dsep7owmwvfrukzbslqo.png",
        category: "pantry-staples",
        unit: "280g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Sprite 1.5L",
        description: "Chilled and refreshing, Perfect for celebrations",
        price: 60,
        originalPrice: 75,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/daiglpvgna1dlhjplbve.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Carrot 500g",
        description:
          "Sweet and crunchy, Good for eyesight, Ideal for juices and salads",
        price: 44,
        originalPrice: 50,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/ceqgisupuizyste9aifg.png",
        category: "fruits-vegetables",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Coca-Cola 1.5L",
        description: "Perfect for parties and gatherings, Best served chilled",
        price: 75,
        originalPrice: 80,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/eljxcdud6fduwfim5rdx.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Brown Rice 1kg",
        description: "Whole grain and nutritious",
        price: 110,
        originalPrice: 120,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/dboutcrkdjhoxcvbbqne.png",
        category: "pantry-staples",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Eggs 12 pcs",
        description:
          "Farm fresh, Rich in protein, Ideal for breakfast and baking",
        price: 85,
        originalPrice: 90,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/cnjrpbcnqesqxy1wr30g.png",
        category: "dairy-eggs",
        unit: "12pcs",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Banana 1 kg",
        description:
          "Sweet and ripe, High in potassium, Great for smoothies and snacking",
        price: 45,
        originalPrice: 50,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/dsnmko6gqtyw31okby80.png",
        category: "fruits-vegetables",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Basmati Rice 5kg",
        description: "Long grain and aromatic, Perfect for biryani",
        price: 520,
        originalPrice: 550,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/evuovl2nlwdjukosfz23.png",
        category: "pantry-staples",
        unit: "5kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Onion 500g",
        description: "Fresh and pungent, Perfect for cooking, A kitchen staple",
        price: 45,
        originalPrice: 50,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/wnvtwlm2tphqburhsmyc.png",
        category: "fruits-vegetables",
        unit: "500g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "7 Up 1.5L",
        description: "Refreshing lemon-lime flavor",
        price: 70,
        originalPrice: 76,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/qt1ypzsoqni12ghf2ryp.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Spinach 500g",
        description:
          "Rich in iron, High in vitamins, Perfect for soups and salads",
        price: 15,
        originalPrice: 18,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/bhrtl76sscvmeiq4kchm.png",
        category: "fruits-vegetables",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Orange 1 kg",
        description:
          "Juicy and sweet, Rich in Vitamin C, Perfect for juices and salads",
        price: 75,
        originalPrice: 80,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/r1wxfortw5h12g7egx7k.png",
        category: "fruits-vegetables",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Wheat Flour 5kg",
        description: "Soft and fluffy rotis, Rich in nutrients",
        price: 230,
        originalPrice: 250,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/ooitbkcjcky0gkjmkatb.png",
        category: "pantry-staples",
        unit: "5kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Grapes 500g",
        description:
          "Fresh and juicy, Rich in antioxidants, Perfect for snacking and fruit salads",
        price: 65,
        originalPrice: 70,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/jsmb7caaokhnyci2coga.png",
        category: "fruits-vegetables",
        unit: "500g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Fanta 1.5L",
        description: "Sweet and fizzy",
        price: 65,
        originalPrice: 70,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/nexecd3mgyzrpeun1bee.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Paneer 200g",
        description:
          "Soft and fresh, Rich in protein, Ideal for curries and snacks",
        price: 85,
        originalPrice: 90,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vihqr6wquv57byurvz46.png",
        category: "dairy-eggs",
        unit: "200g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Mango 1 kg",
        description:
          "Sweet and flavorful, Perfect for smoothies and desserts, Rich in Vitamin A",
        price: 140,
        originalPrice: 150,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/nb1mpxuo4fdcik6ey5yj.png",
        category: "fruits-vegetables",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Tomato 1 kg",
        description:
          "Juicy and ripe, Rich in Vitamin C, Perfect for salads and sauces, Farm fresh quality",
        price: 28,
        originalPrice: 30,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/kdbfytxisrjymgy0ubhk.png",
        category: "fruits-vegetables",
        unit: "1kg",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Potato 500g",
        description:
          "Fresh and organic, Rich in carbohydrates, Ideal for curries and fries",
        price: 35,
        originalPrice: 40,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/tzibj2ntsnbn4e0u5kwv.png",
        category: "fruits-vegetables",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Cheese 200g",
        description:
          "Creamy and delicious, Perfect for pizzas and sandwiches, Rich in calcium",
        price: 130,
        originalPrice: 140,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/gek3mmiig3lixlkpxks8.png",
        category: "dairy-eggs",
        unit: "200g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Amul Milk 1L",
        description: "Fresh milk, Rich in calcium",
        price: 55,
        originalPrice: 60,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/ooamzy497lhsj2gjuwby.png",
        category: "dairy-eggs",
        unit: "1L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Apple 1 kg",
        description: "Boosts immunity, Rich in fiber",
        price: 90,
        originalPrice: 100,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/pjt1y6xdo46tluemhf0o.png",
        category: "fruits-vegetables",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
    ];

    await prisma.product.createMany({ data: products });
    console.log(`Created ${products.length} products`);

    console.log("Seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedDB();
