import React, { useState, useEffect } from "react";
import productData from "../data/mockProducts.json";
import ProductCard from "../components/ProductCard";
import { RootState } from "../features/store"; // Adjust the path
import { useSelector } from "react-redux";

const TraderJoesProducts = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = productData;
        setProducts(data.data.products.items);
        setFilteredProducts(data.data.products.items);
        setTotalProducts(data.data.products.items.length);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const lowercaseSearch = searchTerm.toLowerCase();
      const filtered = products.filter((product) => {
        // Search in title
        const titleMatch = product.item_title
          ?.toLowerCase()
          .includes(lowercaseSearch);

        // Search in tags
        const tagsMatch = product.fun_tags?.some((tag) =>
          tag.toLowerCase().includes(lowercaseSearch)
        );

        // Search in characteristics
        const characteristicsMatch = product.item_characteristics?.some(
          (characteristic) =>
            characteristic.toLowerCase().includes(lowercaseSearch)
        );

        return titleMatch || tagsMatch || characteristicsMatch;
      });

      setFilteredProducts(filtered);
    }

    // Reset to first page when search changes
    setCurrentPage(1);
    setTotalProducts(filteredProducts.length);
  }, [searchTerm, products]);

  // Update total count when filtered products change
  useEffect(() => {
    setTotalProducts(filteredProducts.length);
  }, [filteredProducts]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  if (loading) return <div>Loading Trader Joe's products...</div>;
  if (error) return <div>Error: {error}</div>;

  // Calculate pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="trader-joes-container">
      <h1>Trader Joe's Products</h1>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search products by name, tags, or characteristics..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="controls-wrapper">
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Items per page: </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="items-dropdown"
          >
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="page-info">
          {filteredProducts.length > 0
            ? `Showing ${indexOfFirstProduct + 1}-${Math.min(
                indexOfLastProduct,
                filteredProducts.length
              )} of ${filteredProducts.length} products`
            : "No products found"}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <div className="products-grid">
            {currentProducts.map((product) => (
              <ProductCard key={product.sku} {...product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-button"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                &laquo; First
              </button>
              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt; Previous
              </button>

              <div className="page-numbers">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  // Show pages around current page
                  let pageToShow;
                  if (totalPages <= 5) {
                    pageToShow = i + 1;
                  } else if (currentPage <= 3) {
                    pageToShow = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageToShow = totalPages - 4 + i;
                  } else {
                    pageToShow = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageToShow}
                      className={`pagination-button ${
                        currentPage === pageToShow ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(pageToShow)}
                    >
                      {pageToShow}
                    </button>
                  );
                })}
              </div>

              <button
                className="pagination-button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next &gt;
              </button>
              <button
                className="pagination-button"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last &raquo;
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="no-results">
          <p>No products match your search criteria.</p>
          <button onClick={clearSearch} className="reset-search-button">
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default TraderJoesProducts;
