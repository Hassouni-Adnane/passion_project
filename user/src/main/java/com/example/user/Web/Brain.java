package com.example.user.Web;


import com.example.user.Entity.User;
import com.example.user.Service.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class Brain {

    @Autowired
    private ServiceImpl serviceImpl;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        serviceImpl.save(user);
        return "New User:"+user.getName();
    }

    @GetMapping("/show")
    public List<User> show(){
        return serviceImpl.showAll();
    }

    @PutMapping("/edit/{id}")
    public void update(@PathVariable("id") int id,@RequestBody User user){
        serviceImpl.update(user, id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") int id){
        serviceImpl.delete(id);
    }

    @GetMapping("show/{id}")
    public User showById(@PathVariable("id") int id){
        return serviceImpl.showById(id);
    }

}
