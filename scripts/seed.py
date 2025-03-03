from faker import Faker
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base
import random
from datetime import datetime, timedelta

# Configuração do Faker e SQLAlchemy
fake = Faker()
Base = declarative_base()

# Configurar o banco de dados (MySQL)
DATABASE_URL = "mysql+pymysql://username:password@localhost:3306/your_database"
engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
session = Session()

# Definir os modelos
class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255))
    email = Column(String(255), unique=True)
    password = Column(String(255))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, onupdate=datetime.utcnow)

class Category(Base):
    __tablename__ = "category"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), unique=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, onupdate=datetime.utcnow)

class Product(Base):
    __tablename__ = "product"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255))
    price = Column(Float)
    stock = Column(Integer)
    description = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, onupdate=datetime.utcnow)
    category_id = Column(Integer, ForeignKey("category.id"))
    created_by = Column(Integer, ForeignKey("user.id"))

class Logistics(Base):
    __tablename__ = "logistics"
    id = Column(Integer, primary_key=True, autoincrement=True)
    address = Column(String(255))
    city = Column(String(255))
    state = Column(String(255))
    zip_code = Column(String(20))
    country = Column(String(255))
    product_id = Column(Integer, ForeignKey("product.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, onupdate=datetime.utcnow)

# Criar as tabelas no banco de dados
Base.metadata.create_all(engine)

# Função de seeding
def seed_database():
    print("Seeding database...")

    # Seed Categories
    categories = []
    for _ in range(10):
        category = Category(name=fake.unique.word())
        session.add(category)
        categories.append(category)
    session.commit()

    # Seed Users
    users = []
    for _ in range(150):
        user = User(
            name=fake.name(),
            email=fake.unique.email(),
            password=fake.password(),
            created_at=fake.date_time_between(start_date="-2y", end_date="now"),
            updated_at=fake.date_time_this_year(),
        )
        session.add(user)
        users.append(user)
    session.commit()

    # Seed Products
    products = []
    for _ in range(1000):
        product = Product(
            name=fake.unique.word(),
            price=round(random.uniform(10.0, 500.0), 2),
            stock=random.randint(0, 1000),
            description=fake.text(max_nb_chars=100),
            category_id=random.choice(categories).id,
            created_by=random.choice(users).id,
        )
        session.add(product)
        products.append(product)
    session.commit()

    # Seed Logistics
    for product in products:
        logistics = Logistics(
            address=fake.street_address(),
            city=fake.city(),
            state=fake.state(),
            zip_code=fake.zipcode(),
            country=fake.country(),
            product_id=product.id,
        )
        session.add(logistics)
    session.commit()

    print("Seeding completed!")

# Executar o seeding
if __name__ == "__main__":
    seed_database()
