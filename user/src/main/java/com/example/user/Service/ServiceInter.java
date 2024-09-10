package com.example.user.Service;

import com.example.user.Entity.User;

import java.util.List;

public interface ServiceInter {
    public void save(User user);
    public List<User> showAll();
    public void update(User user, int id);
    public void delete(int id);
    public User showById(int id);

}
