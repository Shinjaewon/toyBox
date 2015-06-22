package com.toyBox.service;

import org.springframework.stereotype.Component;

/**
 * Created by 201210098 on 2015-04-09.
 */


public interface ToyBoxSerivce {
    String getTemperature(String data);

    String getHumidity(String data);

    String getDust(String data);

    String getElevator(String data);
}
