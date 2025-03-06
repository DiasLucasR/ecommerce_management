import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getAllCharts = async (req: Request, res: Response) => {
    try {
        const charts = await prisma.chart.findMany();
      res.json(charts);
    } catch (error) {
      console.error("Erro ao buscar os gráficos:", error);
      res.status(500).json({ message: "Erro interno ao buscar gráficos" });
    }
  };

  export const dailyWeeklyMonthlyRevenue = async (req: Request, res: Response): Promise<void> => {
    try {
        const { interval = 'daily' } = req.query; // 'daily', 'weekly', or 'monthly'
        const groupBy = {
          daily: 'DATE(createdAt)',
          weekly: " DATE_FORMAT(createdAt, '%Y-%m') ",
          monthly: " YEAR(createdAt) ",
        }[interval as string];
        
        const result = await prisma.$queryRawUnsafe(`
          SELECT 
            ${groupBy} AS title,
            SUM(totalPrice) AS value
          FROM Sales
          GROUP BY ${groupBy}
          ORDER BY title;
        `);
    
        res.json(result);

      } catch (error) {
        res.status(500).json({ error: error });
      }
};

// Função para calcular vendas por categoria de produto
export const salesByProductCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.$queryRaw`
      SELECT c.name AS category, p.name AS product, SUM(sp.quantity) AS totalSales
      FROM SalesProduct sp
      JOIN Product p ON sp.productId = p.id
      JOIN Category c ON p.categoryId = c.id
      GROUP BY c.name, p.name
      ORDER BY totalSales DESC;
    `;

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Função para calcular vendas por região
export const salesByRegion = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.$queryRaw`
      SELECT l.state, SUM(sp.quantity) AS totalSales
      FROM SalesProduct sp
      JOIN Product p ON sp.productId = p.id
      JOIN Logistics l ON p.id = l.productId
      GROUP BY l.state
      ORDER BY totalSales DESC;
    `;

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Função para calcular o ticket médio
export const averageTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.$queryRaw`
      SELECT 
        DATE_FORMAT(createdAt, '%Y-%m-%d') AS date, 
        AVG(totalPrice) AS averageTicket
      FROM Sales
      GROUP BY date
      ORDER BY date;
    `;

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Função para listar os produtos mais vendidos
export const topSellingProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.$queryRaw`
    SELECT p.name, p.stock, SUM(sp.quantity) AS demand
    FROM SalesProduct sp
    JOIN Product p ON sp.productId = p.id
    GROUP BY p.name, p.stock
    ORDER BY demand DESC
    LIMIT 10;
  `;
  
    if(Array.isArray(result)){
      res.json(result?.map(chart => ({
        value: chart.stock,
        value2: chart.demand,
        title: chart.name
      })));
    }else{
      res.json([])
    }

  
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Função para calcular o tempo médio de estoque
export const averageStockTime = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.$queryRaw`
      SELECT p.name, DATEDIFF(NOW(), p.createdAt) AS stockDuration
      FROM Product p;
    `;

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Função para calcular a recorrência de clientes
export const customerRecurrence = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.$queryRaw`
      SELECT
        COUNT(DISTINCT CASE WHEN COUNT(s.id) = 1 THEN s.id END) AS newCustomers,
        COUNT(DISTINCT CASE WHEN COUNT(s.id) > 1 THEN s.id END) AS recurringCustomers
      FROM Sales s
      JOIN SalesProduct sp ON s.id = sp.saleId
      JOIN Product p ON sp.productId = p.id
      GROUP BY s.id;
    `;

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Função para calcular o crescimento de receita trimestral
export const quarterlyRevenueGrowth = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await prisma.$queryRaw`
      SELECT
        CONCAT(YEAR(createdAt), '-Q', QUARTER(createdAt)) AS quarter,
        SUM(totalPrice) AS revenue
      FROM Sales
      GROUP BY quarter
      ORDER BY quarter;
    `;

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};