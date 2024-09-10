package com.example.glasse.Service;

import com.example.glasse.Entity.Glasse;

import java.util.List;

public interface ServiceInter {
    public void save(Glasse glasse);
    public List<Glasse> show();
    public void update(Glasse glasse, Integer id);
    public void delete(Integer id);
}
