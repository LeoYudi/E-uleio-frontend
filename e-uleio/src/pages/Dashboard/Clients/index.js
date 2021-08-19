import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import api from '../../../services/api';

function Clients() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      message.loading({
        key: "loading",
        content: "Carregando clientes",
        duration: 9999
      });

      try {
        const response = await api.get('users');
        if (response.status === 200) {
          setUsers(response.data);
          message.destroy("loading");
        }
      } catch (error) {
        console.log(error);
        message.destroy("loading");
      }
    }

    getUsers();
  }, []);

  return (
    users.lenght === 0 ? (
      <p>Nenhum usuário cadastrado!</p>
    ) : (
      users.map(user => (
        <h1 key={user.id}>{user.name}</h1>
      ))
    )
  );
}

export default Clients;