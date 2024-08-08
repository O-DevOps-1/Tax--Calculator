import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ForumService {
    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private PostRepository postRepository;

    public List<Topic> getTopics() {
        return topicRepository.findAll();
    }

    public void createTopic(String title, String content) {
        Topic topic = new Topic(title, content);
        topicRepository.save(topic);
    }

    public Topic getTopic(Long id) {
        return topicRepository.findById(id).orElseThrow();
    }

    public void createPost(Long topicId, String content) {
        Topic topic = getTopic(topicId);
        Post post = new Post(content, topic);
        postRepository.save(post);}}
