export const getAllProducts = () => {
  return [
    {
      id: 'FOOD-001',
      slug: 'chicken-burger',
      name: 'Chicken Burger',
      category: 'Burgers',
      categorySlug: 'burgers',
      price: 25_000,
      stock: 50,
      imageUrl: 'https://images.unsplash.com/photo-1585238340764-c6f1f6fe1a6d?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A delicious chicken patty served with fresh lettuce, tomatoes, and a special sauce in a soft bun.'
    },
    {
      id: 'FOOD-002',
      slug: 'beef-burger',
      name: 'Beef Burger',
      category: 'Burgers',
      categorySlug: 'burgers',
      price: 30_000,
      stock: 30,
      imageUrl: 'https://images.unsplash.com/photo-1683882330182-eb8f64d7231c?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Juicy beef patty with melted cheese, pickles, and onions on a toasted bun.'
    },
    {
      id: 'FOOD-003',
      slug: 'margherita-pizza',
      name: 'Margherita Pizza',
      category: 'Pizzas',
      categorySlug: 'pizzas',
      price: 55_000,
      stock: 40,
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Classic pizza with tomato sauce, fresh mozzarella, and basil leaves.'
    },
    {
      id: 'FOOD-004',
      slug: 'pepperoni-pizza',
      name: 'Pepperoni Pizza',
      category: 'Pizzas',
      categorySlug: 'pizzas',
      price: 60_000,
      stock: 20,
      imageUrl: 'https://images.unsplash.com/photo-1564128442383-9201fcc740eb?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A pizza topped with savory pepperoni, melted mozzarella, and tomato sauce.'
    },
    {
      id: 'FOOD-005',
      slug: 'vegetable-salad',
      name: 'Vegetable Salad',
      category: 'Salads',
      categorySlug: 'salads',
      price: 20_000,
      stock: 100,
      imageUrl: 'https://images.unsplash.com/photo-1632992468854-7b1d83134bc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Fresh mixed vegetables tossed with a light vinaigrette dressing.'
    },
    {
      id: 'FOOD-006',
      slug: 'caesar-salad',
      name: 'Caesar Salad',
      category: 'Salads',
      categorySlug: 'salads',
      price: 22_000,
      stock: 60,
      imageUrl: 'https://images.unsplash.com/photo-1669283714145-f97867f6c238?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Crispy romaine lettuce, crunchy croutons, parmesan cheese, and Caesar dressing.'
    },
    {
      id: 'FOOD-007',
      slug: 'iced-coffee',
      name: 'Iced Coffee',
      category: 'Beverages',
      categorySlug: 'beverages',
      price: 15_000,
      stock: 80,
      imageUrl: 'https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A refreshing blend of iced coffee with a splash of milk, perfect for hot days.'
    },
    {
      id: 'FOOD-008',
      slug: 'lemonade',
      name: 'Lemonade',
      category: 'Beverages',
      categorySlug: 'beverages',
      price: 12_000,
      stock: 120,
      imageUrl: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Freshly squeezed lemonade with a hint of mint and sweetness, served chilled.'
    },
    {
      id: 'FOOD-009',
      slug: 'fruit-smoothie',
      name: 'Fruit Smoothie',
      category: 'Beverages',
      categorySlug: 'beverages',
      price: 18_000,
      stock: 75,
      imageUrl: 'https://images.unsplash.com/photo-1518563419477-33f2294a73c1?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A delicious blend of fresh fruits and yogurt for a healthy and refreshing drink.'
    },
    {
      id: 'FOOD-010',
      slug: 'green-tea',
      name: 'Green Tea',
      category: 'Beverages',
      categorySlug: 'beverages',
      price: 10_000,
      stock: 150,
      imageUrl: 'https://images.unsplash.com/photo-1701520839071-55bdfe64c5ed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A refreshing cup of green tea, perfect for calming and rejuvenating your senses.'
    }
  ]
}
