package com.toyBox.mapper;


import org.apache.ibatis.annotations.Select;

/**
 * Created by 201210098 on 2015-04-09.
 */
public interface TemperatureMapper  {
    @Select("SELECT data FROM  temperature_1 order by rand() limit 1")
    String getTemperature();

    @Select("SELECT data FROM  temperature_2 order by rand() limit 1")
    String getTemperature2();

    @Select("SELECT data FROM  temperature_3 order by rand() limit 1")
    String getTemperature3();

    @Select("SELECT data FROM  temperature_4 order by rand() limit 1")
    String getTemperature4();

    @Select("SELECT data FROM  temperature_5 order by rand() limit 1")
    String getTemperature5();


    @Select("SELECT data FROM  temperature_6 order by rand() limit 1")
    String getTemperature6();

    @Select("SELECT data FROM  temperature_7 order by rand() limit 1")
    String getTemperature7();

    @Select("SELECT data FROM  temperature_8 order by rand() limit 1")
    String getTemperature8();

    @Select("SELECT data FROM  temperature_9 order by rand() limit 1")
    String getTemperature9();

    @Select("SELECT data FROM  temperature_10 order by rand() limit 1")
    String getTemperature10();


}
