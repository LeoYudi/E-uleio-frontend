import React, { useEffect, useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../../services/api';
import Input from '../../../components/Input';
import { useProducts } from '../../../contexts/Products';
import './style.css';
import { message } from 'antd';

function Details() {
  const [product, setProduct] = useState('');
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [total_pages, setTotalPages] = useState('');
  const [id_category, setId_Category] = useState('');
  const [id_publisher, setId_Publisher] = useState('');
  const [image, setImage] = useState('');

  const { productId } = useParams();
  const { allProducts } = useProducts();

  function getProductInfo(id) {
    const found = allProducts.find(product => product.id === id);
    setName(found.name);
    setAuthor(found.author);
    setDescription(found.description);
    setTotalPages(found.total_pages);
    setPrice(found.price.toFixed(2));
    setId_Category(found.id_category);
    setId_Publisher(found.id_publisher);
    setImage(found.image);
    setProduct(found);
  }

  useEffect(() => {
    const id = parseInt(productId);
    getProductInfo(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    message.loading({
      key: "editing",
      content: "Atualizando produto",
      duration: 9999
    });

    try {
      const response = await api.put(`products/${product.id}`, {
        id_category,
        id_publisher,
        name,
        author,
        description,
        price,
        total_pages,
        image
      });

      if (response.status === 200) {
        message.destroy("editing");
        message.success("Produto atualizado!");
        return (
          <Redirect to="/dashboard/products" />
        )
      }
    } catch (error) {
      console.log(error);
      message.destroy("editing");
      message.error("Houve um erro, tente novamente");
    }
  }

  return (
    product ? (
      <div className="details-container">
        <Link to="/dashboard/products"><FiArrowLeft /> Voltar</Link>
        <form onSubmit={handleSubmit}>
          <Input
            title="Nome"
            id="name"
            type="text"
            value={name}
            masked={false}
            onChange={e => setName(e.target.value)}
            required
          />
          <Input
            title="Autor"
            id="author"
            type="text"
            value={author}
            masked={false}
            onChange={e => setAuthor(e.target.value)}
            required
          />
          <Input
            title="Preço"
            id="price"
            type="text"
            value={price}
            masked={false}
            onChange={e => setPrice(e.target.value)}
            required
          />
           <Input
            title="Páginas"
            id="pages"
            type="text"
            value={total_pages}
            masked={false}
            onChange={e => setTotalPages(e.target.value)}
            required
          />
          <div className="double-column">
            <div className="column">
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                onChange={e => setId_Category(e.target.value)}
                value={id_category}
                required
              >
                <option value={1}>Literatura</option>
                <option value={2}>HQ</option>
                <option value={3}>Mangá</option>
                <option value={4}>Acadêmico</option>
              </select>
            </div>
            <div className="column">
              <label htmlFor="brand">Editora</label>
              <select
                id="brand"
                onChange={e => setId_Publisher(e.target.value)}
                value={id_publisher}
                required
              >
                <option value={1}>Companhia das Letras</option>
                <option value={2}>Shueisha</option>
                <option value={3}>Pearson</option>
                <option value={4}>DC Comics</option>
              </select>
            </div>
          </div>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
          <button type="submit">Confirmar</button>
        </form>
      </div>
    ) : (
      <p>Carregando...</p>
    )
  );
}

export default Details;