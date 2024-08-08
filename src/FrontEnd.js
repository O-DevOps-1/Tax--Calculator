// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Forum from './Forum';

function App() {
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState('');
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        axios.get('/api/forum/topics')
            .then(response => {
                setTopics(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleCreateTopic = () => {
        axios.post('/api/forum/topics', { title: newTopic, content: '' })
            .then(response => {
                setTopics([...topics, response.data]);
                setNewTopic('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleCreateComment = (id) => {
        axios.post(`/api/forum/topics/${id}/comments`, { content: newComment })
            .then(response => {
                const topic = topics.find(topic => topic.id === id);
                topic.comments.push(response.data);
                setTopics([...topics]);
                setNewComment('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1>Forum</h1>
            <ul>
                {topics.map(topic => (
                    <li key={topic.id}>
                        <h2>{topic.title}</h2>
                        <p>{topic.content}</p>
                        <ul>
                            {topic.comments.map(comment => (
                                <li key={comment.id}>{comment.content}</li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            value={newComment}
                            onChange={e => setNewComment(e.target.value)}
                            placeholder="Add a comment"
                        />
                        <button onClick={() => handleCreateComment(topic.id)}>
                                                      <button onClick={() => handleCreateComment(topic.id)}>Add Comment</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTopic}
                onChange={e => setNewTopic(e.target.value)}
                placeholder="Add a new topic"
            />
            <button onClick={handleCreateTopic}>Add Topic</button>
        </div>
    )}}
export default App;
