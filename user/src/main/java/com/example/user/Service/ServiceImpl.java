package com.example.user.Service;


import com.example.user.Entity.User;
import com.example.user.Repository.Repo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceImpl implements ServiceInter{

    @Autowired
    private Repo repo;
    @Override
    public void save(User user) {
        repo.save(user);
    }

    @Override
    public List<User> showAll() {
        return repo.findAll();
    }

    @Override
    @Transactional
    public void update(User reqUser, int id) {
        User user = repo.findById(id).get();
        if(reqUser.getName()!=null) user.setName(reqUser.getName());
    }

    @Override
    public void delete(int id) {
        repo.deleteById(id);
    }

    @Override
    public User showById(int id) {
        return repo.findById(id).get();
    }

}
