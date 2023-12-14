import './Task2.css';
import { useState } from 'react';
import React from 'react';
import { ReactDOM } from 'react';


function Task2() {
    const [posts, setPosts] = useState([]);

    const postAdd = (fio, text) => {
        const newPost = {fio, text}
        setPosts({...posts, newPost})
    }
  
    return (
      <>
        <div className='Task2'>
            <div className='Grid'>
                <div id="Posts">
                    <Post fio={"Екатерина Шульман"} text={"Программа Статус"}></Post>
                    <Post fio={"Владимир Соловьев"} text={"Соловьев Live"}></Post>
                    <Post fio={"Григорий Азаренок"} text={"СТВ. Беларусь"}></Post>
                    <Post fio={"Илья Варламов"} text={"ЧП"}></Post>
                    <PostList posts={posts} postAdd={postAdd()}></PostList>
                </div>
            </div>
        </div>
            <p className='delimiter'></p>
      </>
    );
}

const PostList = (posts, postAdd) => {
    const [fio, setFio] = useState('');
    const [text, setText] = useState('');

    return (
        <>
            <div className='post-form'>
                <form>
                    <p>Добавить пост:</p>
                    <input type="text" placeholder='username' value={fio} onChange={e => setFio(e.target.value)}/>
                    <input type="text" placeholder='input text' value={text} onChange={e => setText(e.target.value)}/>
                    <button onClick={() => {postAdd(fio, text)}}>Добавить</button>
                </form>
            </div>
            
            <div>{posts.map(post => <div>123</div>)}</div>
        </>
    )

}

const Post = (props) => {
    const [isLiked, setLike] = useState({state: true, color: 'black'});

    return (
        <div className='post'>  
            <div>
                {props.fio}
            </div>

            <div>
                {props.text}
            </div>
            
            <div id='like' onClick={() => {setLike(isLiked.state ? {state: false, color: 'red'} : {state: true, color: 'black'})}} style={{color: isLiked.color}}>
                ❤
                {console.log(isLiked)}
            </div>
        </div>
    )
}

  
  export default Task2;
  