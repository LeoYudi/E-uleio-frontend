import React, { useState } from 'react';
import api from '../../services/api';
import { message, Modal } from 'antd';
import Input from '../Input';
import './styles.css';
import { FiPlus } from 'react-icons/fi';

function AddProduct() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [id_publisher, setId_Publisher] = useState('');
  const [id_category, setId_Category] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [total_pages, setTotalPages] = useState('');
  const [image, setImage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    message.loading({
      key: "adding",
      content: "Adicionando produto",
      duration: 9999
    });

    try {
      const response = await api.post(`products`, {
        id_publisher,
        id_category,
        author,
        name,
        description,
        price,
        total_pages,
        image
      });

      if (response.status === 201) {
        message.destroy("adding");
        setIsVisible(false);
        message.success("Produto adicionado!");
      }
    } catch (error) {
      console.log(error);
      message.destroy("adding");
      message.error("Houve um erro, tente novamente");
    }
  }

  return (
    <div className="modal-container">
      <button type="button" onClick={() => setIsVisible(true)}>
        <FiPlus />
      </button>
      <Modal
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
        centered={true}
        footer={null}
      >
        <div className="add-product-container">
          <h2>Adicionar produto</h2>
          <form onSubmit={handleSubmit}>

            <Input
              label={'Título'}
              id={'titulo'}
              title="Título"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              label={'Autor'}
              id={'author'}
              title="Autor"
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              required
            />
            <Input
              label={'Preço'}
              id={'price'}
              title="Preço"
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
            />
            <Input
              label={'Número de páginas'}
              id={'pages'}
              title="Páginas"
              type="text"
              value={total_pages}
              onChange={e => setTotalPages(e.target.value)}
            />
            
            <div className="double-column">
              <div className="column">
                <label htmlFor="category">Categoria</label>
                <select
                  id="category"
                  value={id_category}
                  onChange={e => setId_Category(e.target.value)}
                  required
                >
                  <option value={1}>Literatura</option>
                  <option value={2}>Mangá</option>
                  {/* <option value={3}>Mangá</option>
                  <option value={4}>Acadêmico</option> */}
                </select>
              </div>
              <div className="column">
                <label htmlFor="publisher">Editora</label>
                <select
                  id="publisher"
                  value={id_publisher}
                  onChange={e => setId_Publisher(e.target.value)}
                  required
                >
                  <option value={1}>Companhia das Letras</option>
                  <option value={2}>Suma</option>
                  <option value={3}>Aleph</option>
                  <option value={4}>Record</option>
                  <option value={5}>Panini</option>
                  <option value={6}>Devir Livraria</option>
                  <option value={7}>JBC</option>
                </select>
              </div>
            </div>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              rows="10"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />

            <Input
              label={'Imagem'}
              id={'image'}
              title="Imagem"
              type="file"
              value={image}
              onChange={e => setImage(e.target.value)}
              required
            />
            {/* <label className="image-input-label" htmlFor="image">Imagem</label>
            <input className="image-input" id="image" type="file" value={image} onChange={e => setImage(e.target.value)} required /> */}
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default AddProduct;