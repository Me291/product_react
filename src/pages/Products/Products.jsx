import { useEffect, useState, useRef, useTransition } from 'react';
import { getAllProducts } from '../../services/getAllProducts';
import ProductList from '../../components/ProductList/ProductList';
import Navbar from '../../components/Navbar/Navbar';
import RadioButton from '../../components/RadioButton/RadioButton';
import getAllProductCategories from '../../services/getAllProductCategories';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [RadioButtonOpts, setRadioButtonOpts] = useState([
    { label: 'All', value: 'all' },
  ]);

  const originalProducts = useRef([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let allProducts = await getAllProducts();
      allProducts = allProducts.length > 0 ? allProducts : [];
      originalProducts.current = allProducts;
      setProducts(allProducts);
    };

    const fetchCategories = async () => {
      const allCategories = await getAllProductCategories();
      const newCategories = allCategories
        .map((cat) => ({ label: cat.name, value: cat.slug }))
        .filter(
          (newCat) =>
            !RadioButtonOpts.some((existingCat) => existingCat.value === newCat.value)
        );
      setRadioButtonOpts((prevOpts) => [...prevOpts, ...newCategories]);
      setCategories(allCategories);
    };

    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    startTransition(() => {
      const filtered = originalProducts.current.filter((product) => {
        const matchedCategory =
          selectedCategory === 'all' || product.categorySlug === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchedCategory && matchesSearch;
      });
      setProducts(filtered);
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar onSearchChange={handleSearchChange} />

      <div className="px-4 py-6 gap-4 mt-6 flex-wrap">
        <h3 className="text-2xl font-semibold text-gray-800">Filter Products</h3>
        <div className="flex gap-4 flex-wrap">
          <RadioButton
            options={RadioButtonOpts}
            defaultValue={'all'}
            onChange={handleCategoryChange}
            className="flex gap-4"
          />
        </div>
      </div>

      <section className="container px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
          {isPending ? (
            <div className="w-full h-64 flex justify-center items-center">
              <div className="spinner-border text-blue-500"></div> {/* Add your loading spinner here */}
            </div>
          ) : products.length === 0 ? (
            <p className="text-xl text-center text-gray-500">No products found</p>
          ) : (
            <ProductList products={products} isPending={isPending} />
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
