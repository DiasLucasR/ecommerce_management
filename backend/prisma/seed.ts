import { PrismaClient, ChartType } from '@prisma/client';
import { faker } from '@faker-js/faker';

    console.log('Seeding database...');


const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');


    const categories = [];
    for (let i = 0; i < 10; i++) {
        const category = await prisma.category.create({
            data: {
                name: faker.commerce.department(),
            },
        });
        categories.push(category);
    }

      for (let i = 0; i < 150; i++) {
          const user = await prisma.user.create({
              data: {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                createdAt: faker.date.past(),
                updatedAt: faker.date.recent(),
              },
          });
      }


      const products = [];
    for (let i = 0; i < 1000; i++) {
        const product = await prisma.product.create({
            data: {
                name: faker.commerce.productName(),
                categoryId: categories[Math.floor(Math.random() * categories.length)].id,
                price: parseFloat(faker.commerce.price()),
                stock:  faker.number.int({ min: 0, max: 1000 }), 
                description: faker.commerce.productDescription(),
                createdBy: faker.number.int({ min: 1, max: 100 })
            },
        });
        products.push(product);
    }


    for (const product of products) {
        const logistics = await prisma.logistics.create({
            data: {
              address: faker.location.streetAddress(),
              city: faker.location.city(),
              state: faker.location.state(),
              zipCode: faker.location.zipCode(),
              country: faker.location.country(),
              productId: product.id
            },
          });
    }

    for (let i = 0; i < 1000; i++) {
        const sales = await prisma.sales.create({
            data: {
                totalPrice: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
            },
        });
    }


    for (let i = 0; i < 10000; i++) {
        const salesProduct = await prisma.salesProduct.create({
            data: {
                productId:  faker.number.int({ min: 1, max: 999 }),
                saleId:  faker.number.int({ min: 1, max: 999 }),
                quantity: faker.number.int({ min: 2, max: 8 }),
            },
        });
    }


    const chartData = [
        { endpoint: 'revenue', title: 'Revenue Overview', type: ChartType.line },
        { endpoint: 'sales-by-product-category', title: 'Sales by Product Category', type: ChartType.bar },
        { endpoint: 'sales-by-region', title: 'Sales by Region', type: ChartType.pie },
        { endpoint: 'average-ticket', title: 'Average Ticket Value', type: ChartType.line },
        { endpoint: 'top-products', title: 'Top Selling Products', type: ChartType.bar },
        { endpoint: 'stock-duration', title: 'Average Stock Duration', type: ChartType.line },
        { endpoint: 'customer-recurrence', title: 'Customer Recurrence', type: ChartType.bar },
        { endpoint: 'quarterly-revenue', title: 'Quarterly Revenue Growth', type: ChartType.line },
      ];
    
      for (const chart of chartData) {
        await prisma.chart.create({
          data: {
            endpoint: chart.endpoint,
            title: chart.title,
            type: chart.type,
          },
        });
      }

    console.log('Seeding completed!');
}

main()
    .catch((err) => {
        console.error(err);

    })
    .finally(async () => {
        await prisma.$disconnect();
    });
