package com.mypafmeal1.meal1.controller;


import com.mypafmeal1.meal1.model.MealPlan;
import com.mypafmeal1.meal1.repository.MealRepo;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@AllArgsConstructor
public class MealPlanController {

    private MealRepo mealRepo;

    @PostMapping("/meal")
    public MealPlan addmeal(@RequestBody MealPlan mealPlan){
        System.out.println("call add meal");
        return mealRepo.save(mealPlan);

    }
    @GetMapping("/meal")
    public List<MealPlan> getAllMealPlans() {
        return mealRepo.findAll();
    }

//    @GetMapping("/mealbyid/{id}")
//    public ResponseEntity<MealPlan> findTaskByID(@PathVariable int id) {
//        Optional<MealPlan> mealPlanOptional = mealRepo.findById(id);
//        if (mealPlanOptional.isPresent()) {
//            return ResponseEntity.ok(mealPlanOptional.get());
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//    }

    @GetMapping("/meal/{id}")
    public MealPlan findTaskID(@PathVariable int id){
        Optional<MealPlan> mealPlanOptional=mealRepo.findById(id);
        if (mealPlanOptional.isPresent()){
            return mealRepo.findById(id).get();

        }
        return null;
    }
//update meal plan
    @PutMapping("/meal")
    public MealPlan updataTask(@RequestBody MealPlan mealPlanUpdate){
        //get the existing document from db
        //populate new value from request to existing object

       MealPlan existingMeal = mealRepo.findById(mealPlanUpdate.getId()).get();
       existingMeal.setId(mealPlanUpdate.getId());
       existingMeal.setDay(mealPlanUpdate.getDay());
       existingMeal.setMeal1(mealPlanUpdate.getMeal1());
       existingMeal.setMeal2(mealPlanUpdate.getMeal2());
       existingMeal.setMeal3(mealPlanUpdate.getMeal3());
       existingMeal.setMeal4(mealPlanUpdate.getMeal4());

        System.out.println("Meal plan updated");
       return mealRepo.save(existingMeal);
    }

    @DeleteMapping("/meal/{id}")
    public ResponseEntity<Void> deleteWorkout(@PathVariable int id) {
        mealRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }





}
