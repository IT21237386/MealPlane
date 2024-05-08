package com.mypafmeal1.meal1.repository;


import com.mypafmeal1.meal1.model.MealPlan;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepo extends MongoRepository<MealPlan, Integer> {


}
