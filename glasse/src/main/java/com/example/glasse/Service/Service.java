package com.example.glasse.Service;

import com.example.glasse.Entity.Glasse;
import com.example.glasse.Reposetory.Repo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class Service implements ServiceInter{

    @Autowired
    Repo repo;

    @Override
    public void save(Glasse glasse) {
        repo.save(glasse);
    }

    @Override
    public List<Glasse> show() {
        return repo.findAll();
    }

    @Transactional
    @Override
    public void update(Glasse glasse, Integer id) {
        Glasse gl = repo.findById(id).get();
        if(glasse.getModel()!=null)
            gl.setModel(glasse.getModel());
        if(glasse.getPrice()!=0)
            gl.setPrice(glasse.getPrice());
        if(glasse.getType()!=null)
            gl.setType(glasse.getType());
    }

    @Override
    public void delete(Integer id) {
        repo.deleteById(id);
    }

}
