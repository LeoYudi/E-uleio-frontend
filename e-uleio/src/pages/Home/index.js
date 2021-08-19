import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { FiSearch } from 'react-icons/fi';
import { RiHeadphoneFill, RiKeyboardBoxFill, RiMouseFill } from 'react-icons/ri';
import api from '../../services/api'
import ProductCard from '../../components/ProductCard';
import './style.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [activeFilter, setActiveFilter] = useState('');
  const [search, setSearch] = useState('');
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  async function getProducts(page, limit, category) {
    message.loading({
      key: "loadingProducts",
      content: "Carregando produtos",
      duration: 9999
    });

    const response = await api.get('products/', {
      params: {
        page: page,
        limit: limit,
        category: category
      }
    });

    try {
      if (response.status === 200) {
        message.destroy("loadingProducts");
        if (page === 1) {
          setProducts(response.data);
        } else {
          setProducts(products.concat(response.data));
        }
      }
      if (response.data.length < limit) {
        setHasMoreProducts(false);
      } else {
        setHasMoreProducts(true);
      }
    } catch (error) {
      message.destroy("loadingProducts");
      message.error("Houve um erro ao carregar os produtos");
      console.log(error);
      setHasMoreProducts(false);
    }
  }

  function filterByCategory(category) {
    setPage(1);

    if (category === activeFilter) {
      setActiveFilter('');
      getProducts(1, limit);
    } else {
      setActiveFilter(category);
      getProducts(1, limit, category);
    }
  }

  function searching() {
    message.loading({
      key: "searchingProducts",
      content: "Pesquisando produtos...",
      duration: 9999
    });

    let tempSearchedProducts = [];

    if (search !== '') {
      products.forEach(product => {
        if ((product.name).toLowerCase().includes(search.toLowerCase())) {
          tempSearchedProducts.push(product);
        } else { }
      });
    } else {
      setPage(1);
      getProducts(1, limit);
    }
    message.destroy("searchingProducts");
    setProducts(tempSearchedProducts);
  }

  function loadMoreProducts() {
    const newPage = page + 1;
    getProducts(newPage, limit);
    setPage(newPage);
  }

  useEffect(() => {
    getProducts(page, limit);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">

      {/* <section className="filters">
        <button
          type="button"
          className={activeFilter === 'Literatura' ? 'active-button' : ''}
          onClick={() => filterByCategory('literatura')}
        >
          <RiHeadphoneFill />
          Literatura
        </button>
        <button
          type="button"
          className={activeFilter === 'Mangá' ? 'active-button' : ''}
          onClick={() => filterByCategory('manga')}
        >
          <RiMouseFill />
          Mangá
        </button>
        <button
          type="button"
          className={activeFilter === 'HQ' ? 'active-button' : ''}
          onClick={() => filterByCategory('hq')}
        >
          <RiKeyboardBoxFill />
          HQ
        </button>
      </section> */}

      <section className="search">
        <span>{products.length} produtos encontrados.</span>
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar..."
            onChange={e => setSearch(e.target.value)}
          />
          <button type="button" onClick={searching}>
            <FiSearch />
          </button>
        </div>
      </section>

      <section className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <div className="load-more">
        {hasMoreProducts ? (
          <button type="button" onClick={loadMoreProducts}>
            Carregar mais produtos
          </button>
        ) : (
          <span>Fim!</span>
        )}
      </div>
    </div>
  );
}

export default Home;
