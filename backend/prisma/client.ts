import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Função para criar uma categoria
async function createCategory(name: string) {
  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  return category;
}

// Função para criar um produto
async function createProduct(name: string, price: number, stock: number, description: string, categoryId: number, userId: number) {
  const product = await prisma.product.create({
    data: {
      name,
      price,
      stock,
      description,
      categoryId,
      userId,
    },
  });
  return product;
}

// Função para criar um logístico
async function createLogistics(address: string, city: string, state: string, zipCode: string, country: string, productId: number) {
  const logistics = await prisma.logistics.create({
    data: {
      address,
      city,
      state,
      zipCode,
      country,
      productId,
    },
  });
  return logistics;
}

// Função para criar uma descrição de produto
async function createDescription(productName: string, details: string) {
  const description = await prisma.description.create({
    data: {
      productName,
      details,
    },
  });
  return description;
}

// Função para criar usuários em massa
async function createUsers() {
  const users = await Promise.all(
    Array.from({ length: 100 }).map(() =>
      prisma.user.create({
        data: {
          name: faker.name.findName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        },
      })
    )
  );
  return users;
}

// Função para criar categorias em massa
async function createCategories() {
  const categories = await Promise.all(
    Array.from({ length: 100 }).map(() =>
      createCategory(faker.commerce.department())
    )
  );
  return categories;
}

// Função para criar produtos em massa
async function createProducts(categories: any[], users: any[]) {
  const products = await Promise.all(
    Array.from({ length: 100 }).map(() =>
      createProduct(
        faker.commerce.productName(),
        parseFloat(faker.commerce.price()),
        faker.datatype.number({ min: 1, max: 100 }),
        faker.commerce.productDescription(),
        categories[faker.datatype.number({ min: 0, max: categories.length - 1 })].id,
        users[faker.datatype.number({ min: 0, max: users.length - 1 })].id
      )
    )
  );
  return products;
}

// Função para criar logísticas em massa
async function createLogisticsForProducts(products: any[]) {
  const logistics = await Promise.all(
    Array.from({ length: 100 }).map(() =>
      createLogistics(
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.state(),
        faker.address.zipCode(),
        faker.address.country(),
        products[faker.datatype.number({ min: 0, max: products.length - 1 })].id
      )
    )
  );
  return logistics;
}

// Função para criar descrições em massa
async function createDescriptionsForProducts(products: any[]) {
  const descriptions = await Promise.all(
    Array.from({ length: 100 }).map(() =>
      createDescription(
        products[faker.datatype.number({ min: 0, max: products.length - 1 })].name,
        faker.lorem.sentence()
      )
    )
  );
  return descriptions;
}

// Função principal para rodar todas as funções
async function main() {
  // Criando usuários
  const users = await createUsers();

  // Criando categorias
  const categories = await createCategories();

  // Criando produtos
  const products = await createProducts(categories, users);

  // Criando logísticas para produtos
  const logistics = await createLogisticsForProducts(products);

  // Criando descrições para os produtos
  const descriptions = await createDescriptionsForProducts(products);

  console.log('Data created successfully!');
  console.log({ users, categories, products, logistics, descriptions });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
