package com.mypafmeal1.meal1.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
public class MealPlan {

    @Id
    private int id;
    private String day;
    private String time;
    private String  meal1;
    private String meal2;
    private String meal3;
    private String meal4;
}
