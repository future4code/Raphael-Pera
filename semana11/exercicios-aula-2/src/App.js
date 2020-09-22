import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputEmpty, setInputEmpty] = useState(false)

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    if (inputValue !== '') {
      // Adiciona um post à lista
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
      };

      const newPostsList = [newPost, ...postsList];

      setPostsList(newPostsList);
      setInputValue('')
      setInputEmpty(false)
    } else {
      setInputEmpty(true)
    }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <label>
          {inputEmpty && <span id={'msgEmpty'}>Por favor informe a mensagem do post </span>}
          <input
            type="text"
            onChange={onChangeInput}
            value={inputValue}
            placeholder={"Novo post"}
          />
        </label>
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {postsList.length <=0 ?
        <h3>Nenhum post!</h3> :
        <h3>{`Quantidade de posts: ${postsList.length}`}</h3>
      }
      <br />
      {postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
};

export default App;
