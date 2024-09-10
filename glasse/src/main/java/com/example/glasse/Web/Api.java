package com.example.glasse.Web;

import com.example.glasse.Entity.Glasse;
import com.example.glasse.Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/glasses")
@CrossOrigin
public class Api {

    @Autowired
    private Service service;

    @PostMapping("/add")
    public String add(@RequestBody Glasse glasse){
        service.save(glasse);
        return "New Glasses added with ID: " + glasse.getId();
    }

    @GetMapping("/show")
    public List<Glasse> show(){
        return service.show();
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Integer id) {
        service.delete(id);
        return "Glasses with ID " + id + " deleted";
    }
}
