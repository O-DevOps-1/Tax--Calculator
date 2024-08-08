import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class ForumController {
    @Autowired
    private ForumService forumService;

    @GetMapping("/forum")
    public String getForum(Model model) {
        List<Topic> topics = forumService.getTopics();
        model.addAttribute("topics", topics);
        return "forum" ;}

    @PostMapping("/forum")
    public String createTopic(@RequestParam("title") String title, @RequestParam("content") String content) {
        forumService.createTopic(title, content);
        return "redirect:/forum";
    }

    @GetMapping("/topic/{id}")
    public String getTopic(@PathVariable("id") Long id, Model model) {
        Topic topic = forumService.getTopic(id);
        model.addAttribute("topic", topic);
        return "topic";
    }

    @PostMapping("/topic/{id}")
    public String createPost(@PathVariable("id") Long id, @RequestParam("content") String content) {
        forumService.createPost(id, content);
        return "redirect:/topic/" + id;
    }}}
